import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/vehicles', pathMatch: 'full' },
  { path: 'vehicles', component: VehicleListComponent },
  { path: 'vehicle-detail', component: VehicleDetailComponent },
  { path: 'vehicle-detail/:id', component: VehicleDetailComponent },
  { path: '**', redirectTo: '/vehicles' } // Redirect any unknown route to /vehicles
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
