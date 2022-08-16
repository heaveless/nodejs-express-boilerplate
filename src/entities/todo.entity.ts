import { ApiModel, ApiModelProperty } from 'swagger-express-ts';
import { Field, InputType, ObjectType } from 'type-graphql';
import { Column, Entity } from 'typeorm';
import { RootEntity } from './base/base.entity';

@ObjectType()
@Entity({ name: 'sys_todos' })
export class Todo extends RootEntity {
  @Field()
  @Column()
  name!: string;

  @Field()
  @Column()
  isComplete!: boolean;

  @Field()
  @Column()
  autor!: string;
}

@ApiModel()
@InputType()
export class TodoDto implements Partial<Todo> {
  @ApiModelProperty({ required: true })
  @Field()
  name!: string;

  @ApiModelProperty({ required: true })
  @Field()
  isComplete!: boolean;

  @ApiModelProperty({ required: true })
  @Field()
  autor!: string;
}
