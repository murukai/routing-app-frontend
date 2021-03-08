import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Planet } from '../models/planet.model';
import { Node } from '../models/node.model';


@Injectable({
  providedIn: 'root'
})
export class PlanetRoutingService {
  constructor(private http: HttpClient) { }

  private apiUrl: string = "http://localhost:8888/api/";
  public fetchShortestDistance(planet: any): Observable<Node[]> {
    return this.http.get<Node[]>(this.apiUrl + "/route/" + planet.originPlanet + "/" + planet.destPlanet);
  }

  public findAll(): Observable<Planet[]> {
    return this.http.get<Planet[]>(this.apiUrl + "planets");
  }


  public save(planet: Planet) {
    return this.http.post(this.apiUrl + 'routes/create', planet);
  }
}
