import { Component, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-simple-awesome',
  imports: [FormsModule, NgIf],
  templateUrl: './simple-awesome.component.html',
  styleUrl: './simple-awesome.component.scss'
})
export class SimpleAwesomeComponent {
  inputSeconds: number = 10;
  remainingSeconds: number = 10;
  originalSeconds: number = 10;
  timerRunning: boolean = false;
  timerStarted: boolean = false;
  showTimesUp: boolean = false;
  private timerInterval: any;

  constructor(private cdr: ChangeDetectorRef) {}

  startTimer() {
    if (!this.inputSeconds || this.inputSeconds < 1) return;
    this.originalSeconds = this.inputSeconds;
    this.remainingSeconds = this.inputSeconds;
    this.timerRunning = true;
    this.timerStarted = true;
    this.showTimesUp = false;
    this.clearTimer();
    this.timerInterval = setInterval(() => {
      if (this.remainingSeconds > 0) {
        this.remainingSeconds--;
        this.cdr.detectChanges();
      } else {
        this.timerRunning = false;
        this.showTimesUp = true;
        this.clearTimer();
        this.cdr.detectChanges();
      }
    }, 1000);
  }

  resetTimer() {
    this.clearTimer();
    this.remainingSeconds = this.originalSeconds;
    this.timerRunning = false;
    this.showTimesUp = false;
    this.timerStarted = true;
    this.cdr.detectChanges();
  }

  clearTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  ngOnDestroy() {
    this.clearTimer();
  }
}
