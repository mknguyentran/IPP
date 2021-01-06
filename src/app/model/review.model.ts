export interface ReviewResponse {
  Url: string;
  ScreenshotUrl?: string;
  ShowScreenshot?: boolean;
  PostedAt?: number;
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
}

export interface ReviewRequest {
  Url: string;
}
