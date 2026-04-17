import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WhyUjwalComponent } from "../../why-ujwal/why-ujwal.component";

interface FaqItem {
  q: string;
  a: string;
  open?: boolean;
}

@Component({
  selector: 'app-ml-ai',
  standalone: true,
  imports: [CommonModule, WhyUjwalComponent],
  templateUrl: './ml-ai.component.html',
  styleUrls: ['./ml-ai.component.scss'],
  // if your project uses standalone components, add `standalone: true` and imports accordingly
})
export class MlAiComponent {
  // intro text (render in template)
  intro = `Enhance your career with our industry-ready Machine Learning & Artificial Intelligence training program. This course is designed to provide hands-on experience with real-world projects using Python, TensorFlow, PyTorch, Scikit-learn, NLP, and Computer Vision. Whether you’re a beginner or looking to upskill, our expert trainers will guide you step by step — from fundamentals to advanced AI models.

At Ujwal Academy, we ensure you graduate with a professional portfolio of ML & AI projects like chatbots, recommendation engines, fraud detection, and predictive analytics — making you job-ready in the rapidly growing AI industry.`;

  // FAQ list (edit/add later here)
  faqs: FaqItem[] = [
    {
      q: 'What are the prerequisites for the Machine Learning & AI course?',
      a: `Basic programming knowledge (Python recommended), understanding of high-school math (algebra),
         and familiarity with basic statistics will help you get the most out of the course.`,
      open: true // default first open if you want
    },
    {
      q: 'Which frameworks and libraries will we cover?',
      a: `Hands-on with NumPy, pandas, scikit-learn, TensorFlow (Keras) and PyTorch. We also cover model deployment basics.`,
    },
    {
      q: 'Will there be real projects and a portfolio?',
      a: `Yes — you'll build 2–3 real projects (e.g., classification, recommendation, NLP pipeline) that you can add to a portfolio.`,
    },
    {
      q: 'Is this course suitable for beginners?',
      a: `Yes. We cover concepts from the ground up but expect learners to be comfortable with basic Python. We provide pre-course material if needed.`,
    },
    {
      q: 'What kind of jobs can I get after this course?',
      a: `Roles such as ML Engineer, Data Scientist (entry-level), AI Developer, or research-assistant roles in product teams.`,
    }
  ];

  // Toggle a single FAQ item open — close others (ensures only 1 open)
  toggleFaq(idx: number) {
    this.faqs = this.faqs.map((f, i) => ({ ...f, open: i === idx ? !f.open : false }));
  }
}

