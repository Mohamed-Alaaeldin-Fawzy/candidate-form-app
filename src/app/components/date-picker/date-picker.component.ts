import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class DatePickerComponent implements OnInit {
  @Output() dateChange = new EventEmitter<Date>();
  dateControl?: FormControl;
  timeControl!: FormControl;
  datepickerValue!: string;
  showDatepicker?: boolean = false;
  month!: number;
  year!: number;
  no_of_days?: any[] = [];
  blankdays: any[] = [];
  MONTH_NAMES = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  ngOnInit() {
    this.dateControl = new FormControl();
    this.timeControl = new FormControl('12:00');
    this.initDate();
  }

  initDate() {
    let today = new Date();
    this.month = today.getMonth();
    this.year = today.getFullYear();
    this.datepickerValue = new Date(
      this.year,
      this.month,
      today.getDate()
    ).toDateString();
    this.getNoOfDays();
  }

  getNoOfDays() {
    let daysInMonth = new Date(this.year, this.month + 1, 0).getDate();
    let dayOfWeek = new Date(this.year, this.month).getDay();
    let blankdaysArray = [];
    for (var i = 1; i <= dayOfWeek; i++) {
      blankdaysArray.push(i);
    }

    let daysArray = [];
    for (var i = 1; i <= daysInMonth; i++) {
      daysArray.push(i);
    }

    this.blankdays = blankdaysArray;
    this.no_of_days = daysArray;
  }

  isToday(date: any) {
    const today = new Date();
    const d = new Date(this.year, this.month, date);
    return today.toDateString() === d.toDateString() ? true : false;
  }

  getDateValue(date: any) {
    let selectedDate = new Date(this.year, this.month, date);
    this.datepickerValue = selectedDate.toDateString();
    this.showDatepicker = false;
    this.onDateTimeChange();
  }

  onDateTimeChange() {
    const date = new Date(this.datepickerValue);
    const time = this.timeControl.value;
    if (date && time) {
      const [hours, minutes] = time.split(':');
      date.setHours(hours, minutes);
      this.dateChange.emit(date);
    }
  }
}
