import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent implements OnInit {
@Input() data: {icon: string, value: string | number, pending: boolean};
  constructor() { }

  ngOnInit() {
  }

}
