import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from 'src/app/Services/cars.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  ngOnInit(): void {
  }

  bookingObj: any = {
    "bookingId": 0,
    "customerId": 0,
    "fromLocationId": 0,
    "toLocationId": 0,
    "travelDate": "2023-12-01T14:15:28.751Z",
    "startTime": "",
    "carId": 0,
    "pickupAddress": "",
    "alternateContactNo": "",
    "invoiceNo": "",
    "isComplete": true
  }
  fromLocation: any;
  toLocation: any;
  carId: any;
  locationList: any;
  locationId: any;
  carDetails: any;
  carreviewDetails: any;
  isloggedUser: any;

  constructor(
    private Service: CarsService,
    private activateroute: ActivatedRoute
  ) {
    this.activateroute.params.subscribe((res) => {
      this.carId = res['carId'];
      this.locationId = res['locationId']
      console.log(res, 'current user');
      this.GetReviewById();
      this.GetCarById();
      this.GetAllLocations();
    })
    const local = localStorage.getItem('logindata');
    if (local != null) {
      this.isloggedUser = JSON.parse(local);
      this.bookingObj.customerId = this.isloggedUser.userId;
    }
  }

  GetCarById() {
    this.Service.GetCarById(this.carId).subscribe((response: any) => {
      this.carDetails = response.data;
      console.log(this.carDetails, 'car details');
    })
  }

  GetReviewById() {
    this.Service.GetAllReviewByCarId(this.carId).subscribe((response: any) => {
      this.carreviewDetails = response.data;
      console.log(this.carreviewDetails, 'car review details');
    })
  }
  GetAllLocations() {
    this.Service.GetAllLocations().subscribe((response: any) => {
      console.log(response, 'get all locations');
      this.locationList = response.data;
    })
  }

  bookCar() {
    this.Service.createNewBooking(this.bookingObj).subscribe((res: any) => {
      if (res.result) {
        alert("Success createNewBooking");
      } else {
        alert("Error createNewBooking");
      }
    })
  }



}
