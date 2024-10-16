import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'bootstrap-datepicker',
  standalone: true,
  templateUrl: './bootstrap-datepicker.component.html',
  styleUrls: ['./bootstrap-datepicker.component.css'],
  imports: [CommonModule, NgbDatepickerModule, FormsModule],
})
export class BootstrapDatepickerComponent {
  model: NgbDateStruct | null = null;
  time: { hour: number; minute: number } = { hour: 0, minute: 0 };
  minDate: NgbDateStruct = { year: 2020, month: 1, day: 1 };
  maxDate: NgbDateStruct = { year: 2025, month: 12, day: 31 };
  @Input() disabled: boolean = false;
  @Input() value: string = '';
  @Input() placeholder: string = 'Select date and time (DD/MM/YYYY)';

  @Output() dateTimeChange = new EventEmitter<{
    date: NgbDateStruct;
  }>();

  ngOnInit() {
    if (this.value) {
      this.parseDateTime(this.value);
    }
  }

  onDateSelect(date: NgbDateStruct) {
    this.model = date;
    this.emitDateTimeChange();
  }

  emitDateTimeChange() {
    if (this.model && this.time) {
      this.dateTimeChange.emit({ date: this.model });
    }
  }

  parseDateTime(value: string) {
    const [datePart] = value.split(' ');
    const [day, month, year] = datePart.split('/').map(Number);

    this.model = { day, month, year };
  }
}
