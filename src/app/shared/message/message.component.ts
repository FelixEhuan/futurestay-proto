import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
@Input() data: {title: string; description: string; time: string}
  constructor() { }

  ngOnInit() {
  }

}
