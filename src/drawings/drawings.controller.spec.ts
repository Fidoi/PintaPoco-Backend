import { Test, TestingModule } from '@nestjs/testing';
import { DrawingsService } from './drawings.service';
import { PrismaService } from '../prisma.service';

describe('DrawingsService', () => {
  let service: DrawingsService;

  const mockPrismaService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DrawingsService,
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();

    service = module.get<DrawingsService>(DrawingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
