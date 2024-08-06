import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ type: String, required: true, example: 'John' })
  @Column({ type: 'varchar', nullable: false })
  firstName: string;

  @ApiProperty({ type: String, required: true, example: 'Doe' })
  @Column({ type: 'varchar', nullable: false })
  lastName: string;

  @ApiProperty({ type: String, required: true, example: 'johnDoe@test.com' })
  @Column({ type: 'varchar', nullable: false })
  @Index()
  email: string;

  @ApiProperty({ type: String, required: false, example: '+3499134912' })
  @Column({ type: 'varchar', nullable: true })
  phone: string;

  @ApiProperty({ type: Date, required: false, example: new Date() })
  @Column({ type: 'timestamp', nullable: true })
  deletedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
