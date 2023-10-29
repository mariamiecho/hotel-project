import { Component } from '@angular/core';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'browser',
  //template: '<h2>{{"Title "": +title}}</h2>'
  template: `
  <h2>{{title}}</h2>
  <ul>
    <li *ngFor="let customer of customers">
      {{customer}}
    </li>
  </ul>
  `,

})
export class CustomersBrowserComponent {
  title = "List of customers"
  customers;

  constructor() {
    let service = new CustomersService();
    this.customers = service.getCustomers();
  }
}
