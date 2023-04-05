import { Component } from '@angular/core';
import { ClockService } from './clockService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  currentTime: Date = new Date();

  constructor(private clockService: ClockService) { 
    this.clockService.time$.subscribe(time => {
      this.currentTime = time; // Update the current time variable
    });
  }

}
