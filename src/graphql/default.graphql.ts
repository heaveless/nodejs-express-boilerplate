import { inject, injectable } from 'inversify';
import { DefaultService } from '@services';
import { Default } from '@entities';
import { Query, Resolver } from 'type-graphql';

@injectable()
@Resolver(() => Default)
export class DefaultGraphql {
  constructor(
    @inject(DefaultService)
    private defaultService: DefaultService
  ) {}

  @Query(() => [Default], { nullable: true })
  public async queryManyDefaults() {
    return await this.defaultService.getAll();
  }
}
