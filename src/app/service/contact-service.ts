import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiResponseModel} from "../model/api-response.model";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) {
  }

  baseUrl: string = 'http://localhost:8080/api/contact'

  deleteProjectContact(id: number): Observable<ApiResponseModel> {
    return this.http.delete<ApiResponseModel>(`${this.baseUrl}/deleteContact/${id}`)
  }

}
