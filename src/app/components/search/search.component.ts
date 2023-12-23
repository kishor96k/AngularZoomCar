import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarsService } from 'src/app/Services/cars.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  locationId: any;
  carsByLocation: any;
  locationList: any;
  fromLocation: any;
  toLocation: any;
  ngOnInit(): void {
    this.GetAllCarsByLocation();
    this.GetAllLocations();
  }
  constructor(
    private activateroute: ActivatedRoute,
    private Service: CarsService,
    private router: Router) {
    this.activateroute.params.subscribe((res: any) => {
      this.locationId = res['locationId'];
      this.fromLocation = this.locationId;
    });
  }

  GetAllLocations() {
    this.Service.GetAllLocations().subscribe((response: any) => {
      console.log(response, 'get all locations');
      this.locationList = response.data;
    })
  }

  GetAllCarsByLocation() {
    this.Service.GetAllCarsByLocation(this.locationId).subscribe((res: any) => {
      console.log(res, 'getall cars by locations');
      this.carsByLocation = res.data;
    })
  }
  onLocationChange() {
    this.Service.GetAllCarsByLocation(this.fromLocation).subscribe((res: any) => {
      console.log(res, 'getall cars by locations');
      this.carsByLocation = res.data;
    })
  }

  makeBook(carId: any) {
    this.router.navigate(['/booking', this.fromLocation, carId])
  }

}
