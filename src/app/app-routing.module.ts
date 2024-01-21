import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReservationComponent } from './reservation/reservation.component';
import { HomeComponent } from './home/home.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SearchComponent } from './search/search.component';




const routes: Routes = [
  { path: 'reservation', component: ReservationComponent },
  { path: '', component: HomeComponent },
  { path: 'customer-form', component: CustomerFormComponent },
  { path: 'reservation-form', component: ReservationFormComponent },
  // { path: 'aboutus', component: AboutusComponent }
  { path: 'search', component: SearchComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
