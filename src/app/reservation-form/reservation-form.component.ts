import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CustomersService } from '../customers.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent {

  reservationForm!: FormGroup;

  tours: any[] = [];
  roomTypes: any[] = [];
  roomNumbers: any[] = [];

  constructor(private formBuilder: FormBuilder, private service: CustomersService, private http: HttpClient, private route: ActivatedRoute) { }
  ngOnInit() {
    this.reservationForm = this.formBuilder.group({
      id: [0, Validators.required],
      customerId: [0, Validators.required],
      selectTour: [0, Validators.required],
      roomType: [0, Validators.required],
      room: ['', Validators.required],
      dateArrival: [new Date(), Validators.required],
      dateDeparture: [new Date(), Validators.required],
      notes: ''
    });

    this.route.paramMap.subscribe(params => {
      const customerId = +params.get('customerId')! || 0;
      if (customerId !== null) {
        this.reservationForm.patchValue({
          customerId: customerId
        });
      }
    });

    this.service.getTours().subscribe(
      (data) => {
        this.tours = data;
      },
      (error) => {
        console.error('Error fetching tours:', error);
      }
    );

    this.service.getRoomTypes().subscribe(
      (data) => {
        this.roomTypes = data;
      },
      (error) => {
        console.error('Error fetching rooms types', error);
      }
    );
  }
  updateRoomNumbers() {
    const selectedRoomType = this.reservationForm.get('roomType')?.value;
    if (selectedRoomType) {
      this.service.getRoomNumbers(selectedRoomType).subscribe(
        (data) => {
          this.roomNumbers = data.filter(room => room.type === selectedRoomType);
        },
        (error) => {
          console.error('Error fetching room numbers:', error);
        }
      );
    }
  }



  onSubmit(form: FormGroup) {
    // Handle form submission logic here
    console.log(form.value);

    // Call the createCustomer API
    this.http.post('http://213.248.166.144:7070/customer/createReservation', form.value)
      .subscribe({
        next: response => {
          alert('Customer created successfully');
          console.log('Customer created successfully:', response);
          form.reset();
        },
        error: error => {
          console.error('Error creating customer:', error);
        }
      });
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

}
