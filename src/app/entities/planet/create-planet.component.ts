import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Planet } from 'src/app/models/planet.model';
import { PlanetRoutingService } from 'src/app/service/planet-routing.service';

@Component({
  selector: 'app-create-planet',
  templateUrl: './create-planet.component.html',
})
export class CreatePlanetComponent implements OnInit {

  planet: Planet;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private planetRoutingService: PlanetRoutingService) {
    this.planet = new Planet();
  }

  ngOnInit(): void {
  }

  form = new FormGroup({
    planetNode: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ])
  });

  get planetNode() {
    return this.form.get('planetNode');
  }

  get name() {
    return this.form.get('name');
  }

  onSubmit() {
    const planet = this.createFromForm();
    this.planetRoutingService.save(this.planet).subscribe(result => this.gotoPlanetList());
  }

  gotoPlanetList() {
    this.router.navigate(['/planets']);
  }
  save(): void {
    const planet = this.createFromForm();
  }

  createFromForm(): Planet {
    return {
      ... new Planet(),
      planetNode: this.form.get('planetNode')!.value,
      name: this.form.get('name')!.value
    }
  }
}
