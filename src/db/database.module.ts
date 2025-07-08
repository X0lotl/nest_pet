import { Module, Global } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { db } from './connection';

export const DATABASE_TOKEN = 'DATABASE';

@Global()
@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: DATABASE_TOKEN,
      useValue: db,
    },
  ],
  exports: [DATABASE_TOKEN],
})
export class DatabaseModule {}
