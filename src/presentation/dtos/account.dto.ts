import { IsString, IsNotEmpty } from '@nestjs/class-validator';

export class CreateAccountDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  password: string;
}
export class AccountResponseDto {
  id: number;
  name: string;
  email: string;
  password: string;
}
