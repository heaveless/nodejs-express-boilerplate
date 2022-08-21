// import { inject } from 'inversify';
import { Todo } from '@entities';
import { injectRepository } from '@experimentallife/database';
import { provide } from 'inversify-binding-decorators';
import { Repository } from 'typeorm';
import { TodoDto } from './todo.entity';
// import { TodoRepository } from '@repositories';
// import { Todo, TodoDto } from '@entities';

@provide(TodoService)
export class TodoService {
  constructor(
    @injectRepository(Todo) private readonly repository: Repository<Todo>
  ) {}

  public async getOne(id: string) {
    return {};
  }

  public async getMany() {
    console.log('aaaaaa', this.repository);
    const result = await this.repository.findOne('22');
    console.log(result);
    return [];
  }

  public async create(dto: TodoDto) {
    return {};
  }

  public async update(dto: TodoDto) {
    return {};
  }

  public async delete(id: string) {
    return {};
  }
}
