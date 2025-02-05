import { Test, TestingModule } from '@nestjs/testing';
import { DrawingsController } from './drawings.controller';
import { DrawingsService } from './drawings.service';

describe('DrawingsController', () => {
  let controller: DrawingsController;

  // Creamos un mock para DrawingsService (puede ser un objeto vacío si solo verificamos la existencia del controlador)
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
