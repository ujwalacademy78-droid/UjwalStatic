// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-our-teams-detail',
//   imports: [],
//   templateUrl: './our-teams-detail.component.html',
//   styleUrl: './our-teams-detail.component.scss'
// })
// export class OurTeamsDetailComponent {

// }
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsComponent } from "../stats/stats.component";

interface Teacher {
  name: string;
  role: string;
  image: string;
}

@Component({
  selector: 'app-our-team',
  standalone: true,
  imports: [CommonModule, StatsComponent],
  templateUrl: './our-teams-detail.component.html',
  styleUrls: ['./our-teams-detail.component.scss']
})
export class OurTeamsDetailComponent {
  title = 'Meet Our Mentors';
  subtitle = 'Our experienced trainers bring knowledge, passion, and commitment to guide every student. With diverse expertise in programming, design, and emerging technologies, they ensure learning is practical, industry-focused, and inspiring. Beyond teaching, our team mentors students in career growth, problem-solving, and building confidence for real-world success..';

  teachers: Teacher[] = [
    {
      name: 'Prapti Sonar',
      role: 'Lead Trainer',
      image: 'assets/team/lead-trainer.jpeg'
    },
    
  ];

  // ✅ Common experties & services for staff
  experties: string[] = [
    '10+ Years of combined industry & teaching experience',
    'Expertise in Full-Stack Development, Data Science, Graphics & UI/UX',
    'Focus on practical, hands-on sessions',
    'Mentorship for career growth & placements',
    'Dedicated support for freelancing & entrepreneurship'
  ];

  services: string[] = [
    'Job-Oriented Training Programs',
    'Live Project Work & Case Studies',
    'Career Counselling & Placement Assistance',
    'Workshops on Emerging Technologies',
    'Soft Skills & Interview Preparation'
  ];
}
