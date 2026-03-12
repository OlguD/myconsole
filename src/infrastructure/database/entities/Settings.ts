import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';
import { ThemeOptions } from 'src/shared/enums/theme-options';

@Entity()
export class Settings {
  @PrimaryGeneratedColumn({ type: 'smallint', name: 'settings_id' })
  id: number;

  @Column({ type: 'enum', name: 'theme_preferences', default: ThemeOptions.Dark })
  themePreferences: ThemeOptions;

  @OneToOne(() => User, (user) => user.settings, { onDelete: 'CASCADE' })
  @JoinColumn()
  user: User;
}
