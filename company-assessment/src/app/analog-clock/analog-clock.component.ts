import { Component, OnInit } from '@angular/core';
import {ClockService} from '../clockService'

@Component({
  selector: 'app-analog-clock',
  templateUrl: './analog-clock.component.html',
  styleUrls: ['./analog-clock.component.css']
})
export class AnalogClockComponent implements OnInit {

  currentTime: Date = new Date(); // Variable to hold the current time

  
  constructor(private clockService: ClockService) { }

  ngOnInit() {
    // Subscribe to the time$ Observable from the ClockService
    this.clockService.time$.subscribe(time => {
      this.currentTime = time; // Update the current time variable
    });
  }

  getHourHandRotation(): string {
    let hours = this.currentTime.getHours();
    const minutes = this.currentTime.getMinutes();

    hours = (hours * 30) + (minutes * 0.5);
    return `rotate(${hours}deg)`;
  }

  // Method to calculate the rotation degrees for the minute hand
  getMinuteHandRotation(): string {
    const minutes = this.currentTime.getMinutes();
    const seconds = this.currentTime.getSeconds();

    const timeInMinutes = (minutes * 6) + (seconds * 0.1);;

    return `rotate(${timeInMinutes}deg)`;
  }

  // Method to calculate the rotation degrees for the second hand
  getSecondHandRotation(): string {
    let seconds = this.currentTime.getSeconds();
    seconds = seconds * 6;
    return `rotate(${seconds}deg)`;
  }
}
