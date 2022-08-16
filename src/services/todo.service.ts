import { inject } from 'inversify';
import { provide } from 'inversify-binding-decorators';
import { TodoRepository } from '@repositories';
import { Todo, TodoDto } from '@entities';

@provide(TodoService)
export class TodoService {
  constructor(@inject(TodoRepository) private TodoRepository: TodoRepository) {}

  public async getOne(id: string) {
    return await this.TodoRepository.getOne(id);
  }

  public async getMany() {
    return await this.TodoRepository.getMany();
  }

  public async create(dto: TodoDto) {
    return await this.TodoRepository.createOne(dto as any as Todo);
  }

  public async update(dto: TodoDto) {
    return await this.TodoRepository.createOne(dto as any as Todo);
  }

  public async delete(id: string) {
    return await this.TodoRepository.delete(id);
  }
}
