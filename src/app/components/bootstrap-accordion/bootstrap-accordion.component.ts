import { Component, Input } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bootstrap-accordion',
  standalone: true,
  templateUrl: './bootstrap-accordion.component.html',
  styleUrls: ['./bootstrap-accordion.component.css'],
  imports: [CommonModule, NgbAccordionModule],
})
export class BootstrapAccordionComponent {
  @Input() className: string = '';
  @Input() title: string = 'Accordion Item';
  @Input() content: string = 'This is the content';
  @Input() disabled?: boolean = false;
  @Input() collapsed?: boolean = false;
}
