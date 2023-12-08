import { Component } from '@angular/core';
import { Customer } from './customer';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent {
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

  constructor(private httpClient: HttpClient) { }

  onSubmit(form: NgForm) {
    // Handle form submission logic here
    console.log(this.customer);

    // Call the createCustomer API
    this.httpClient.post('http://213.248.166.144:7070/customer/createCustomer', this.customer)
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
}
