import { Component } from '@angular/core';
import { CustomersService } from './customers.service';

@Component({
  selector: 'customers',
  template: '<h2>Customers<h2>',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {
  title = "List of customers";
  customers;

  constructor(service: CustomersService) {
    this.customers = service.getCustomers();
  }
}


