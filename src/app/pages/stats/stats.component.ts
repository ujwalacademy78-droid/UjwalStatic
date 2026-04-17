import { Component } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent {
  teachingExpertise = 0;
  professionalCourses = 0;
  studentsTrust = 0;
  satisfactionRate = 0;
  countersStarted = false;

  startCounters() {
    if (this.countersStarted) return; // run only once
    this.countersStarted = true;

    this.animateValue('teachingExpertise', 10, 30);
    this.animateValue('professionalCourses', 20, 50);
    this.animateValue('studentsTrust', 1000, 10);
    this.animateValue('satisfactionRate', 100, 20);
  }

  animateValue(
    field: 'teachingExpertise' | 'professionalCourses' | 'studentsTrust' | 'satisfactionRate',
    target: number,
    interval: number
  ) {
    const step = Math.ceil(target / 100);
    const timer = setInterval(() => {
      if (this[field] < target) {
        this[field] = Math.min(this[field] + step, target);
      } else {
        clearInterval(timer);
      }
    }, interval);
  }
}