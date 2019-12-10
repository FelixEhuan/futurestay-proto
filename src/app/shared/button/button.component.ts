import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
@Input() mode: string;
@Output() pressed = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  onClick($event: any) {
    this.pressed.emit($event);
  }
}
