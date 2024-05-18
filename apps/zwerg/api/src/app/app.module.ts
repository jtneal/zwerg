import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MerchModule } from './merch/merch.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), MerchModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
