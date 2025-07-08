import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PingService } from './ping.service';

@ApiTags('Ping')
@Controller('ping')
export class PingController {
  constructor(private readonly pingService: PingService) {}

  @Get()
  @ApiOperation({ summary: 'Ping endpoint' })
  @ApiResponse({ status: 200, description: 'Returns pong response' })
  ping(): string {
    return this.pingService.ping();
  }
}
