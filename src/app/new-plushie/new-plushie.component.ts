import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Plushie } from '../plushie/plushie-model';

@Component({
  selector: 'app-new-plushie',
  templateUrl: './new-plushie.component.html',
  styleUrls: ['./new-plushie.component.scss']
})
export class NewPlushieComponent {

  plushes: Plushie[] = [];
  plushForm: FormGroup;
  isSubmit: boolean = false;

  constructor(public fb: FormBuilder, 
    ) {
    this.plushForm = fb.group(
      { 
        name: ['', Validators.required],
        size: [Number, Validators.required],
        
      }
    );
  };

  get name():FormControl {
    return this.plushForm.get('name') as FormControl;
  };

  get size():FormControl {
    return this.plushForm.get('size') as FormControl;
  };

  onSubmit(plush:Plushie){
    this.plushes.push(plush);
    this.isSubmit = true;
    this.plushForm.reset();
    console.log('submit button works',this.plushForm.value)
  }

}
