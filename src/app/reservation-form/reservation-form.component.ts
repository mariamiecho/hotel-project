import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReservationValidators } from './reservation.validators';



@Component({
  selector: 'reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent {
  form = new FormGroup({

    name: new FormControl('', [Validators.required, Validators.minLength(3)]),

    roomType: new FormControl('', [Validators.required]),

    roomNumber: new FormControl('', [Validators.required, ReservationValidators.cannotContainSpace]),

    price: new FormControl('', [Validators.required, ReservationValidators.minPrice]),

    comment: new FormControl('')

  });
  get name() {
    return this.form.get('name');
  }

  get roomType() {
    return this.form.get('roomType');
  }
  get roomNumber() {
    return this.form.get('roomNumber');
  }

  get price() {
    return this.form.get('price');
  }

  SaveData() {
    console.log(this.form.value)
  }
}
