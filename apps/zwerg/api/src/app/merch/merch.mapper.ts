import { MerchDto } from '@zwerg/common-dtos';
import { MerchProduct, MerchProductsResponse } from './merch.interface';

export class MerchMapper {
  public static map(response: MerchProductsResponse): MerchDto {
    return {
      products: response.results
        .filter(MerchMapper.showProduct)
        .sort((a, b) => a.createdAt < b.createdAt ? 1 : -1)
        .map((product) => ({
          image: product.images[0].url,
          link: `https://shop.iiizwerg.com/products/${product.slug}`,
          name: product.name,
          price: product.variants.find((x) => x.unitPrice.currency === 'USD').unitPrice.value,
        })),
    };
  }

  public static showProduct(product: MerchProduct): boolean {
    if (product.access.type !== 'PUBLIC') {
      return false;
    }

    if (product.state.type !== 'AVAILABLE') {
      return false;
    }

    if (!product.images.length) {
      return false;
    }

    if (!product.variants.find((x) => x.unitPrice.currency === 'USD')) {
      return false;
    }

    return true;
  }
}
