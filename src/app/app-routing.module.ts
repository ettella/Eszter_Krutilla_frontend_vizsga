import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { InventoryComponent } from './inventory/inventory.component';
import { NewPlushieComponent } from './new-plushie/new-plushie.component';
import { PlushToysComponent } from './plush-toys/plush-toys.component';
import { PlushieComponent } from './plushie/plushie.component';

export const routes: Routes = [
  {path: 'home', redirectTo: '', pathMatch: 'full'},
  {path:'', component:HomeComponent},
  // {path:'plushie', component: PlushieComponent},
  {path:'toys', component: PlushToysComponent},
  {path:'new-plushie', component: NewPlushieComponent},
  {path:'inventory', component: InventoryComponent},
  {path:'history', component: HistoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
