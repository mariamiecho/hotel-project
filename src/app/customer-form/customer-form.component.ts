import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Customer } from './customer';
import { NgForm } from '@angular/forms';
import { CustomersService } from '../customers.service';
import { DuplicateRecordError } from '../common/duplicate-recordError';
import { Apperror } from '../common/apperror';




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
    selectTour: 0,
  };
  errors!: {};
  tours: any[] = [];

  constructor(private service: CustomersService, private http: HttpClient) { }
  ngOnInit() {
    this.service.getTours().subscribe(
      (data) => {
        this.tours = data;
      },
      (error) => {
        console.error('Error fetching tours:', error);
      }
    );
  }

  async onSubmit(form: NgForm) {
    this.errors = {};
    console.log(this.customer);

    try {
      const cst = await this.service.checkIfCustomerAlreadyExist(this.customer.tcNo, this.customer.email);
      console.log(cst);

      if (cst != null) {

        throw new DuplicateRecordError('Customer already exists. Verify TC No and Email');

      } else {
        this.service.createCustomer(this.customer).subscribe({
          next: (value: any) => {
            alert("Customer is created ");
          },
          error: (reason: any) => {
            console.log('Rejected because ' + reason);

            if (reason instanceof DuplicateRecordError) {
              alert(reason.message);
            } else if (reason instanceof Apperror) {
              alert('Rejected due to a server error');
            } else {
              console.error('Unexpected error:', reason);
            }
          }
        });
      }
    }
    catch (error: any) {
      if (error instanceof DuplicateRecordError) {
        this.errors = { CustomerExist: error.message };
        alert(error.message);
      } else if (error instanceof Apperror) {
        this.errors = { RejectedByServer: error.message };
        alert(error.message);
      } else {
        console.error('Unexpected error:', error);

      }
    }
  }
}

