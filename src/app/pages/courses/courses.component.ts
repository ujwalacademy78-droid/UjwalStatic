import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // ✅ For *ngFor, *ngIf
import { RouterLink, RouterLinkActive } from '@angular/router';  // ✅ For routerLink

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive], // ✅ Add these
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  courses = [
    { slug: 'c-cpp', icon: '🖥️', title: 'C & C++ Programming ', excerpt: 'Learn the fundamentals of programming and data structures using C and C++.' },
    { slug: 'java', icon: '☕', title: 'Java Full Stack Developer', excerpt: 'Master front-end and back-end Java technologies with hands-on projects.' },
    { slug: 'python', icon: '🐍', title: 'Python Full Stack Developer', excerpt: 'Learn Python for full-stack development, covering web frameworks, DBs.' },
    { slug: 'web', icon: '💻', title: 'Web Development Full Course', excerpt: 'Design and develop responsive websites using HTML, CSS, JS & frameworks.' },
    // { slug: 'dotnet', icon: '.NET', title: '.NET Full Stack Developer', excerpt: 'Build enterprise apps with .NET frameworks and cloud tools.' },
    // { slug: 'php', icon: 'PHP', title: 'PHP Development', excerpt: 'Dive into dynamic web development with PHP for robust solutions.' },
    // { slug: 'embedded', icon: '⚙️', title: 'Embedded Systems', excerpt: 'Explore hardware-software integration with real-time systems.' },
    { slug: 'graphics-design', icon: '🎨', title: 'Graphics Design', excerpt: 'Learn the principles of design, typography, and color theory with hands-on projects.' },
    { slug: 'ml-ai', icon: '🤖', title: 'Machine Learning & AI', excerpt: 'Master ML algorithms, AI frameworks, and deep learning with real-world projects.' }

  ];
}
