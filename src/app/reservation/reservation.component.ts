import { Component } from '@angular/core';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  reservations: any;

  constructor(private service: CustomersService) {
    this.service.GetReservationList().then(
      (data) => {
        this.reservations = data;
      }
    )
  }

}
