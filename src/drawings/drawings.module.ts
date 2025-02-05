import { Module } from '@nestjs/common';
import { DrawingsService } from './drawings.service';
import { DrawingsController } from './drawings.controller';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [],
  controllers: [DrawingsController],
  providers: [DrawingsService, PrismaService],
})
export class DrawingsModule {}
