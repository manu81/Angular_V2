import { Component } from '@angular/core';
import{ProductService} from './product.service';

@Component({
  selector: 'app-root',
  template:`
  <h1>{{title}}</h1>
  <img src="{{imageUrl}}">
  <button class="btn btn-primary" [class.disabled]="!isValid" 
  (click)="onClickMe($event)">Submit</button>
  <br />
  <rating></rating>
  `,
  providers:[ProductService]
})
export class AppComponent {
  title = 'My First Angular App';
  imageUrl = "https://www.w3schools.com/html/pic_mountain.jpg";
  isValid = true;
  onClickMe($event){
    console.log("Clicked", $event);
  }
}
