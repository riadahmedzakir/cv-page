import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RootService {
  constructor(private http: HttpClient) {}

  getGithubActivityGraph(): Observable<any> {
    const url = `https://github.com/users/riadahmedzakir/contributions`;
    return this.http.get<any>(url);
  }
}
