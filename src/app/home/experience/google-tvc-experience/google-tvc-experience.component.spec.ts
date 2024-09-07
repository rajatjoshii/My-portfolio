import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleTvcExperienceComponent } from './google-tvc-experience.component';

describe('GoogleTvcExperienceComponent', () => {
  let component: GoogleTvcExperienceComponent;
  let fixture: ComponentFixture<GoogleTvcExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoogleTvcExperienceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoogleTvcExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
