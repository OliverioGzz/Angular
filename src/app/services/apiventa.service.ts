import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Venta } from '../models/venta';
import { Observable } from 'rxjs';
import { Response } from '../models/response';

const httpOption = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ApiventaService {

  url: string = 'https://localhost:7248/api/Venta';

  constructor(
    private _http: HttpClient
  ) { }

  add(venta: Venta): Observable<Response>{
    console.log(venta);
    return this._http.post<Response>(this.url, venta, httpOption);
  }
}
