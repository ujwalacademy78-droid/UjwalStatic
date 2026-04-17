import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { WhyUjwalComponent } from './pages/why-ujwal/why-ujwal.component';
import { OurTeamComponent } from './pages/our-team/our-team.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { FooterComponent } from './core/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { AllCoursesComponent } from './pages/all-courses/all-courses.component';
import { FeaturesComponent } from './pages/all-courses/java/java.component';
import { PythonComponent } from './pages/all-courses/python/python.component';
import {AboutDetailsComponent} from './pages/about-details/about-details.component';
import { WebComponent } from './pages/all-courses/web/web.component';
import { MlAiComponent } from './pages/all-courses/ml-ai/ml-ai.component';
import { CCcppComponent } from './pages/all-courses/c-cpp/c-cpp.component';
import { GraphicsDesignComponent } from './pages/all-courses/graphics-design/graphics-design.component';
import { OurTeamsDetailComponent } from './pages/our-teams-detail/our-teams-detail.component';
import { OfferModalComponent } from "./core/offer-modal/offer-modal.component";


export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Ujwal Academy' },
    { path: 'why-ujwal', component: WhyUjwalComponent, data: { breadcrumb: 'Why Ujwal' } },
    { path: 'our-team', component: OurTeamComponent, data: { breadcrumb: 'Our Team' } },
    { path: 'footer', component: FooterComponent, data: { breadcrumb: 'Footer' } },
    { path: 'reviews', component: ReviewsComponent, data: { breadcrumb: 'Reviews' } },
    { path: 'about', component: AboutComponent, data: { breadcrumb: 'About' } },
    { path: 'all-courses', component: AllCoursesComponent, data: { breadcrumb: 'All Courses' } },
    { path: 'about-details', component: AboutDetailsComponent, data: { breadcrumb: 'About Details' } },
    { path: 'offer-model', component: OfferModalComponent},
    {
      path: 'our-teams-detail',
      component: OurTeamsDetailComponent,
      data: { breadcrumb: 'Our Teams Detail' }
    },
    {
    path: 'courses',
    data: { breadcrumb: 'All Courses' },   // what you want shown in breadcrumb
    children: [
      { path: '', component: AllCoursesComponent }, // /courses
      { path: 'java', component: FeaturesComponent, data: { breadcrumb: 'Java Features' } },
      { path: 'web', component: WebComponent, data: { breadcrumb: 'Web Development Features' } },
      { path: 'python', component: PythonComponent, data: { breadcrumb: 'Python Features' } },
      { path: 'ml-ai', component: MlAiComponent, data: { breadcrumb: 'Machine Learning & AI Features' } },
      { path: 'c-cpp', component: CCcppComponent, data: { breadcrumb: 'C & C++ Features' } },
      { path: 'graphics-design', component: GraphicsDesignComponent, data: { breadcrumb: 'Graphics Design Features' } }

    ]
  },
    { path: '**', redirectTo: '' }
];
