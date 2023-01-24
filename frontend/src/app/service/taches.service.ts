import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tache } from '../model/tache';
import { Status } from '../model/status';

@Injectable({
  providedIn: 'root'
})
export class TachesService {
  private url:string = 'http://localhost:3000/taches/';
  private urlStatus:string = 'http://localhost:3000/status/';

  constructor(private http: HttpClient) { }

  getTaches():Observable<Array<Tache>> {
    return this.http.get<Array<Tache>>(this.url, {withCredentials:true});
  }

  getStatus():Observable<Array<Status>> {
    return this.http.get<Array<Status>>(this.urlStatus, {withCredentials:true});
  }

  ajoutTaches(tache:Tache):Observable<Tache> {
    return this.http.post<Tache>(this.url,tache, {withCredentials:true});
  }

  ajoutStatus(statu:Status):Observable<Status> {
    return this.http.post<Status>(this.urlStatus,statu, {withCredentials:true});
  }

  updateTaches(tache:Tache):Observable<Tache> {
    return this.http.put<Tache>(this.url+tache._id, tache, {withCredentials:true});
  }

  removeTaches(tache:Tache):Observable<Tache> {
    return this.http.delete<Tache>(this.url+tache._id, {withCredentials:true});
  }
  
  removeStatus(List:Status):Observable<Status> {
    return this.http.delete<Status>(this.urlStatus+List._id, {withCredentials:true});
  }

  
}
