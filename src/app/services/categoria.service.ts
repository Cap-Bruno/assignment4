import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../Categoria'

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private urlAPI = 'https://coursera-jhu-default-rtdb.firebaseio.com/categories.json';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.urlAPI)
  }
}
