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
}


