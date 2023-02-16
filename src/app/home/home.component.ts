import { Component } from '@angular/core';
import { Plushie } from '../plushie/plushie-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  plushies: Plushie[] = [];
  
  constructor() {
   
    this.plushies = [
      {
      name:'Plush tiger',
      price:25,
     
      },
      {
      name:'Kangaroo',
      price:19.99,
     
      },
      {
      name:'Teddy Family',
      price:49.99,
    
      },
    ];


}
}
