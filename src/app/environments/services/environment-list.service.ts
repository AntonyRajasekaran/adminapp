import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EnvironmentListInterface } from '../types/environmentListInterface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EnvironmentListService {
  adminUrl = 'https://admin.kincaidit.com/api/';

  constructor(private http: HttpClient) {}

  getEnvironments(): Observable<EnvironmentListInterface[]> {
    return this.http.get<EnvironmentListInterface[]>(this.adminUrl).pipe(
      map((envs: EnvironmentListInterface[]) => {
        if (Array.isArray(envs)) {
          return envs.map((env) => env);
        } else {
          return [envs];
        }
      })
    );
  }
}
