import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/app/models/planet.model';

import { PlanetRoutingService } from 'src/app/service/planet-routing.service';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
})
export class PlanetDetailsComponent implements OnInit {

  planets: Planet[];
  constructor(private planetRoutingService: PlanetRoutingService) { }

  ngOnInit() {
    this.planetRoutingService.findAll().subscribe(data => {
      // console.log(data);
      this.planets = data;
      console.log('Planets from the server : ');
      console.log(this.planets);
    });
  }

}
