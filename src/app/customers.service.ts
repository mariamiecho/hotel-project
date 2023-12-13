import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './customer-form/customer';
import { catchError, throwError } from 'rxjs';
import { DuplicateRecordError } from './common/duplicate-recordError';




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

    //getting list of reservation from webside ASSIGNMENT
    async GetReservationList(): Promise<Array<any>> {
        return new Promise((resolve, reject) => {
            this.http.get('http://213.248.166.144:7070/customer/lastReservations').subscribe(Response => {
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
                    return throwError(() => new DuplicateRecordError());

                }
                return throwError(() => new Error(response.message));


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



}