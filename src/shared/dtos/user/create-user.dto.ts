import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ type: String, required: true, example: 'Jhon dow' })
  firstName: string;
  @ApiProperty({ type: String, required: true, example: 'Hillton' })
  lastName: string;
  @ApiProperty({ type: String, required: true, example: 'jhondow@gmail.com' })
  email: string;
  @ApiProperty({ type: String, required: true, example: '5730123455667' })
  phone: string;
}
