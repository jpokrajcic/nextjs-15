export interface Tag {
  _id: string;
  name: string;
  questions?: number;
  showCount?: boolean;
}

export interface Question {
  _id: string;
  title: string;
  description: string;
  tags: {_id: string; name: string}[];
  author: {_id: string; name: string; image: string};
  upvotes: number;
  answers: number;
  views: number;
  createdAt: Date;
}

export interface Metric {
  imgUrl: string;
  alt: string;
  value: number | string;
  title: string;
  href?: string;
  textStyles?: string;
  imgStyles?: string;
  isAuthor?: boolean;
}
