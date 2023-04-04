import { Controller, HttpCode, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBadRequestResponse } from '@nestjs/swagger';
import { AccountResponseDto, CreateAccountDto } from '../dtos/account.dto';

@ApiTags('Account')
@Controller('account')
export class AccountController {
  constructor() {}
  @Post('/create')
  @HttpCode(200)
  @ApiOperation({
    summary: 'Create a new Account',
    description: 'This endpoint create a new user in the database',
  })
  @ApiBody({
    type: CreateAccountDto,
    description: 'Create a new account',
  })
  @ApiBadRequestResponse({
    description: 'Account already exists!',
  })
  async createAccount(
    @Body() account: CreateAccountDto,
  ): Promise<AccountResponseDto> {
    const createAccount = await this.createAccountUseCase.execute(
      account.name,
      account.email,
      account.password,
    );
    return createAccount;
  }
}
