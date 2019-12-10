import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
@Input() check: boolean;
checkedImg: string;
  constructor() { }

  ngOnInit() {
    if (this.check) {
      this.checkedImg = 'assets/Home/checkout.png';
    } else {
      this.checkedImg = 'assets/Home/checkin.png';
    }
  }

}
