import { ApiModel, ApiModelProperty } from 'swagger-express-ts';
import { Field, InputType, ObjectType } from 'type-graphql';
import { Column, Entity } from 'typeorm';
import { CustomBaseEntity } from './base/base.entity';

@ApiModel()
@ObjectType()
@Entity()
export class Default extends CustomBaseEntity {
  @ApiModelProperty({ required: true })
  @Field()
  @Column()
  name!: string;
}

@InputType()
export class DefaultInput implements Partial<Default> {}
