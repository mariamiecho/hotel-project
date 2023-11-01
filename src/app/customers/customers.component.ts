import { Component } from '@angular/core';


@Component({
  selector: 'customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {

  isActive = true;

  onDivClicked() {
    console.log("Div was clicked");
  }

  onSave(event: any) {
    console.log("Button was clicked", event)
  }

  onKeyUp() {
    console.log("Enter was pressed")
  }

  // onKeyUpEmail(email: any) {
  //   console.log("enter")

  customer = {
    title: "Customers details:",
    rating: 3.45673,
    amount: 3294,
    price: 2137,
    freeDate: new Date(2054, 11, 11)



  }

}


