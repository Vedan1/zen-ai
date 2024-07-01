import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body('username') username: string) {
    if (!username) {
      throw new BadRequestException('Username is required');
    }
    return this.userService.register(username);
  }

  @Post('validate')
  async validate(@Body('username') username: string) {
    if (!username) {
      throw new BadRequestException('Username is required');
    }
    return { valid: await this.userService.validate(username) };
  }
}
