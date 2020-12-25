import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable, of } from 'rxjs';
import { AchievementResponse, ReviewResponse } from '@models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private httpService: HttpService) {}

  getFile(fileUrl: string): Observable<Blob> {
    return this.httpService.getFile(fileUrl);
  }
}
