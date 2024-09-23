import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatButtonToggleModule,
    MatInputModule,
    MatRadioModule,
    MatTableModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss',
})
export class ScheduleComponent {
  buyTicketForm: FormGroup;
  isShowSchedule: boolean = false;

  constructor() {
    this.buyTicketForm = new FormGroup({
      whereFrom: new FormControl('', [Validators.required]),
      whither: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
    });
  }

  submitForm() {
    console.log(this.buyTicketForm.value);
  }

  // showSchedule() {
  //   this.isShowSchedule = !this.isShowSchedule;
  // }
}
