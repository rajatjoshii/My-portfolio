import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdigoExperienceComponent } from './odigo-experience.component';

describe('OdigoExperienceComponent', () => {
  let component: OdigoExperienceComponent;
  let fixture: ComponentFixture<OdigoExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OdigoExperienceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OdigoExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
