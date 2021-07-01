export interface Price {
  image: string,
  description: string,
  price: string,
  href: string,
  merchant: string,
}

export interface PriceListInterface {
  priceList: Price[],
}

export interface FilterOption {
  type: string,
  label: string,
}
