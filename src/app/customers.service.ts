import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './customer-form/customer';
import { catchError, map, throwError } from 'rxjs';
import { DuplicateRecordError } from './common/duplicate-recordError';
import { Apperror } from './common/apperror';





@Injectable()

export class CustomersService {

    //List of customers
    getCustomers() {
        return ["Wiesława", "Łucja", "Stanisław", "Przemysław"]
    }
    //Getting list of thinkgs form webside, adding it to customer service instead of component
    async GetPost(): Promise<Array<any>> {
        return new Promise((resolve, reject) => {
            this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(Response => {
                resolve(Object.values(Response));
            });

        });
    }
    constructor(private http: HttpClient) {
    }
    selectedCustomerId?: number;
    setSelectedCustomerId(customerId: number): void {
        this.selectedCustomerId = customerId;
    }


    //getting list of reservation from webside ASSIGNMENT
    async GetReservationList(): Promise<Array<any>> {
        return new Promise((resolve, reject) => {
            this.http.get('http://213.248.166.144:7070/customer/lastReservations').subscribe(Response => {
                // this.http.get('http://localhost:7070/customer/search').subscribe(Response => {
                resolve(Object.values(Response));
            });
        });
    }
    //constructor(private http: HttpClient) {}

    //uploding on webside


    createCustomer(customer: Customer) {
        console.log(customer);
        return this.http.post('http://213.248.166.144:7070/customer/createCustomer', customer).
            pipe(catchError((response: HttpErrorResponse) => {
                if (response.status === 409) {
                    throw new DuplicateRecordError('Customer already exists. Verify TC No and Email');
                }
                throw new Apperror('Rejected due to a server error');

            }));
    }

    checkIfCustomerAlreadyExist(tcNo: string, email: string): Promise<any> {
        var params = new HttpParams();
        if (tcNo != null)
            params = params.append("tcNo", tcNo);
        if (email != null)
            params = params.append("email", email);
        console.log(params.toString());
        return new Promise((resolve, reject) => {
            this.http.get('http://213.248.166.144:7070/customer/getCustomerByTcNoEmail', { params }).subscribe({
                next: response => resolve(response),
                error: err => reject(err)
            });
        });

    }
    //get tours dropdown
    getTours() {
        return this.http.get<any[]>('http://localhost:7070/tours').pipe(
            catchError((error) => {
                console.error('Error fetching tours:', error);
                return throwError(error);
            })
        );
    }

    //get rooms dropdown
    getRoomTypes() {
        return this.http.get<any[]>('http://213.248.166.144:7070/customer/getRoomTypes').pipe(
            catchError((error) => {
                console.error('Error fetching room types:', error);
                return throwError(error);
            })
        );
    }

    getCustomerList() {
        return this.http.get<any[]>('http://213.248.166.144:7070/customer/search').pipe(
            catchError((error) => {
                console.error('Error fetching room types:', error);
                return throwError(error);
            })
        );
    }

    getRoomNumbers(roomType: string) {
        const params = new HttpParams().set('roomType', roomType);

        return this.http.get<any[]>('http://213.248.166.144:7070/customer/allRooms', { params }).pipe(
            catchError((error) => {
                console.error('Error fetching room numbers:', error);
                return throwError(error);
            })
        );
    }

}



