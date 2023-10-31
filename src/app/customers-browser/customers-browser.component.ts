import { Component } from '@angular/core';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'browser',
  //template: '<h2>{{"Title "": +title}}</h2>'
  templateUrl: './customers-browser.component.html',

})
export class CustomersBrowserComponent {
  title = "List of customers"
  customers;

  constructor() {
    let service = new CustomersService();
    this.customers = service.getCustomers();
  }
}
