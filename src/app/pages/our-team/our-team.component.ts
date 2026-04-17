
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



interface Teacher {
  name: string;
  role: string;
  image: string;
}

@Component({
  selector: 'app-our-team',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss']
})
export class OurTeamComponent {
  title = 'Meet Our Mentors';
  subtitle = 'Our experienced trainers bring knowledge, passion, and commitment to guide every student.';

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

