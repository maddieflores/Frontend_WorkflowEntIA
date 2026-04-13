import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // Esta es la URL que ya probamos en el navegador y funcionó
  private apiUrl = 'http://localhost:8080/api/test';

  constructor(private http: HttpClient) { }

  // Este método irá a Spring Boot y traerá el JSON
  getDatosDelBackend(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
