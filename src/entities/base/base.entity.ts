import { Column, Entity, BaseEntity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RootEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ name: 'create_by' })
  createBy!: string;

  @Column({ name: 'create_time' })
  createTime!: Date;

  @Column({ name: 'update_by', nullable: true })
  updateBy?: string;

  @Column({ name: 'update_time', nullable: true })
  updateTime?: Date;

  @Column({ name: 'is_deleted' })
  isDeleted!: boolean;
}
