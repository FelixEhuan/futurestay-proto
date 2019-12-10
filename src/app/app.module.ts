import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './shared/card/card.component';
import { AppRoutingModule } from './app-routing.module';
import { InputComponent } from './shared/input/input.component';
import { ButtonComponent } from './shared/button/button.component';
import { ChipComponent } from './shared/chip/chip.component';
import { ConnectionComponent } from './shared/connection/connection.component';
import { MessageComponent } from './shared/message/message.component';
import { TaskComponent } from './shared/task/task.component';
import { ReservationComponent } from './shared/reservation/reservation.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CardComponent,
    InputComponent,
    ButtonComponent,
    ChipComponent,
    ConnectionComponent,
    MessageComponent,
    TaskComponent,
    ReservationComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
