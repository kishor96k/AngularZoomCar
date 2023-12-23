import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  path: any = 'https://freeapi.miniprojectideas.com/api/ZoomCar/';
  constructor(private http: HttpClient) { }

  //register
  AddNewUser(obj: any) {
    return this.http.get(this.path + 'AddNewUser', obj);
  }
  
  //login
  Login(Obj: any) {
    return this.http.post(this.path + 'Login', Obj)
  }

  //addNew Car
  addNewCar(Obj: any) {
    return this.http.post(this.path + 'addNewCar', Obj)
  }

  // GetAllCarsByOwnerId
  GetAllCarsByOwnerId(id: any) {
    return this.http.get(this.path + 'GetAllCarsByOwnerId?id=' + id);
  }

  // GetAllCarsByOwnerId
  GetCarById(id: any) {
    return this.http.get(this.path + 'GetCarById?id=' + id);
  }

  // GetAllCarsByOwnerId
  GetAllCarsByLocation(id: any) {
    return this.http.get(this.path + 'GetAllCarsByLocation?id=' + id);
  }

  // GetAllCarsByOwnerId
  GetAllReviewByCarId(id: any) {
    return this.http.get(this.path + 'GetAllReviewByCarId?id=' + id);
  }

  //getlocations
  GetAllLocations() {
    return this.http.get(this.path + 'GetAllLocations')
  }

  //GetAllCars
  GetAllCars() {
    return this.http.get(this.path + 'GetAllCars')
  }

  // createNewBooking
  createNewBooking(Obj: any) {
    return this.http.post(this.path + 'createNewBooking', Obj);
  }



}
