import {
  Entity,
  BaseEntity,
  PrimaryColumn,
  Column,
  OneToMany,
  JoinColumn
} from 'typeorm';
import bcrypt from 'bcrypt';
import GradesEntity from './grades-entity';

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

  @OneToMany(type => GradesEntity, grade => grade.userId)
  grades?: GradesEntity[];

  constructor(name: string, email: string, password: string) {
    super();

    this.name = name;
    this.email = email;
    this.password = password;
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