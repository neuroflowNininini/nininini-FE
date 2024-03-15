type Review = {
  id: number;
  prodCode: string;
  score: number;
  buyerName: string;
  uploadDate: string;
  content: string;
  img: string;
  wasAiSize: boolean;
};

export type ReadReview = {
  maxPage: number;
  avgScore: number;
  scoreRatio: number[];
  reviews: Review[];
};
