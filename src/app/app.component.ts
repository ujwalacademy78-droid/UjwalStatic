import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SocialBarComponent } from "./shared/social-bar/social-bar.component";
import { BackToTopComponent } from "./shared/back-to-top/back-to-top.component";
import { BreadcrumbComponent } from "./shared/breadcrumb/breadcrumb.component";
import { OfferModalComponent } from "./core/offer-modal/offer-modal.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, SocialBarComponent, BackToTopComponent, BreadcrumbComponent, OfferModalComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo(0, 0); // ✅ force scroll top
      });
  }
}
