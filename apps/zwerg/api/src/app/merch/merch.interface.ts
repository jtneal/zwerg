// Schema: https://docs.fourthwall.com/open-api-docs/open-api.yaml

export interface MerchProductsResponse {
  results: MerchProduct[];
}

export interface MerchProduct {
  id: string;
  name: string;
  slug: string;
  description: string;
  state: MerchProductState;
  access: MerchProductAccess;
  images: MerchProductImage[];
  variants: MerchProductVariant[];
  createdAt: string;
  updatedAt: string;
}

export interface MerchProductState {
  type: 'AVAILABLE' | 'SOLD_OUT';
}

export interface MerchProductAccess {
  type: 'PUBLIC' | 'HIDDEN' | 'ARCHIVED';
}

export interface MerchProductImage {
  height: number;
  id: string;
  url: string;
  width: number;
}

export interface MerchProductVariant {
  id: string;
  name: string;
  sku: string;
  unitPrice: MerchProductVariantUnitPrice;
  attributes: MerchProductVariantAttributes;
  stock: MerchProductVariantStock;
  weight: MerchProductVariantWeight;
  dimensions: MerchProductVariantDimensions;
  images: MerchProductImage[];
}

export interface MerchProductVariantUnitPrice {
  currency: string;
  value: number;
}

export interface MerchProductVariantAttributes {
  color?: MerchProductVariantAttributesColor;
  description: string;
  size?: MerchProductVariantAttributesSize;
}

export interface MerchProductVariantAttributesColor {
  name: string;
  swatch: string;
}

export interface MerchProductVariantAttributesSize {
  name: string;
}

export interface MerchProductVariantStock {
  type: 'UNLIMITED' | 'LIMITED';
}

export interface MerchProductVariantWeight {
  unit: string;
  value: number;
}

export interface MerchProductVariantDimensions {
  height: number;
  length: number;
  unit: string;
  width: number;
}
