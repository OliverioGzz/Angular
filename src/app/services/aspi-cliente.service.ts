import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AspiClienteService {

  url: string = 'https://localhost:7248/api/Cliente';

  constructor(
    private _http: HttpClient
  ) { }

  getClientes(): Observable<Response>{
    return this._http.get<Response>(this.url);
  }
}

