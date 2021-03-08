import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePlanetComponent } from './entities/planet/create-planet.component';
import { PlanetDetailsComponent } from './entities/planet/planet-details.component';
import { UpdatePlanetComponent } from './entities/planet/update-planet.component';

const routes: Routes = [
  { path: 'planets', component: PlanetDetailsComponent },
  { path: 'addplanet', component: CreatePlanetComponent },
  { path: 'calculateroute', component: UpdatePlanetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
