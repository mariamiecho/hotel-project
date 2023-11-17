import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';




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


}