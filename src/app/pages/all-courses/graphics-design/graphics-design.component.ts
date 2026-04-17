import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhyUjwalComponent } from "../../why-ujwal/why-ujwal.component";

type Feature = { icon: string; title: string; text: string };
type FaqItem = { q: string; a: string; open?: boolean };

@Component({
  selector: 'app-graphics-design',
  standalone: true,
  imports: [CommonModule, WhyUjwalComponent],
  templateUrl: './graphics-design.component.html',
  styleUrls: ['./graphics-design.component.scss']
})
export class GraphicsDesignComponent {
  title = 'Professional Graphics Design Course';

  introParas: string[] = [
    `Learn industry-standard graphic design skills at Ujwal Academy. This course teaches visual design principles, Adobe Photoshop, Illustrator, Figma, branding, UI basics, and practical project workflows to build a professional portfolio.`,
    `Our hands-on curriculum emphasizes real projects — branding kits, marketing creatives, website mockups, and social media campaigns — so you leave with real work to show employers or clients.`
  ];

  subheading = 'Key Features of Graphics Design Course';

  // Feature cards — change / add in TS only
  features: Feature[] = [
    { icon: 'bi-palette', title: 'Design Fundamentals', text: 'Color theory, composition, typography and visual hierarchy.' },
    { icon: 'bi-brush', title: 'Adobe Photoshop', text: 'Image editing, retouching, masking and creative effects.' },
    { icon: 'bi-vector-pen', title: 'Adobe Illustrator', text: 'Vector illustration, logos and iconography.' },
    { icon: 'bi-device-ssd', title: 'Figma & UI Basics', text: 'Prototype, wireframe and collaborate for UI projects.' },
    { icon: 'bi-card-heading', title: 'Branding Projects', text: 'Create brand kits: logo, color palette, type & identity.' },
    { icon: 'bi-phone', title: 'Social Media Creatives', text: 'Design templates & ads optimized for platforms.' },
    { icon: 'bi-pc-display', title: 'Portfolio Projects', text: 'Build 4+ real projects to showcase to clients/employers.' },
    { icon: 'bi-people', title: 'Mentorship', text: 'One-on-one feedback, live critiques and group reviews.' },
    { icon: 'bi-gear', title: 'Production Ready Assets', text: 'Export, handoff, and prepare designs for dev & print.' },
    { icon: 'bi-lightning', title: 'Fast-Track Workshops', text: 'Weekend bootcamps on motion graphics & UI micro-interactions.' },
    { icon: 'bi-briefcase', title: 'Career Guidance', text: 'Resume help, mock interviews and freelance guidance.' },
    { icon: 'bi-award', title: 'Certificate', text: 'Get a completion certificate and shareable portfolio link.' }
  ];

  // FAQ data for Graphics Design
  faqs: FaqItem[] = [
    {
      q: 'Do I need prior design experience?',
      a: `No — the course covers design fundamentals and tools from scratch, but some basic computer familiarity helps.`,
      open: true
    },
    {
      q: 'Which tools will I learn?',
      a: `Adobe Photoshop, Adobe Illustrator, Figma, and brief intro to After Effects for simple motion graphics.`
    },
    {
      q: 'Will I get real projects?',
      a: `Yes — you will complete branding projects, marketing creatives, UI mockups, and a portfolio-ready case study.`
    },
    {
      q: 'Is this course suitable for freelancers?',
      a: `Absolutely — we cover client workflows, pricing guidance, and how to present a professional portfolio.`
    },
    {
      q: 'What is the course duration?',
      a: `Typically 3–4 months with live classes + project weeks. Flexible / weekend batches available.`
    }
  ];

  // Accordion behavior: only one open at a time
  toggleFaq(i: number) {
    const wasOpen = !!this.faqs[i].open;
    this.faqs.forEach(f => (f.open = false));
    this.faqs[i].open = !wasOpen;
  }
}
