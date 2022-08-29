import {
  Entity,
  BaseEntity,
  PrimaryColumn,
  Column,
  ManyToOne,
  JoinColumn
} from 'typeorm';
import UserEntity from './user-entity';

@Entity({ name: 'user_grade' })
export default class GradesEntity extends BaseEntity {
  @PrimaryColumn()
  id?: number;

  @Column({ name: 'user_id' })
  userId: number;

  @Column()
  value: number;

  @ManyToOne(type => UserEntity, user => user.grades)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user?: UserEntity

  constructor(userId: number, value: number) {
    super();

    this.userId = userId;
    this.value = value;
  };
};