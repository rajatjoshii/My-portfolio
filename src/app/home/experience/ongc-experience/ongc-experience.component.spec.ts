import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OngcExperienceComponent } from './ongc-experience.component';

describe('OngcExperienceComponent', () => {
  let component: OngcExperienceComponent;
  let fixture: ComponentFixture<OngcExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OngcExperienceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OngcExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
