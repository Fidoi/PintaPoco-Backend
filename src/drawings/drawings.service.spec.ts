import { Test, TestingModule } from '@nestjs/testing';
import { DrawingsController } from './drawings.controller';
import { DrawingsService } from './drawings.service';

describe('DrawingsController', () => {
  let controller: DrawingsController;

  const mockDrawingsService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DrawingsController],
      providers: [{ provide: DrawingsService, useValue: mockDrawingsService }],
    }).compile();

    controller = module.get<DrawingsController>(DrawingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
