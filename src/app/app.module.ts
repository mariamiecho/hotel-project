import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomersBrowserComponent } from './customers-browser/customers-browser.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomersService } from './customers.service';
import { SummaryPipe } from './summary.pipe';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';
import { ReservationComponent } from './reservation/reservation.component';
import { HomeComponent } from './home/home.component';
import { PanelComponent } from './panel/panel.component';
import { InputFormatDirective } from './input-format.directive';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomersBrowserComponent,
    NavbarComponent,
    SummaryPipe,
    PostsComponent,
    ReservationComponent,
    HomeComponent,
    PanelComponent,
    InputFormatDirective,
    CustomerFormComponent,
    FavoriteComponent,
    ReservationFormComponent,
    AboutusComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'aboutus', component: AboutusComponent }
    ])

  ],
  providers: [
    CustomersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
