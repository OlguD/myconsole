import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { databaseConfig } from './infrastructure/config/database.config';
import { authConfig } from './infrastructure/config/auth.config';
import { appConfig } from './infrastructure/config/app.config';
import { envValidationSchema } from './infrastructure/config/env.validation';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [databaseConfig, authConfig, appConfig],
    cache: true,
    validationSchema: envValidationSchema,
    envFilePath: [
      `.env.${process.env.NODE_ENV || 'development'}`,
      '.env',
    ],
    validationOptions: {
      allowUnknown: true,
      abortEarly: false,
    },
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}
