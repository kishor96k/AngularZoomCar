import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { CarsComponent } from './components/cars/cars.component';
import { BookingComponent } from './components/booking/booking.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: "search/:locationId",
    component: SearchComponent
  },
  {
    path: "cars",
    component: CarsComponent
  },
  {
    path: 'booking/:locationId/:carId',
    component: BookingComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
