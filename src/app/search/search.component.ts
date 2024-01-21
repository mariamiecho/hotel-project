import { Component } from '@angular/core';
import { CustomersService } from '../customers.service';
import { HttpClient } from '@angular/common/http';
import { Search } from './search';
import { Router } from '@angular/router';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  search: Search = {
    customerslist: 0
  }

  customerlist: any[] = [];

  // Inject the Router service
  constructor(private service: CustomersService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.service.getCustomerList().subscribe(
      (data) => {
        this.customerlist = data;
      },
      (error) => {
        console.error('Error fetching tours:', error);
      }
    );
  }

  onSelectCustomer(customerId: number): void {
    this.router.navigate(['/reservation-form', { customerId: customerId }]);
  }
}
