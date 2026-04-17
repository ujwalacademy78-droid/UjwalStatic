import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CCppComponent } from './c-cpp.component';

describe('CCppComponent', () => {
  let component: CCppComponent;
  let fixture: ComponentFixture<CCppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CCppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CCppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
