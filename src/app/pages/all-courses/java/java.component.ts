import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { WhyUjwalComponent } from "../../why-ujwal/why-ujwal.component";

type Feature = {
  icon: string;      // Bootstrap Icons name, e.g. "bi-mortarboard"
  title: string;
  text: string;
};

type FaqItem = { q: string; a: string; open?: boolean };


@Component({
  selector: 'app-java-features',
  standalone: true,
  imports: [NgFor, CommonModule, WhyUjwalComponent],
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.scss']
})
export class FeaturesComponent {
  heading = ' Java Course Highlights';
  intro = `Enhance your career with our comprehensive Java training classes in Amravati. Ujwal Academy's Java course has been designed to equip you with in-demand skills, this course covers MySQL, React.js, jQuery, JSP, Servlet, Core Java, Advanced Java, Spring, Spring Boot, JDBC, Hibernate, and more. Learn the essentials of front-end technologies like HTML, CSS, Bootstrap, and JavaScript, as well as powerful back-end development with JSP and AJAX, enabling you to build and maintain high-performance web applications.

As the best Java programming course in Amravati, our curriculum is tailored to prepare you for real-world applications, from interactive websites to robust database-driven apps. Whether you're a beginner or looking to advance, our expert instructors ensure you’re industry-ready with hands-on experience. You’ll build a professional portfolio with projects such as single-page applications, responsive websites, dynamic APIs, and Java-powered app development.`;

  subheading = 'Key Features Of Java Training Course In Amravati';
  title = `FAQ's`;

  // 👉 Add/remove items here only
  features: Feature[] = [
    {
      icon: 'bi-mortarboard',
      title: 'Certification',
      text: 'Earn a shareable certificate upon successful completion.'
    },
    {
      icon: 'bi-laptop',
      title: 'Flexible Learning',
      text: 'Online & offline class options to fit your schedule.'
    },
    {
      icon: 'bi-diagram-3',
      title: 'Comprehensive Curriculum',
      text: 'Core + Advanced Java, Spring Boot, SQL, 20+ in-demand topics.'
    },
    {
      icon: 'bi-bar-chart-line',
      title: 'Skill Levels',
      text: 'Suitable for absolute beginners to advanced learners.'
    },
    {
      icon: 'bi-patch-check',
      title: 'Verified Completion',
      text: 'Project-based evaluation & verified completion status.'
    },
    {
      icon: 'bi-clock-history',
      title: 'Course Duration',
      text: 'Approx. 6 months with projects, mock interviews & labs.'
    },
    {
    icon: 'bi-people',
    title: 'Experienced Instructors',
    text: 'Learn from industry experts with 10+ years of experience.'
  },
  {
    icon: 'bi-person-video3',
    title: 'Personal Mentorship & Classroom Training',
    text: 'One-on-one guidance with interactive live sessions.'
  },
  {
    icon: 'bi-lightning',
    title: 'Practical Focus',
    text: '100% practical sessions with real projects.'
  },

  // --- Row 4 (new) ---
  {
    icon: 'bi-briefcase',
    title: 'Job Assistance',
    text: 'Lifetime job assistance, mock interviews & internship opportunities.'
  },
  {
    icon: 'bi-cash-stack',
    title: 'Affordable & Flexible',
    text: 'EMI options and cost-effective training to fit your budget.'
  },
  {
    icon: 'bi-trophy',
    title: 'Proven Success',
    text: '2000+ learners, 100+ batches, 100% completion rate.'
  }

  ];



 faqs: FaqItem[] = [
    {
      q: 'Is Java training course in Amravati good for software engineers?',
      a: `Software engineers benefit greatly from knowing Java thoroughly. It’s object-oriented,
          widely used for back-end, Android, APIs and enterprise systems—so it’s often a required skill
          in job descriptions.`,
      open: true   // first one open by default (like your reference)
    },
    {
      q: 'What skills are required for Java Full Stack Developer?',
      a: `Core & Advanced Java, OOPs, Collections, JDBC, JPA/Hibernate, Spring & Spring Boot,
          REST APIs, SQL, basic web (HTML/CSS/JS), build tools & Git.`
    },
    {
      q: 'Is Java enough to get a job?',
      a: `Java plus Spring Boot, REST APIs, database skills and projects is the most common
          combination for entry-level back-end roles. Portfolio projects + interview prep help a lot.`
    },
    {
      q: 'Can a non-IT person learn Java?',
      a: `Yes. We start from fundamentals and move to real projects with mentorship, assignments
          and interview practice. Many non-IT learners transition successfully.`
    },
    {
      q: 'Is 6 months enough for a full stack web development course?',
      a: `Yes, if you stay consistent. With a structured plan, 5–8 hrs/week, projects and mock
          interviews, 4–6 months is typical for job-ready skills.`
    }
  ];

  toggle(i: number) {
  const isOpen = !!this.faqs[i].open;     // remember current state
  this.faqs.forEach(f => f.open = false); // close all
  this.faqs[i].open = !isOpen;            // re-open only if it was closed
}
}