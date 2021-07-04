export interface Image {
  src: string,
  alt: string,
}

export interface Video {
  source: string,
  poster: string,
}

export interface Product {
  image: Image,
  video: Video,
  description: string,
  price: string,
  href: string,
  merchant: string,
}

export interface ProductListInterface {
  productList: Product[],
}

export interface FilterOption {
  type: string,
  label: string,
}
