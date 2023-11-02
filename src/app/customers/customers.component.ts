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
  email = "email@example.com";
  onKeyUpEmail() {
    console.log(this.email);
  }


  customer = {
    title: "Hotel details:",
    rating: 3.45673,
    rooms: 13,
    price: 2137,
    freeDate: new Date(2054, 10, 11)
  }

  text = 'Welcome to My-Hotel, a place where warm hospitality meets contemporary charm. Our hotel, nestled in the vibrant heart of the city, is your ideal choice for a comfortable and friendly stay, whether you are traveling for business or leisure.'

}


