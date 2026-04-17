import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsComponent } from "../stats/stats.component";
import { CoursesComponent } from "../courses/courses.component";
import { WhyUjwalComponent } from "../why-ujwal/why-ujwal.component";
import { ReviewsComponent } from "../reviews/reviews.component";
import { OurTeamComponent } from "../our-team/our-team.component";
import { AboutComponent } from "../about/about.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, StatsComponent, CoursesComponent, WhyUjwalComponent, ReviewsComponent, OurTeamComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}
