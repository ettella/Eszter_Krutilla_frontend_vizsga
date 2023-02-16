import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { PlushieComponent } from './plushie/plushie.component';
import { NewPlushieComponent } from './new-plushie/new-plushie.component';
import { InventoryComponent } from './inventory/inventory.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HistoryComponent } from './history/history.component';
import { PlushToysComponent } from './plush-toys/plush-toys.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlushieComponent,
    NewPlushieComponent,
    InventoryComponent,
    HistoryComponent,
    PlushToysComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
