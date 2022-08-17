import { inject } from 'inversify';
import { provide } from 'inversify-binding-decorators';
import { TodoRepository } from '@repositories';
import { Todo, TodoDto } from '@entities';
import { redisCaching, RedisKey } from '@common';

@provide(TodoService)
export class TodoService {
  constructor(@inject(TodoRepository) private TodoRepository: TodoRepository) {}

  @redisCaching(30, RedisKey.TodoGetOne)
  public async getOne(id: string) {
    return await this.TodoRepository.getOne(id);
  }

  @redisCaching(30, RedisKey.TodoGetMany)
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
