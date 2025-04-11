import { ReviewType } from "./review";

export interface cardPageType {
    id: number;
    name: string;
    description: string;
    price: number;
    sale: number;
    nstar: number;
    isnew: boolean;
    offerExpiresIn: Date;
    measurements: string;
    colors: string[];
    category: string;
    images: string[];
    reviews: number;
  }