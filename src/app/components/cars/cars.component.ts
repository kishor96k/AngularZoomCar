import { Component, OnInit } from '@angular/core';
import { CarsService } from 'src/app/Services/cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  ngOnInit(): void {
    this.GetAllLocations();
    this.GetAllCarsByOwnerId();
    this.GetAllCarsByOwnerId();
  }
  isloggedUser: any;
  carList: any;
  locations: any;
  CarAccessoriess: any = [
    {
      "accessoriesId": 0,
      "accessoriesTitle": "string",
      "showOnWebsite": false,
      "carId": 0
    }
  ]

  Cars: any = {
    "carId": 0,
    "brand": "",
    "name": "",
    "pricingDescription": "",
    "pricing": 0,
    "locationId": 0,
    "registeredOn": "2023-12-01T11:36:22.313Z",
    "imageUrl": "",
    "vehicleNo": "",
    "ownerUserId": 0,
    "ZoomCarAccessoriess": []
  }

  constructor(
    private Service: CarsService
  ) {
    const local = localStorage.getItem('logindata');
    if (local != null) {
      this.isloggedUser = JSON.parse(local);
      this.Cars.ownerUserId = this.isloggedUser.userId;
    }
  }

  onCarsOpen() {
    const modal = document.getElementById('carsModal');
    if (modal != null) {
      modal.style.display = 'block';
    }
  }

  onCarsClose() {
    const modal = document.getElementById('carsModal');
    if (modal != null) {
      modal.style.display = 'none';
    }
  }

  GetAllCarsByOwnerId() {
    this.Service.GetAllCarsByOwnerId(this.isloggedUser.userId).subscribe((res) => {
      this.carList = res;
    })
  }


  GetAllLocations() {
    this.Service.GetAllLocations().subscribe((res: any) => {
      console.log(res, "locations data");
      this.locations = res.data;
    })
  }

  addCarAccessoriess() {
    const data = JSON.stringify(this.CarAccessoriess);
    this.Cars.ZoomCarAccessoriess.push(JSON.parse(data));

    this.CarAccessoriess = [
      {
        "accessoriesId": 0,
        "accessoriesTitle": "string",
        "showOnWebsite": false,
        "carId": 0
      }
    ]

  }

  addNewCar() {
    this.Service.addNewCar(this.Cars).subscribe((res: any) => {
      if (res.result) {
        alert("Succes addNewCar");
        this.onCarsClose();
        this.GetAllCarsByOwnerId();
        this.Cars = {
          "carId": 0,
          "brand": "",
          "name": "",
          "pricingDescription": "",
          "pricing": 0,
          "locationId": 0,
          "registeredOn": "2023-12-01T11:36:22.313Z",
          "imageUrl": "",
          "vehicleNo": "",
          "ownerUserId": 0,
          "ZoomCarAccessoriess": []
        }
      } else {
        alert("Error addNewCar");
      }
    })
  }


}
