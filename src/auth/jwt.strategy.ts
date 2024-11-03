
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { ConfigType } from '@nestjs/config';
import { config } from 'src/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private readonly authService: AuthService,
        @Inject(config.KEY)
        configuration: ConfigType<typeof config>
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configuration.auth.jwtSecret,
            usernameField: 'email',
        });
    }

    async validate(payload: any) {
        return { userId: payload.sub, username: payload.username, email: payload.email };
    }
}
