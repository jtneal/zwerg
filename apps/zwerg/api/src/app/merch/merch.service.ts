import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosRequestConfig } from 'axios';
import { Observable, map } from 'rxjs';
import { MerchProductsResponse } from './merch.interface';

@Injectable()
export class MerchService {
  private readonly options: AxiosRequestConfig = {
    baseURL: this.config.get<string>('FOURTHWALL_URL'),
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${this.config.get<string>('FOURTHWALL_USERNAME')}:${this.config.get<string>('FOURTHWALL_PASSWORD')}`
      ).toString('base64')}`,
    },
  };

  public constructor(private readonly config: ConfigService, private readonly http: HttpService) {}

  public getProducts(): Observable<MerchProductsResponse> {
    return this.http
      .get<MerchProductsResponse>('/products?page=0&size=100', this.options)
      .pipe(map((response) => response.data));
  }
}
