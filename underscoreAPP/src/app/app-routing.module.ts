import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EachComponent } from './each/each.component';
import { MainComponent } from './main/main.component';
import { MapComponent } from './map/map.component';


const routes: Routes = [
  {path:'', component: MainComponent},
  {path: 'each', component: EachComponent},
  {path: 'map', component: MapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
