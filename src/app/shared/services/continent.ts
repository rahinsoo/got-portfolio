import { Injectable, inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Continents} from '../models/continents.models';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContinentService {
  private continentsUrl = 'https://thronesapi.com/api/v2/Continents';
  private httpClient = inject(HttpClient);

  public getContinents() : Observable<Continents[]> {
    return this.httpClient.get<Continents[]>(this.continentsUrl);
  }

}
