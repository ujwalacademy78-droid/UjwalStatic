import { Component } from '@angular/core';
import { NgFor, NgIf, NgClass } from '@angular/common';

type Review = {
  name: string;
  date: string;          // ISO or display string
  rating: number;        // 1..5
  text: string;          // full review text
  avatar?: string;       // optional image path
  expanded?: boolean;    // UI state
};

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [NgFor, NgIf, NgClass],
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent {
  city = 'Amravati';

  // 5 stars helper for template looping
  stars = [0, 1, 2, 3, 4];

  reviews: Review[] = [
    {
      name: 'Shraddha Jadhav',
      date: '2025-08-22',
      rating: 5,
      text:
        `I joined Ujwal Academy one month ago for programming classes, and the experience has been excellent. The teaching is clear, practical, and beginner-friendly. Highly recommended for anyone who wants to learn coding.`,
      // avatar: 'assets/avatars/a1.jpg',
      expanded: false
    },
    {
      name: 'Rahul Wankhade',
      date: '2025-08-22',
      rating: 5,
      text:
        `I have been learning programming at Ujwal Academy for the past one month and it has been a great experience. The teaching style is very clear and easy to understand, even for beginners. The faculty explains concepts step by step with practical examples, which helps in building confidence while coding. The environment is supportive, and doubts are solved patiently. I feel my programming skills are improving day by day, and I would definitely recommend Ujwal Academy to anyone who wants to learn programming seriously.`,
      // avatar: 'assets/avatars/a2.jpg',
      expanded: false
    },
    {
      name: 'Vidhi Kaware',
      date: '2025-08-21',
      rating: 5,
      text:
        `"The C and C++ coaching has been an excellent learning experience. The concepts are explained clearly from the basics to advanced topics, making it easy to understand even for beginners. Practical examples and coding exercises helped me strengthen my programming skills and apply the concepts in real projects. The teaching pace is comfortable, doubts are addressed patiently, and the focus on logic building has really improved my problem-solving abilities. I feel much more confident in writing efficient C and C++ programs now. Highly recommended for anyone who wants to build a strong foundation in programming ".`,
      // no avatar → will show initials
      expanded: false
    }
  ];

  toggle(i: number) {
    this.reviews[i].expanded = !this.reviews[i].expanded;
  }

  initialOf(name: string) {
    return (name?.trim()?.charAt(0) || '').toUpperCase();
  }
}
