import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

const routes: Routes = [
  { path: '',  component:HomeComponent } ,
  { path: 'timetable', component: TimetableComponent },
  { path: 'films', component: FilmsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'news', component: NewsComponent },
  { path: 'bonus', component: BonusComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'admin', component: AdminComponent, children : [
      { path: '', pathMatch: 'full', redirectTo: 'films' },
      { path: 'films', component: AdminFilmsComponent},
      { path: 'news', component: AdminNewsComponent },
      { path: 'tickets', component: AdminTicketsComponent },
      { path: 'timetable', component: AdminTimetableComponent},
    ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
