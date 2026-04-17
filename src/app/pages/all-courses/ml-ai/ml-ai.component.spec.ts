import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlAiComponent } from './ml-ai.component';

describe('MlAiComponent', () => {
  let component: MlAiComponent;
  let fixture: ComponentFixture<MlAiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MlAiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MlAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
