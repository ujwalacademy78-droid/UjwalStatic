import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';
import { filter, map, Subscription } from 'rxjs';

type Crumb = { label: string; url: string };

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink],
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnDestroy {
  crumbs: Crumb[] = [];
  private sub?: Subscription;

  constructor(private router: Router, private route: ActivatedRoute) {
    // rebuild crumbs on every navigation end
    this.sub = this.router.events.pipe(
      filter(ev => ev instanceof NavigationEnd),
      map(() => this.buildCrumbs(this.route.root))
    ).subscribe(c => this.crumbs = c);
  }

  private buildCrumbs(route: ActivatedRoute, url: string = '', crumbs: Crumb[] = []): Crumb[] {
    const routeConfig = route.routeConfig;
    const label = routeConfig?.data?.['breadcrumb'] as string | undefined;
    const path = routeConfig?.path ? `/${routeConfig.path}` : '';

    const nextUrl = path ? `${url}${path}` : url;
    if (label) crumbs.push({ label, url: nextUrl || '/' });

    const child = route.firstChild;
    return child ? this.buildCrumbs(child, nextUrl, crumbs) : crumbs;
  }

  ngOnDestroy() { this.sub?.unsubscribe(); }
}
