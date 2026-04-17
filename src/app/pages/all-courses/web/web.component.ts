import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhyUjwalComponent } from "../../why-ujwal/why-ujwal.component";

type Feature = { icon: string; title: string; text: string };
type FaqItem = { q: string; a: string; open?: boolean };

@Component({
  selector: 'app-web',
  standalone: true,
  imports: [CommonModule, WhyUjwalComponent],
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss']
})
export class WebComponent {
  // Heading + intro (same structure as your Java page)
  heading = 'Master Web Development With The Best Web Development Course In Amravati';
  @Input() title = `FAQ's`;

  introParas: string[] = [
    `Enroll in the best web development classes at Ujwal Academy and gain comprehensive skills to create dynamic, responsive, and interactive websites. This full-stack web course covers essential front-end technologies including HTML, CSS, Bootstrap, JavaScript and modern frameworks, as well as back-end development with APIs and databases—helping you build professional web apps and single-page applications (SPAs).`,
    `Learn from experienced trainers, leverage a supportive learning environment, and elevate your career with our full-stack developer course tailored to current industry trends. Secure your future with Ujwal’s web development course today.`
  ];

  subheading = 'Key Features Of Our Web Development Training Course';

  // 6 feature cards (same grid style as Java page)
  features: Feature[] = [
    { icon: 'bi-mortarboard', title: 'Certificate of Completion',
      text: 'Receive a shareable certificate upon successfully completing the course.' },
    { icon: 'bi-laptop', title: 'Flexible Learning Options',
      text: 'Choose between online or offline classes to suit your schedule.' },
    { icon: 'bi-node-plus', title: 'No Prior Experience Required',
      text: 'Designed for beginners, intermediates and advanced learners.' },
    { icon: 'bi-collection', title: 'Comprehensive Training',
      text: '300+ hours of in-depth learning, including real-time projects and practical sessions.' },
    { icon: 'bi-person-badge', title: 'Expert Guidance',
      text: 'Personal mentorship and classroom training led by industry professionals.' },
    { icon: 'bi-briefcase', title: 'Job-Ready Skills',
      text: 'Learn 20+ in-demand tools and skills with lesson-end tasks and phase-end projects.' },

    { icon: 'bi-cash-coin', title: 'Affordable Fees with EMI Option',
    text: 'Gain premium skills without breaking the bank.' },
  { icon: 'bi-life-preserver', title: 'Lifetime Job Assistance',
    text: 'Benefit from interview preparation, resume building, and placement support.' },
  { icon: 'bi-people', title: 'Interactive Live Classes',
    text: 'Engage in 8X higher interaction with expert trainers in live online sessions.' },

  // 🔽 New row 2
  { icon: 'bi-diagram-3', title: 'Industry-Relevant Projects',
    text: 'Apply your skills through practical assignments, internships, and graded quizzes.' },
  { icon: 'bi-award', title: 'Proven Track Record',
    text: 'Join 2000+ learners and 100+ completed batches with a 100% success rate.' },
  { icon: 'bi-piggy-bank', title: 'Cost-Effective Training',
    text: 'Gain skills taught by top companies at an affordable price.' },
  ];


 faqs: FaqItem[] = [
    {
      q: 'What skills are required to become a Web Developer?',
      a: `HTML, CSS, JavaScript, a front-end framework (e.g., React/Angular),
          Git, responsive design, REST APIs, plus a back-end (Node/Java/Python) and SQL/NoSQL basics.`
    },
    {
      q: 'What is the salary of a Web Developer in India?',
      a: `For freshers it typically ranges from ₹3 LPA to ₹6 LPA depending on city, company, and skills.
          Strong projects and interview prep can push it higher.`
    },
    {
      q: 'Is Web development enough to get a job?',
      a: `Yes—if you build a portfolio with real projects (SPAs, APIs, dashboards), understand deployment,
          and practice DSA & interview questions alongside.`
    },
    {
      q: 'Which job is best in Web Development?',
      a: `Front-end Developer, Back-end Developer and Full-stack Developer are common.
          UI Developer and CMS/Low-code roles are also in demand.`
    },
    {
      q: 'How long does it take to become job-ready?',
      a: `With a structured plan and consistent practice, 4–6 months is typical for job-ready skills,
          including projects and mock interviews.`
    },
    {
      q: 'Do I need a CS degree to get hired?',
      a: `No. A strong portfolio, fundamentals, and problem-solving are more important.
          Many non-CS candidates get placed after focused training.`
    },
    {
      q: 'Which tools and frameworks will I learn?',
      a: `VS Code, Git/GitHub, Chrome DevTools, Node & npm. Frameworks depend on track
          (e.g., Angular/React on front-end; Node/Spring/Django on back-end).`
    },
    {
      q: 'Can I get remote or freelance work in Web Dev?',
      a: `Yes—once you have a few quality projects and confidence in communication,
          freelancing and remote roles are common in Web Dev.`
    }
  ];

  toggle(i: number) {
  const isOpen = !!this.faqs[i].open;     // remember current state
  this.faqs.forEach(f => f.open = false); // close all
  this.faqs[i].open = !isOpen;            // re-open only if it was closed
}
}