import { ApiModel, ApiModelProperty } from 'swagger-express-ts';
import { Field, InputType, ObjectType } from 'type-graphql';
import { Column, Entity } from 'typeorm';
import { RootEntity } from './base/base.entity';

@ObjectType()
@Entity({ name: 'sys_users' })
export class User extends RootEntity {
  @Field()
  @Column()
  username!: string;

  @Field()
  @Column()
  password!: string;

  @Field()
  @Column()
  admin!: boolean;
}

@ApiModel()
@InputType()
export class UserDto implements Partial<User> {
  @ApiModelProperty({ required: true })
  @Field()
  username!: string;

  @ApiModelProperty({ required: true })
  @Field()
  password!: string;

  @ApiModelProperty({ required: true })
  @Field()
  admin!: boolean;
}
