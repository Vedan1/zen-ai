import { Injectable, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async register(username: string): Promise<User> {
    const existingUser = await this.userModel.findOne({ username }).exec();
    if (existingUser) {
      throw new ConflictException('Username already exists');
    }
    const newUser = new this.userModel({ username });
    return newUser.save();
  }

  async validate(username: string): Promise<boolean> {
    const user = await this.userModel.findOne({ username }).exec();
    return !!user;
  }
}
