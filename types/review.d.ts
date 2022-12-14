interface Reviewer {
  name: string;
  image: string;
}

export interface Review {
  id: string;
  createdAt: Date;
  homeId: number;
  reviewer: Reviewer;
  rating: string;
  date: Date;
  comment: string;
}
