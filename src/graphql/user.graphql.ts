import { inject, injectable } from 'inversify';
import { UserService } from '@services';
import { User } from '@entities';
import { Query, Resolver } from 'type-graphql';

@injectable()
@Resolver(() => User)
export class UserGraphql {
  constructor(
    @inject(UserService)
    private userService: UserService
  ) {}

  @Query(() => User, { nullable: true })
  public async queryUser(id: string) {
    return await this.userService.getById(id);
  }

  @Query(() => [User], { nullable: true })
  public async queryManyUsers() {
    return await this.userService.getAll();
  }
}
