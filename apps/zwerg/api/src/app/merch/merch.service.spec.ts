import { Test } from '@nestjs/testing';

import { MerchService } from './merch.service';

describe('MerchService', () => {
  let service: MerchService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [MerchService],
    }).compile();

    service = app.get<MerchService>(MerchService);
  });

  describe('getData', () => {
    it('should return "Hello API"', () => {
      expect(service.getData()).toEqual({ message: 'Hello API' });
    });
  });
});
