import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { DrawingsModule } from './drawings/drawings.module';

@Module({
  imports: [DrawingsModule],
  providers: [PrismaService],
})
export class AppModule {}
