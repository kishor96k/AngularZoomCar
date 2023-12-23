import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carscard',
  templateUrl: './carscard.component.html',
  styleUrls: ['./carscard.component.css']
})
export class CarscardComponent {

  @Input() CarData: any;

 

}
