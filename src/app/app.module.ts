import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePlanetComponent } from './entities/planet/create-planet.component';
import { UpdatePlanetComponent } from './entities/planet/update-planet.component';
import { DeletePlanetComponent } from './entities/planet/delete-planet.component';
import { CreateNodeComponent } from './entities/node/create-node.component';
import { DeleteNodeComponent } from './entities/node/delete-node.component';
import { UpdateNodeComponent } from './entities/node/update-node.component';
import { PlanetDetailsComponent } from './entities/planet/planet-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CreatePlanetComponent,
    UpdatePlanetComponent,
    DeletePlanetComponent,
    CreateNodeComponent,
    DeleteNodeComponent,
    UpdateNodeComponent,
    PlanetDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
