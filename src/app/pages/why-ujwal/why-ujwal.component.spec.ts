import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyUjwalComponent } from './why-ujwal.component';

describe('WhyUjwalComponent', () => {
  let component: WhyUjwalComponent;
  let fixture: ComponentFixture<WhyUjwalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyUjwalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyUjwalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
