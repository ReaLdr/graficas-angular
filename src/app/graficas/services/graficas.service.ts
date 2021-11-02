import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor( private http: HttpClient ) { }

  getUsuariosRS (){
    return this.http.get('http://localhost:3000/grafica');
  }

  getDataRS(){
    return this.getUsuariosRS()
      .pipe(
        delay(500),
        map( data =>{
          const labels = Object.keys(data);
        const values = Object.values(data);
          return { labels, values };
        })
      )
  }
}
