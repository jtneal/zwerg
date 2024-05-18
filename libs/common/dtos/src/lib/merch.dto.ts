export class MerchDto {
  public products: MerchProductDto[];
}

export class MerchProductDto {
  public image: string;
  public link: string;
  public name: string;
  public price: number;
}
