import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Settings } from './Settings';

@Entity()
export class User {
  @PrimaryGeneratedColumn({ type: 'smallint', name: 'user_id' })
  userId: number;

  @Column({ type: 'varchar', length: 50, name: 'name', nullable: false })
  name!: string;

  @Column({ type: 'varchar', length: 50, name: 'surname', nullable: false })
  surname!: string;
  
  

  @OneToOne(() => Settings, (settings) => settings.user)
  settings: Settings;
}
