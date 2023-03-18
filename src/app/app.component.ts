import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'datepickerwithweekselection';
  today = new Date();
  //2018-07-22 startdateFrom yesterday
  startdateFrom = `${this.today.getFullYear()}-${this.today.getMonth()}-${this.today.getDate() - 1}`
  selectedStartDate: any;
  selectedEndDate: any;
  minimumDaysLimitation: number = 7
  allDays: any = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  firstDate: any;
  secondDate: any;
  selectedDays: any = [];
  startDay: any;

  ngOnInit() {

  }
  startDateChange(event: any) {
    // alert(event.target.value)
    this.selectedStartDate = event.target.value;
  }
  endDateChange(event: any) {
    // alert(event.target.value)
    this.selectedEndDate = event.target.value;
    if (!!this.selectedStartDate && !!this.selectedStartDate) {
      this.firstDate = new Date(this.selectedStartDate.split("-")[0], this.selectedStartDate.split("-")[1] - 1, this.selectedStartDate.split("-")[2]);
      this.secondDate = new Date(this.selectedEndDate.split("-")[0], this.selectedEndDate.split("-")[1] - 1, this.selectedEndDate.split("-")[2]);
      const ONE_DAY = 1000 * 60 * 60 * 24;
      const differneceinMS = Math.abs(this.secondDate - this.firstDate);
      const differnece = Math.round(differneceinMS / ONE_DAY);
      alert('selected days difference');
      alert(differnece);
      this.getdaysselection(differnece);
    }
  }
  getdaysselection(diff: number) {
    this.startDay = this.firstDate.getDay()
    console.log(this.startDay, this.allDays[this.startDay]);
    if (diff > this.minimumDaysLimitation) {
      this.pushselecteddays(6)
    } else {
      this.pushselecteddays(diff)

    }
  }
  pushselecteddays(diff: number) {
    for (let index = 0; index < diff - 1; index++) {
      this.selectedDays.push(
        (index == 0 || index <= 6) ? this.allDays[(this.startDay) + index] : this.allDays[0 + index]
      );
      console.log(this.selectedDays);
    }
  }
}

// this.allDays[(this.startDay) + ((index ==0 || index <= 6)?index : index ==0)]