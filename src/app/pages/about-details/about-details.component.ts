
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsComponent } from "../stats/stats.component";
import { WhyUjwalComponent } from "../why-ujwal/why-ujwal.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, StatsComponent, WhyUjwalComponent],
  templateUrl: './about-details.component.html',
  styleUrls: ['./about-details.component.scss']
})
export class AboutDetailsComponent {
}
