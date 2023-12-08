import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { ReservationValidators } from './reservation.validators';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer';

@Component({
  selector: 'reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent {

  customer: Customer = {
    id: 0,
    tcNo: '',
    passportNo: '',
    nationality: '',
    firstName: '',
    lastName: '',
    middleName: '',
    gender: 0,
    streetAddress: '',
    city: '',
    country: '',
    email: '',
    phone: '',
    notes: '',
  };

  constructor(private http: HttpClient) { }

  // SaveData() {
  //   if (this.form.valid) {
  //     const formData = this.form.value;
  //     this.http.post('http://213.248.166.144:7070/swagger-ui/index.html', formData)
  //       .subscribe(
  //         (response: any) => {
  //           console.log('API response:', response);
  //           this.form.reset();
  //         },
  //         (error: any) => {
  //           console.error('Error submitting data:', error);
  //         }
  //       );
  //   } else {
  //     this.markFormGroupTouched(this.form);
  //   }
  // }
  onSubmit(form: NgForm) {
    // Handle form submission logic here
    console.log(this.customer);

    // Call the createCustomer API
    this.http.post('http://213.248.166.144:7070/customer/createCustomer', this.customer)
      .subscribe({
        next: response => {
          // Handle success response
          console.log('Customer created successfully:', response);

          // Optionally, reset the form after successful submission
          form.resetForm();
        },
        error: error => {
          // Handle error
          console.error('Error creating customer:', error);
        }
      });
  }



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



  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

}
