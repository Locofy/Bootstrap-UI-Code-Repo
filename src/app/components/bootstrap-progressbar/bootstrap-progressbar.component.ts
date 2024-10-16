import { Component, Input } from '@angular/core';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bootstrap-progressbar',
  standalone: true,
  templateUrl: './bootstrap-progressbar.component.html',
  styleUrls: ['./bootstrap-progressbar.component.css'],
  imports: [CommonModule, NgbProgressbarModule],
})
export class BootstrapProgressbarComponent {
  @Input() value: number = 40;
  @Input() max: number = 100;
  @Input() striped: boolean = true;
  @Input() animated: boolean = true;
  @Input() showValue: boolean = true;
  @Input() className: string = '';
  @Input() type: 'success' | 'info' | 'warning' | 'danger' | 'primary' =
    'primary';
}
