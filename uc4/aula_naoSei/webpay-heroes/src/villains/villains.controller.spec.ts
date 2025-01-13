import { Test, TestingModule } from '@nestjs/testing';
import { VillainsController } from './villains.controller';

describe('VillainsController', () => {
  let controller: VillainsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VillainsController],
    }).compile();

    controller = module.get<VillainsController>(VillainsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
