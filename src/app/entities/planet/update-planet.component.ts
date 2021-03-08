import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Node } from 'src/app/models/node.model';
import { PlanetRouting } from 'src/app/models/planet-routing.model';
import { PlanetRoutingService } from 'src/app/service/planet-routing.service';

@Component({
  selector: 'app-update-planet',
  templateUrl: './update-planet.component.html',
})
export class UpdatePlanetComponent implements OnInit {

  nodes: Node[];
  private planet: PlanetRouting;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private planetRoutingService: PlanetRoutingService) {
    this.planet = new PlanetRouting();
  }

  ngOnInit(): void {
  }

  form = new FormGroup({
    originPlanet: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    destPlanet: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ])
  });

  createFromForm(): PlanetRouting {
    return {
      ... new PlanetRouting(),
      originPlanet: this.form.get('originPlanet')!.value,
      destPlanet: this.form.get('destPlanet')!.value
    }
  }

  get originPlanet() {
    return this.form.get('originPlanet');
  }

  get destPlanet() {
    return this.form.get('destPlanet');
  }

  onSubmit() {
    const planet = new PlanetRouting();
    const original: string = this.form.get('originPlanet')!.value;
    const dest: string = this.form.get('destPlanet')!.value;
    planet.destPlanet = dest;
    planet.originPlanet = original;
    this.planetRoutingService.fetchShortestDistance(planet).subscribe(result => {
      this.nodes = result;
      console.log(this.nodes);
    });

  }

  gotoPlanetList() {
    this.router.navigate(['/planets']);
  }
}
