import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhyUjwalComponent } from "../../why-ujwal/why-ujwal.component";

type Feature = { icon: string; title: string; text: string };
type FaqItem = { q: string; a: string; open?: boolean };


@Component({
  selector: 'app-python',
  standalone: true,
  imports: [CommonModule, WhyUjwalComponent],
  templateUrl: './python.component.html',
  styleUrls: ['./python.component.scss']
})
export class PythonComponent {
  // === Heading + intro (same pattern as Java) ===
  title = ' Python Classes Covered Topics';   // change this heading text if you like

  introParas: string[] = [
    `Unlock your potential with the best Python full-stack developer course at Ujwal Academy. Designed to equip you with in-demand skills, this program combines Python programming for beginners, advanced concepts, and the latest technologies. Learn from seasoned professionals and gain hands-on experience with frameworks like Django/Flask and front-end tools such as React/Angular and Bootstrap.`,
    `Develop dynamic web applications, optimize performance, and master both front-end and back-end technologies including SQL/NoSQL and REST APIs. Our Python training is tailored to give you the right skills to land high-paying jobs in the IT industry—your first step towards becoming a full-stack Python developer with a career-ready portfolio.`
  ];

  subheading = 'Key Features Of Python Programming Training Course';
  faqTitle = `FAQ's`;

  // === 6 feature cards (same structure as Java page) ===
  features: Feature[] = [
    {
      icon: 'bi-mortarboard',                   // bootstrap icons
      title: 'Comprehensive Certification',
      text: 'Earn a Python certificate of completion and share it on professional platforms to enhance your career.'
    },
    {
      icon: 'bi-laptop',
      title: 'Flexible Learning Options',
      text: 'Access both online and offline classes—catering to beginners and advanced learners.'
    },
    {
      icon: 'bi-diagram-2',
      title: 'Immersive Practical Training',
      text: 'Engage in a 6–24 week course with live projects covering data science, web development and backend integration.'
    },
    {
      icon: 'bi-people',
      title: 'Industry-Expert Trainers',
      text: 'Learn from Python-certified professionals with real-world project experience and interview guidance.'
    },
    {
      icon: 'bi-life-preserver',
      title: 'Placement Support',
      text: 'Get placement assistance, portfolio building, resume guidance and mock interviews.'
    },
    {
      icon: 'bi-cash-coin',
      title: 'Affordable and Accessible',
      text: 'EMI options + cost-effective training with access to high-quality learning materials.'
    }
  ];
  faqs: FaqItem[] = [
    {
      q: 'Is Python good for full-stack development?',
      a: `The essential skill set for Python Full Stack developers includes Core Python, Advanced Python, Django, Flask, 
           front-end technologies (HTML, CSS, JavaScript), and database administration (SQL). 
           They should also be skilled in REST APIs, Git, problem-solving, and communication skills.`
  },
  {
    q: 'What skills are required for Python Full Stack Developer?',
    a: `Core & Advanced Python, Django/Flask frameworks, REST APIs, SQL/NoSQL, 
       front-end tools like React or Angular, and DevOps basics.`
  },
  {
    q: 'What is the salary of a Python developer in India?',
    a: `On average ₹4–10 LPA for freshers depending on location & company. With 3–5 years experience, 
         Python developers can earn ₹12–25 LPA or more.`
  },
  {
    q: 'Is Python enough to get a job?',
    a: `Yes, Python is one of the most in-demand skills. With strong fundamentals + projects in Django/Flask, 
         Data Science, or Full Stack, you can land roles such as backend developer, web developer, or data analyst.`
  },
  {
    q: 'Which is the best Python training in Amravati ?',
    a: `The best training is one that offers real-world projects, placement support, and expert mentors. 
             At Ujwal Academy, we provide live classes, lifetime job assistance, and hands-on Python development training.`
  }
  ];

  toggle(i: number) {
    const isOpen = !!this.faqs[i].open;     // remember current state
    this.faqs.forEach(f => f.open = false); // close all
    this.faqs[i].open = !isOpen;            // re-open only if it was closed
  }
}

