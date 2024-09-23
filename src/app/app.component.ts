import { Component } from '@angular/core';
import { ScheduleComponent } from './schedule/schedule.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ScheduleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'schedule';
}
