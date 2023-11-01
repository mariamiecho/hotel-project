import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomersBrowserComponent } from './customers-browser/customers-browser.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomersService } from './customers.service';
import { SummaryPipe } from './summary.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomersBrowserComponent,
    NavbarComponent,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    CustomersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
