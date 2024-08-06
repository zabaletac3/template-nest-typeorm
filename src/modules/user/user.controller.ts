import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { CreateUserDto } from '@shared/dtos/user/create-user.dto';
import { UpdateUserDto } from '@shared/dtos/user/update-user.dto';
import { JwtGuard } from '@shared/guards/jwt.guard';
import { JoiValidationPipe } from '@shared/pipes/joiValidation.pipe';
import { ApiOkResponse } from '@nestjs/swagger';
import { User } from '@shared/schemas/user.schema';

import { userValidationSchema } from './joiValidation';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtGuard)
  @UsePipes(new JoiValidationPipe(userValidationSchema))
  @ApiOkResponse({ type: User })
  @Post()
  create(@Body() createUserDto: CreateUserDto): string {
    return this.userService.create(createUserDto);
  }

  @UseGuards(JwtGuard)
  @ApiOkResponse({ type: [User] })
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @UseGuards(JwtGuard)
  @ApiOkResponse({ type: User })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @UseGuards(JwtGuard)
  @ApiOkResponse({ type: User })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @UseGuards(JwtGuard)
  @ApiOkResponse({ type: User })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
