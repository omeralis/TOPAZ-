import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRoutes } from 'src/app/shared/models/router/ApiRoutes';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CaseService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // get data of case
  getList() {
    return this.http.get(this.apiUrl + ApiRoutes.case.all);
  }
  addCase(data: any) {
    return this.http.post(this.apiUrl + ApiRoutes.case.add, data);
  }
  UpdateCase(id: number, data: any) {
    return this.http.put(this.apiUrl + ApiRoutes.case.edit + id, data);
  }
  getCaseType() {
    return this.http.get(this.apiUrl + ApiRoutes.caseType.all);
  }
}
