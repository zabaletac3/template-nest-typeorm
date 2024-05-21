import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({
  timestamps: true,
  collection: 'users',
})
class User {
  @ApiProperty({ type: String, required: true, example: 'John' })
  @Prop({ type: String, required: true })
  firstName: string;

  @ApiProperty({ type: String, required: true, example: 'Doe' })
  @Prop({ type: String, required: true })
  lastName: string;

  @ApiProperty({ type: String, required: true, example: 'johnDoe@test.com' })
  @Prop({ type: String, required: true })
  email: string;

  @ApiProperty({ type: String, required: false, example: '+3499134912' })
  @Prop({ type: String, required: false })
  phone: string;

  @ApiProperty({ type: Date, required: false, example: Date.now() })
  @Prop({ type: Date, required: false })
  deletedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
UserSchema.index({ email: 1 });
