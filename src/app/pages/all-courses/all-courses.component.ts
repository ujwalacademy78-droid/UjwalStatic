import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { StatsComponent } from "../stats/stats.component";
import { ReviewsComponent } from "../reviews/reviews.component";
import { WhyUjwalComponent } from "../why-ujwal/why-ujwal.component";

type CourseItem = {
  slug: string;          // used for links: /courses/:slug
  icon: string;          // icon path (svg/png)
  slabTitle: string;     // title inside the blue slab
  title: string;         // long title on the right (link)
  excerpt: string;       // short description
};

@Component({
  selector: 'app-all-courses',
  standalone: true,
  imports: [NgFor, RouterLink, StatsComponent, ReviewsComponent, WhyUjwalComponent],
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.scss']
})
export class AllCoursesComponent {

  // 👇 ONLY edit/append here in future
  courses: CourseItem[] = [
    {
      slug: 'java',
      icon: 'assets/course-icons/java.svg',
      slabTitle: 'Java Full Stack Developer Course',
      title: 'Top Java Classes In Amravati – Master Java Programming With Expert Guidance',
      excerpt:
        'Join the top Java classes in Amravati at Ujwal Acadamy and gain hands-on skills in Java programming. Our Java programming course covers everything from basics to advanced concepts, preparing you for a strong IT career. With industry-aligned content, Java course in Amravati is ideal for all levels. Enroll now to advance your skills in Amravati'
    },
    {
      slug: 'web',
      icon: 'assets/course-icons/full-stack-developer.png',
      slabTitle: 'Full Stack Web Development Course',
      title: 'Best Full Stack Web Development Classes In Amravati – Build Your Future In Tech',
      excerpt:
        'Master the full stack web development course at UJwal Acadamy, Amravati’s top institute for aspiring web developers. Our full course of web development covers everything from frontend to backend, preparing you for real-world projects. With expert guidance, our full stack website development course ensures you are equipped with essential skills. Enroll today and kickstart your career with Amravati’s most trusted full stack web development classes.'
    },
    {
      slug: 'python',
      icon: 'assets/course-icons/python.png',
      slabTitle: 'Python Full Stack Developer Course',
      title: 'Python Classes In Amravati – From Beginner To Expert With Placement',
      excerpt:
        'Ujwal Acadamy’s Python classes in Amravati provide a structured pathway to learn Python, from the basics to advanced techniques. Our Python complete course covers everything from foundational coding to practical applications, making it ideal for Python for beginners. With expert-led sessions, this Python language course prepares you for high-demand roles in programming, offering the best Python training in Amravati.'
    },
    // wherever you maintain the courses array (e.g. all-courses.component.ts)
    {
      slug: 'ml-ai', icon: 'assets/course-icons/ai.png', title: 'Machine Learning & AI', excerpt: 'Master ML algorithms, AI frameworks, and deep learning with real-world projects.',
      slabTitle: 'Machine Learning & AI Course'
    },
    {
  slug: 'c-cpp',
  icon: 'assets/course-icons/cpp.png', // optional svg or png path
  slabTitle: 'C & C++ Programming Course',
  title: 'C & C++ Programming with Data Structures',
  excerpt: 'Learn C & C++ from fundamentals to advanced topics: memory management, OOP, STL, DS & Algorithms. Ideal for systems, embedded & competitive programming.',
   // optional class for custom color
  },
  {
    slug: 'graphics-design',
    icon: 'assets/course-icons/graphics.png',
    title: 'Graphics Design',
    excerpt: 'Professional graphics design course: Photoshop, Illustrator, Figma, branding & portfolio.',
    slabTitle: ''
  }


    
  ];

  hero = {
    heading: 'Best IT Coding Classes in Amravati<br>With Placement',
    text: `Ujwal Acadamy Computer Training Institute Pvt. Ltd. (UJTIPL) in Amravati offers leading IT coding classes in Amravati with placement support, covering in-demand courses like Full Stack Web Development, Java, Python, Dot Net, PHP, Embedded Systems, and Autodesk Alias. Known for our best online & offline full stack development course, we provide industry-aligned, hands-on training tailored for both beginners and professionals. Ujwal Academy's Java and Python classes build core programming skills, while Dot Net, PHP, and specialized courses in Embedded Systems and Autodesk prepare students for versatile careers in IT. Join Ujwal Academy for expert training and a strong placement track record in Amravati’s tech industry.`,
    img: 'assets/stud-learning.jpeg'
  };
}

