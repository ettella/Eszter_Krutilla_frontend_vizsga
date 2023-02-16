import { Component, Input } from '@angular/core';
import { Plushie } from './plushie-model';

@Component({
  selector: 'app-plushie',
  templateUrl: './plushie.component.html',
  styleUrls: ['./plushie.component.scss']
})
export class PlushieComponent {

  @Input() plushies: Plushie[] = [];

}
