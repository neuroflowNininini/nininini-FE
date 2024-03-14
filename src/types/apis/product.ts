type MainCategory = 'nail' | 'pedi' | 'etc';
type Option = {
  id: number;
  content: string;
};

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

export type Product = ProductListItem & {
  detailImg: string;
  aiSizeAvail: boolean;
  tags: string[];
  options: Option[];
};
