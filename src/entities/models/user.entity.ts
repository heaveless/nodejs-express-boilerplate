import { ApiModel, ApiModelProperty } from 'swagger-express-ts';
import { Field, InputType, ObjectType } from 'type-graphql';
import { Column, Entity } from 'typeorm';
import { CustomBaseEntity } from './base/base.entity';

@ApiModel()
@ObjectType()
@Entity({ name: 'sys_users' })
export class User extends CustomBaseEntity {
  @ApiModelProperty({ required: true })
  @Field()
  @Column()
  name!: string;

  @ApiModelProperty({ required: true })
  @Field()
  @Column()
  email!: string;

  @ApiModelProperty({ required: true })
  @Field()
  @Column()
  phone!: string;
}

@InputType()
export class UserInput implements Partial<User> {}
