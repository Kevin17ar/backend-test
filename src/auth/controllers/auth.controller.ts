import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { SingInDto, SingInResponseDto } from '../dto/sing-in.dto';
import { GlobalSwagger } from 'src/common/decorators/global-swagger.decorator';
import { UserEntity } from 'src/users/entities/user.entity';
import { UserRegisterDto } from '../dto/user-register.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService,
    ) { }

    @GlobalSwagger(
        'Register new user',
        'This service is used to register new user',
        UserRegisterDto,
        201
    )
    @Post('register')
    async register(@Body() createUserDto: CreateUserDto): Promise<UserRegisterDto> {
        return this.authService.register(createUserDto);
    }

    @UseGuards(AuthGuard('local'))
    @GlobalSwagger(
        'Login user',
        'This service is used to login user',
        SingInResponseDto,
        200,
    )
    @Post('login')
    async singIn(@Body() singInDto: SingInDto, @Request() req): Promise<SingInResponseDto> {
        return this.authService.singIn(req.user);
    }
}
