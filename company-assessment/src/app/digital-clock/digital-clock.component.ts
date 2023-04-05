import { Component,  OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClockService } from '../clockService';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.css']
})
export class DigitalClockComponent implements OnInit {

  private time: Observable<Date>;
  public hours: string = "";
  public minutes: string = "";
  public seconds: string = "";
  public clockMeridian : string = "";

  constructor(private clockService: ClockService) {
    this.time = this.clockService.time$;
  }

  ngOnInit() {
    this.time.subscribe(date => {
      this.hours = this.padZero(date.getHours());
      this.minutes = this.padZero(date.getMinutes());
      this.seconds = this.padZero(date.getSeconds());

      if(date.getHours() > 12){
        this.clockMeridian = "PM";
      }else{
        this.clockMeridian = "AM";
      }
    });
  }

  private padZero(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }

}
