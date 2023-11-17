import { Component } from '@angular/core';
import { CustomersService } from '../customers.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  reservations: any;
  reservationsLastWeek: any;

  constructor(private service: CustomersService) {
    this.service.GetReservationList().then(
      (data) => {
        this.reservations = data;
        this.filterReservationsLastWeek();
      }
    )
  }

  //filture żeby pojawiali się tylko klienci sprzed tygodnia
  filterReservationsLastWeek() {
    const today = new Date();
    const lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
    // const lastWeek = new Date(today.getTime() - 7*24*60*60*1000);

    this.reservationsLastWeek = this.reservations.filter((reservation: any) => {
      const reservationDate = new Date(reservation.dateUpdated);
      return reservationDate >= lastWeek;
    }
    )
  }
}

