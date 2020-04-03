import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  isOpened = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleCalendar() {
    this.isOpened = !this.isOpened;
  }

}
