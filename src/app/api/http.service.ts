import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  baseUrl: string = environment.baseUrl;
  constructor(private httpClient: HttpClient) {}

  get(path: string): Observable<any> {
    return this.httpClient.get(this.baseUrl + path);
  }
}
