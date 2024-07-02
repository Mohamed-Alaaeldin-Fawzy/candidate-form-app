import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CandidateService {
  url = 'http://localhost:3000/candidate';
  constructor(private http: HttpClient) {}

  submitCandidate(candidateData: any): Observable<any> {
    return this.http.post(this.url, candidateData);
  }
}
