export interface ReviewResponse {
  Url: string;
  InputtedAt?: number;
}

export interface AchievementResponse {
  StudentID: string;
  StudentName: string;
  ThumbnailImageUrl?: string;
  Grade: {
    Writing: number;
    Reading: number;
    Listening: number;
    Speaking: number;
    Overall: number;
  };
  DetailImage?: string[];
  ReviewUrl?: string;
  ThumbnailImage?: any;
}

export interface ReviewRequest {
  Url: string;
}
