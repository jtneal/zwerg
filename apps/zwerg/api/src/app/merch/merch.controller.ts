import { Controller, Get } from '@nestjs/common';
import { MerchDto } from '@zwerg/common-dtos';
import { Observable, map } from 'rxjs';
import { MerchMapper } from './merch.mapper';
import { MerchService } from './merch.service';

@Controller('merch')
export class MerchController {
  public constructor(private readonly service: MerchService) {}

  @Get()
  public getMerch(): Observable<MerchDto> {
    return this.service.getProducts().pipe(map(MerchMapper.map));
  }
}
