import { Component } from '@angular/core';

@Component({
  selector: 'app-plush-toys',
  templateUrl: './plush-toys.component.html',
  styleUrls: ['./plush-toys.component.scss']
})
export class PlushToysComponent {

  toys: string[] = ['Bears', 'Cats', 'Dogs', 'Zebras', 'Tigers', 'Pandas', 'Lizards', 'Elephants'];

}
