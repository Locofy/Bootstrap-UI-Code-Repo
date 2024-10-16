import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bootstrap-dropdown',
  standalone: true,
  templateUrl: './bootstrap-dropdown.component.html',
  styleUrls: ['./bootstrap-dropdown.component.css'],
  imports: [CommonModule],
})
export class BootstrapDropdownComponent {
  @Input() options: { label: string; value: any }[] = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Mango', value: 'Mango' },
    { label: 'Orange', value: 'Orange' },
  ];
  @Input() selectedValue: string = '';
  @Input() disabled: boolean = false;
  @Input() placeholder: string = 'Select an option';
  @Input() variant: 'primary' | 'success' | 'danger' = 'primary'; // Type of progress indicator

  @Output() valueChange = new EventEmitter<any>();

  onSelect(value: any) {
    if (!this.disabled) {
      this.selectedValue = value;
      this.valueChange.emit(this.selectedValue);
    }
  }
}
