import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiResponseModel} from "../model/api-response.model";
import {ProjectCreateModel} from "../model/project-create.model";
import {PagingRequest} from "../model/paging-request";
import {environment} from "../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) {
  }

  controller: string = 'project/'

  getProjects(data: PagingRequest): Observable<ApiResponseModel> {
    return this.http.get<ApiResponseModel>(environment.baseUrl + this.controller + `${data.path}`);
  }

  createProject(project: ProjectCreateModel): Observable<ApiResponseModel> {
    return this.http.post<ApiResponseModel>(environment.baseUrl + this.controller, project);
  }

  updateProject(id: number, project: ProjectCreateModel): Observable<ApiResponseModel> {
    return this.http.put<ApiResponseModel>(`${environment.baseUrl}${this.controller}${id}`, project)
  }

  getById(id: number): Observable<ApiResponseModel> {
    return this.http.get<ApiResponseModel>(`${environment.baseUrl}${this.controller}${id}`)
  }

  deleteProject(id: number): Observable<ApiResponseModel> {
    return this.http.delete<ApiResponseModel>(`${environment.baseUrl}${this.controller}${id}`)
  }

}
