import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlushieComponent } from './plushie.component';

describe('PlushieComponent', () => {
  let component: PlushieComponent;
  let fixture: ComponentFixture<PlushieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlushieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlushieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
