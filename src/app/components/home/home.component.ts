import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarsService } from 'src/app/Services/cars.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    this.GetAllCars();
    this.GetAllLocations();
  }
  carList: any;
  locationList: any;
  fromLocation: any;
  toLocation: any;

  constructor(
    private Service: CarsService,
    private Router: Router
  ) { }

  GetAllCars() {
    this.Service.GetAllCars().subscribe((response: any) => {
      console.log(response, 'get all cars');
      this.carList = response.data;
    })
  }

  GetAllLocations() {
    this.Service.GetAllLocations().subscribe((response: any) => {
      console.log(response, 'get all locations');
      this.locationList = response.data;
    })
  }

  navigateToSearch() {
    this.Router.navigate(['/search', this.fromLocation]);
  }

}
