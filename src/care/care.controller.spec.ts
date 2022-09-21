import { Test, TestingModule } from '@nestjs/testing';
import { CareController } from './care.controller';

describe('CareController', () => {
  let controller: CareController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CareController],
    }).compile();

    controller = module.get<CareController>(CareController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
