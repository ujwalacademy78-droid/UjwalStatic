import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurTeamsDetailComponent } from './our-teams-detail.component';

describe('OurTeamsDetailComponent', () => {
  let component: OurTeamsDetailComponent;
  let fixture: ComponentFixture<OurTeamsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurTeamsDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurTeamsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
