import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TimetableComponent } from './pages/timetable/timetable.component';
import { FilmsComponent } from './pages/films/films.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { BonusComponent } from './pages/bonus/bonus.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { ContactComponent } from './pages/contact/contact.component';

import { AdminComponent } from './pages/admin/admin.component';
import { AdminFilmsComponent } from './pages/admin/admin-films/admin-films.component';
import { AdminNewsComponent } from './pages/admin/admin-news/admin-news.component';
import { AdminTicketsComponent } from './pages/admin/admin-tickets/admin-tickets.component';
import { AdminTimetableComponent } from './pages/admin/admin-timetable/admin-timetable.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TimetableComponent,
    FilmsComponent,
    AboutComponent,
    HomeComponent,
    NewsComponent,
    BonusComponent,
    PaymentComponent,
    ContactComponent,
    AdminComponent,
    AdminFilmsComponent,
    AdminNewsComponent,
    AdminTicketsComponent,
    AdminTimetableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
