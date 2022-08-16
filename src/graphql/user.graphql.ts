import { inject, injectable } from 'inversify';
import { UserService } from '@services';
import { User, UserDto } from '@entities';
import { Query, Mutation, Resolver, Arg } from 'type-graphql';

@injectable()
@Resolver(() => User)
export class UserGraphql {
  constructor(
    @inject(UserService)
    private userService: UserService
  ) {}

  @Query(() => User, { nullable: true })
  public async queryUser(@Arg('id') id: string) {
    return await this.userService.getOne(id);
  }

  @Query(() => [User], { nullable: true })
  public async queryManyUsers() {
    return await this.userService.getMany();
  }

  @Mutation(() => User, { nullable: true })
  public async createUser(@Arg('payload', () => UserDto) dto: UserDto) {
    return await this.userService.create(dto);
  }

  @Mutation(() => User, { nullable: true })
  public async updateUser(@Arg('payload', () => UserDto) dto: UserDto) {
    return await this.userService.update(dto);
  }

  @Mutation(() => User, { nullable: true })
  public async deleteUser(@Arg('id') id: string) {
    return await this.userService.delete(id);
  }
}
