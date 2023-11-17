import { Component } from '@angular/core';
import { CustomersService } from '../customers.service';
import { filter } from 'rxjs';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  reservations: any;
  reservationsLastWeek: any;

  // newNote: string = ' ';
  // selectReservation: any;
  // noteModelRef!: NgbModalRef;


  constructor(private service: CustomersService,) {

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

  //Funkcja ta przełącza tryb edycji dla notatek rezerwacji o podanym indeksie.
  toggleNoteEdit(index: number): void {
    this.reservationsLastWeek[index].editing = !this.reservationsLastWeek[index].editing;
  }

  //Pobiera zaktualizowaną notatkę z pola newNote dla konkretnej rezerwacji. Następnie dzieli notatkę na linie, usuwa puste linie i aktualizuje właściwość notes rezerwacji. Dodatkowo ustawia editing na false, aby wyłączyć tryb edycji.
  saveNote(index: number): void {
    const updatedNote = this.reservationsLastWeek[index].newNote;
    this.reservationsLastWeek[index].notes = updatedNote.split('\n').filter((note: string) => note.trim() !== '');
    this.reservationsLastWeek[index].editing = false;
  }



}

