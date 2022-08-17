import {
  Entity,
  BaseEntity,
  PrimaryColumn,
  Column,
  ManyToOne,
  JoinColumn
} from 'typeorm';
import UserEntity from './user-entity';

@Entity({ name: 'user' })
export default class NotesEntity extends BaseEntity {
  @PrimaryColumn()
  id?: number;

  @Column()
  description: string;

  @Column()
  value: number;

  @ManyToOne(type=>UserEntity, user=>user.notes)
  @JoinColumn({name:'user_id',referencedColumnName:'id'})
  user?:UserEntity

  constructor(description: string, value: number) {
    super();

    this.description = description;
    this.value = value;
  };
};