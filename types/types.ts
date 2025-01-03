import {NextResponse} from "next/server";

export interface Tag {
  _id: string;
  name: string;
  questions?: number;
  showCount?: boolean;
  compact?: boolean;
  remove?: boolean;
  isButton?: boolean;
  handleRemove?: () => void;
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

export type ActionResponse<T = null> = {
  success: boolean;
  data?: T;
  error?: {
    message: string;
    details?: Record<string, string[]>;
  };
  status?: number;
};

export type SuccessResponse<T = null> = ActionResponse<T> & {success: true};
export type ErrorResponse = ActionResponse<undefined> & {success: false};

export type APIErrorResponse = NextResponse<ErrorResponse>;
export type APIResponse<T = null> = NextResponse<
  SuccessResponse<T> | ErrorResponse
>;
