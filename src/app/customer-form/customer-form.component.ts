import { Component } from '@angular/core';
import { Customer } from './customer';
import { NgForm } from '@angular/forms';
import { CustomersService } from '../customers.service';



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
  errors!: {};

  constructor(private service: CustomersService) { }



  async onSubmit(form: NgForm) {
    this.errors = {};
    console.log(this.customer);
    const cst = await this.service.checkIfCustomerAlreadyExist(this.customer.tcNo, this.customer.email);
    console.log(cst);
    if (cst != null) {
      this.errors = { CustomerExist: 'Customer already exist. Verify TC No and Email' };
      alert('Customer already exist. Verify TC No and Email')
    } else {
      this.service.createCustomer(this.customer).subscribe({
        next: (value: any) => {
          alert("Customer is created ");
        },
        error: (reason: string) => {
          alert('Rejected due to a server error')
          console.log("Rejected because " + reason);
          this.errors = { RejectedByServer: "Rejected due to a server error" };
        }
      });
    }
  }
}


// onSubmit(form: NgForm) {
//   // Handle form submission logic here
//   console.log(this.customer);

//   // Call the createCustomer API
//   this.httpClient.post('http://213.248.166.144:7070/customer/createCustomer', this.customer)
//     .subscribe({
//       next: response => {
//         alert('Customer created sucessfully')
//         // Handle success response
//         console.log('Customer created successfully:', response);

//         // Optionally, reset the form after successful submission
//         form.resetForm();
//       },
//       error: error => {
//         // Handle error
//         if (error.status === 409)
//           alert('error 409: This customer already exist. Change TC No')
//         else if (error.status === 400)
//           alert('error 400: Bad Request Error')
//         else if (error.status === 500)
//           alert('error 500: This email is already used')
//         else {
//           alert('An unexpected error occured')
//           console.error('Error creating customer:', error);
//         }

//       }
//     });
// }
