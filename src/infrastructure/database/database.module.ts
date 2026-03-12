import { Module } from '@nestjs/common';
import { databaseProvider } from './data-source';

@Module({
  providers: [...databaseProvider],
  exports: [...databaseProvider],
})
export class DatabaseModule {}
