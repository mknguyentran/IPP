import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable, of } from 'rxjs';
import { AchievementResponse, ReviewResponse } from '@models';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  constructor(private httpService: HttpService) {}

  getReview(): Observable<ReviewResponse[]> {
    return this.httpService.get('/review');
  }

  getAchievemnt(): Observable<AchievementResponse[]> {
    return this.httpService.get('/achievement');
  }
}
