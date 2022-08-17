import {
  Entity,
  BaseEntity,
  PrimaryColumn,
  Column,
  OneToMany,
  JoinColumn
} from 'typeorm';
import bcrypt from 'bcrypt';
import NotesEntity from './notes-entity';

@Entity({ name: 'user' })
export default class UserEntity extends BaseEntity {
  @PrimaryColumn()
  id?: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({name:'notes_id'})
  notesId: number;
  
  @OneToMany(type=>NotesEntity,notes=>notes.user)
  // @JoinColumn({name:'notes_id',referencedColumnName:'id'})
  notes?:NotesEntity[]

  constructor(name: string, email: string, password: string, notesId: number) {
    super();

    this.name = name;
    this.email = email;
    this.password = password;
    this.notesId = notesId;
  };

  static async createEncryptedPassword(password: string) {
    const encrypted = await bcrypt.hash(password, 10);

    return encrypted;
  };

  async comparePassword(password: string) {
    const result = await bcrypt.compare(password, this.password);

    return result;
  };
};