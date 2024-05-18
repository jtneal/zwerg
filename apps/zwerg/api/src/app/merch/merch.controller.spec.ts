import { Test, TestingModule } from '@nestjs/testing';

import { MerchController } from './merch.controller';
import { MerchService } from './merch.service';

describe('MerchController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [MerchController],
      providers: [MerchService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Hello API"', () => {
      const merchController = app.get<MerchController>(MerchController);
      expect(merchController.getData()).toEqual({ message: 'Hello API' });
    });
  });
});
