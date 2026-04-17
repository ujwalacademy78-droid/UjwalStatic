import { CommonModule } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-offer-modal',
   standalone: true,
  imports: [CommonModule],
  templateUrl: './offer-modal.component.html',
  styleUrls: ['./offer-modal.component.scss']
})
export class OfferModalComponent implements OnInit {
  show = false;

  private SESSION_KEY = 'ujwal_offer_seen_v1';

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    // Show only on first app load per session
    // If sessionStorage has key, do not show.
    const seen = sessionStorage.getItem(this.SESSION_KEY);
    if (!seen) {
      // delay a tiny bit so page renders first (optional)
      setTimeout(() => this.open(), 250);
      sessionStorage.setItem(this.SESSION_KEY, '1');
    }
  }

  open() {
    this.show = true;
    // disable background scrolling while modal open (optional)
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
  }

  close() {
    this.show = false;
    this.renderer.removeStyle(document.body, 'overflow');
  }
}
