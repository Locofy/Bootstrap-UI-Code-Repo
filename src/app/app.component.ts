import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BootstrapAccordionComponent } from './components/bootstrap-accordion/bootstrap-accordion.component';
import { BootstrapProgressbarComponent } from './components/bootstrap-progressbar/bootstrap-progressbar.component';
import { BootstrapDatepickerComponent } from './components/bootstrap-datepicker/bootstrap-datepicker.component';
import { BootstrapDropdownComponent } from './components/bootstrap-dropdown/bootstrap-dropdown.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BootstrapAccordionComponent,
    BootstrapProgressbarComponent,
    BootstrapDatepickerComponent,
    BootstrapDropdownComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-bootstrap';
}
