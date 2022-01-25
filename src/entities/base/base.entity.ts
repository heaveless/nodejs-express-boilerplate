import { ApiModel, ApiModelProperty } from 'swagger-express-ts';
import { Field, ObjectType } from 'type-graphql';
import { Column, Entity, BaseEntity, PrimaryGeneratedColumn } from 'typeorm';

@ApiModel({ name: 'Base' })
@ObjectType()
@Entity()
export class CustomBaseEntity extends BaseEntity {
  @ApiModelProperty({ required: true })
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ApiModelProperty({ required: true })
  @Field()
  @Column({ name: 'create_by' })
  createBy!: string;

  @ApiModelProperty({ required: true })
  @Field()
  @Column({ name: 'create_time' })
  createTime!: Date;

  @ApiModelProperty({ required: false })
  @Field()
  @Column({ name: 'update_by', nullable: true })
  updateBy?: string;

  @ApiModelProperty({ required: false })
  @Field()
  @Column({ name: 'update_time', nullable: true })
  updateTime?: Date;

  @ApiModelProperty({ required: true })
  @Field()
  @Column({ name: 'is_deleted' })
  isDeleted!: boolean;
}
