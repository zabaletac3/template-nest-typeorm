import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '@shared/entities/user.entity';
import { HttpModule } from '@nestjs/axios';

import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    //Modulo necesario para provider o servicios que usen nest/axios
    HttpModule.register({
      timeout: 36000,
      maxRedirects: 5,
    }),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
