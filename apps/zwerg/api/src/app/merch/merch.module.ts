import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MerchController } from './merch.controller';
import { MerchService } from './merch.service';

@Module({
  imports: [HttpModule],
  controllers: [MerchController],
  providers: [MerchService],
})
export class MerchModule {}
