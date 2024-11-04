import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../services/auth.service';
import { CreateUserBodyDto } from '../../users/dto/create-user.dto';
import { GlobalSwagger } from '../../common/decorators/global-swagger.decorator';
import { UserRegisterDto } from '../dto/user-register.dto';
import { SingInDto, SingInResponseDto } from '../dto';

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
    async register(@Body() createUserDto: CreateUserBodyDto): Promise<UserRegisterDto> {
        return this.authService.register(createUserDto);
    }

    @UseGuards(AuthGuard('local'))
    @GlobalSwagger(
        'Login user',
        'This service is used to login user',
        SingInResponseDto,
        201,
    )
    @Post('login')
    async singIn(@Body() singInDto: SingInDto, @Request() req: any): Promise<SingInResponseDto> {
        return this.authService.singIn(req.user);
    }
}
