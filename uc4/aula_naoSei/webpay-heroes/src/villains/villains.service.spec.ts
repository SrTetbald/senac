import { Test, TestingModule } from '@nestjs/testing';
import { VillainsService } from './villains.service';

describe('VillainsService', () => {
  let service: VillainsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VillainsService],
    }).compile();

    service = module.get<VillainsService>(VillainsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
