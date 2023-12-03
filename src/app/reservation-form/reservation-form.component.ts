import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReservationValidators } from './reservation.validators';
// import { ReservationValidators } from './reservation.validators';


@Component({
  selector: 'reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent {
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), ReservationValidators.cannotContainSpace]),
    // , ReservationValidators.cannotContainSpace]),
    price: new FormControl('', [Validators.required, ReservationValidators.minPrice]),
    // he wants customerName i price
  });
  get name() {
    return this.form.get('name');

  }
  get price() {
    return this.form.get('price');
  }
}