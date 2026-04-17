import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhyUjwalComponent } from "../../why-ujwal/why-ujwal.component";  // ✅ For *ngFor, *ngIf

type Feature = {
  icon: string;      // Bootstrap Icons name, e.g. "bi-mortarboard"
  title: string;
  text: string;
};

type FaqItem = { q: string; a: string; open?: boolean };

@Component({
  selector: 'app-c-cpp',
  standalone: true,
  imports: [CommonModule, WhyUjwalComponent],
  templateUrl: './c-cpp.component.html',
  styleUrls: ['./c-cpp.component.scss']
})
export class CCcppComponent {

  intro = `Kickstart your programming journey with <strong>C & C++</strong>, the foundation of all modern programming 
    languages and software development. These courses are designed to give you a strong grasp of 
    structured and object-oriented programming concepts, preparing you for advanced technologies.

 With <strong>C</strong>, you’ll master the fundamentals of memory management, data structures, and 
    procedural programming. Moving into <strong>C++</strong>, you’ll explore object-oriented programming (OOP), 
    standard templates, and industry-ready practices used in system software, embedded systems, game 
    development, and high-performance applications.
    
    This hands-on training combines real-world examples, coding exercises, and projects to ensure you 
    gain practical experience. By the end of the course, you’ll be confident in solving problems, writing 
    optimized code, and preparing for roles in software engineering, game development, and system 
    programming.`;

   title = `FAQ's`;

  features: Feature[] = [
    { icon: 'bi-award', title: 'Certification', text: 'Get industry-recognized certification on completion.' },
    { icon: 'bi-laptop', title: 'Hands-On Practice', text: 'Work on projects to strengthen coding skills.' },
    { icon: 'bi-code', title: 'Data Structures & OOPs', text: 'Master algorithms, OOP concepts, and STL.' },
    { icon: 'bi-lightning', title: 'Fast Track Learning', text: 'Designed for both beginners and advanced learners.' },
    { icon: 'bi-people', title: 'Expert Trainers', text: 'Learn from professionals with real-world experience.' },
    { icon: 'bi-briefcase', title: 'Job Assistance', text: 'Placement guidance & interview preparation.' }
  ];

 

 faqs: FaqItem[] = [
     { q: 'Is C & C++ still relevant for jobs?', a: 'Yes, C and C++ are widely used in system programming, embedded systems, and game development.', open: false },
    { q: 'Can beginners learn C++ directly?', a: 'Yes, but we recommend learning C first for a strong foundation.', open: false },
    { q: 'Does this course include Data Structures?', a: 'Yes, our C & C++ course covers Data Structures and Algorithms with coding practice.', open: false },
    { q: 'What career options are available?', a: 'You can become a software developer, embedded programmer, or competitive programmer.', open: false }
  ];
  
  toggle(i: number) {
  const isOpen = !!this.faqs[i].open;     // remember current state
  this.faqs.forEach(f => f.open = false); // close all
  this.faqs[i].open = !isOpen;            // re-open only if it was closed
}
}

