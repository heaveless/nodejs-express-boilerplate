import { inject, injectable } from 'inversify';
import { TodoService } from '@services';
import { Todo, TodoDto } from '@entities';
import { Query, Mutation, Resolver, Arg } from 'type-graphql';

@injectable()
@Resolver(() => Todo)
export class TodoGraphql {
  constructor(
    @inject(TodoService)
    private todoService: TodoService
  ) {}

  @Query(() => Todo, { nullable: true })
  public async queryTodo(@Arg('id') id: string) {
    return await this.todoService.getOne(id);
  }

  @Query(() => [Todo], { nullable: true })
  public async queryManyTodos() {
    return await this.todoService.getMany();
  }

  @Mutation(() => Todo, { nullable: true })
  public async createTodo(@Arg('payload', () => TodoDto) dto: TodoDto) {
    return await this.todoService.create(dto);
  }

  @Mutation(() => Todo, { nullable: true })
  public async updateTodo(@Arg('payload', () => TodoDto) dto: TodoDto) {
    return await this.todoService.update(dto);
  }

  @Mutation(() => Todo, { nullable: true })
  public async deleteTodo(@Arg('id') id: string) {
    return await this.todoService.delete(id);
  }
}
