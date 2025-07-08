import { Module } from '@nestjs/common';
import { PingModule } from './ping/ping.module';
import { HealthModule } from './health/health.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PingModule, HealthModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
