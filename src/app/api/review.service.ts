import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable, of } from 'rxjs';
import { ReviewResponse } from '@models';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  constructor(private httpService: HttpService) {}

  getReview(): Observable<ReviewResponse[]> {
    return this.httpService.get('/review');
  }
}
