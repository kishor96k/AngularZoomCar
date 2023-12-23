import { Component, OnInit } from '@angular/core';
import { CarsService } from './Services/cars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  }
  constructor(
    private Service: CarsService
  ) {
    const local = localStorage.getItem('logindata');
    if (local != null) {
      this.isloggedUser = JSON.parse(local);
    }
  }
  title = 'ZoomCar';

  isloggedUser: any;


  onRegisterOpen() {
    const modal = document.getElementById('registerModal');
    if (modal != null) {
      modal.style.display = 'block';
    }
  }

  onRegisterClose() {
    const modal = document.getElementById('registerModal');
    if (modal != null) {
      modal.style.display = 'none';
    }
  }
  onLoginOpen() {
    const modal = document.getElementById('loginModal');
    if (modal != null) {
      modal.style.display = 'block';
    }
  }

  onLoginClose() {
    const modal = document.getElementById('loginModal');
    if (modal != null) {
      modal.style.display = 'none';
    }
  }

  registerObj: any = {
    "userId": 0,
    "name": "",
    "userRole": "",
    "emailId": "",
    "mobileNo": "",
    "password": "",
    "createdOn": new Date()
  }

  loginObj: any = {
    "emailId": "",
    "password": "",
  }

  registerUser() {
    this.Service.AddNewUser(this.registerObj).subscribe((res) => {
      if ((res as any).result) {
        alert("Success AddNewUser");
        this.onRegisterClose();
        this.isloggedUser = (res as any).data;
      }
      else {
        alert("Error AddNewUser");
        this.onRegisterClose();
      }
    })
  }

  loginUser() {
    this.Service.Login(this.loginObj).subscribe((res) => {
      if ((res as any).result) {
        alert("Success Login ");
        const loginData = localStorage.setItem('logindata', JSON.stringify('res.data'));
        this.isloggedUser = (res as any).data;
        console.log(loginData, "local login data");
        this.onLoginClose();
      }
      else {
        alert("Error Login");
        this.onLoginClose();
      }
    })
  }

  onLogOut() {
    alert("Logged OFF")
    localStorage.removeItem('logindata');
    this.isloggedUser = undefined;
  }


}
