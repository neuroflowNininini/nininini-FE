type MainCategory = 'nail' | 'pedi' | 'etc';

export type ProductListItem = {
  prodId: number;
  prodCode: string;
  prodName: string;
  price: number;
  mainCate: MainCategory;
  thumbnails: string[];
};

export type ReadProductList = {
  maxPage: number;
  pageNum: number;
  category?: string;
  products: ProductListItem[];
};
