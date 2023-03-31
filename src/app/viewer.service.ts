import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ViewerService {
  constructor(private httpClient: HttpClient) {}

  getData() {
    return this.httpClient.get<any>('../assets/data.json');
    // return fetch('../assets/data.json').then(res=>res.json());
  }
}
