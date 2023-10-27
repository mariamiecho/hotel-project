import { Component } from '@angular/core';

@Component({
  selector: 'browser',
  //template: '<h2>{{"Title "": +title}}</h2>'
  template: `
  <h2>{{title}}</h2>
  <ul>
    <li *ngFor="let customer of customers">
      {{customer}}
    </li>
  </ul>
  `,

})
export class CustomersBrowserComponent {
  title = "List of customers"
  customers = ["Nina", "Gabrysia", "Białystok", "Mszczonów"]
}
