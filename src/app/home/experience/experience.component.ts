import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OngcExperienceComponent } from './ongc-experience/ongc-experience.component';
import { OdigoExperienceComponent } from './odigo-experience/odigo-experience.component';
import { GoogleTvcExperienceComponent } from './google-tvc-experience/google-tvc-experience.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule,OngcExperienceComponent,OdigoExperienceComponent,GoogleTvcExperienceComponent, MatButtonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  currentExperience: string = 'googleTVC'; // Default experience

  loadExperience(experience: string) {
    this.currentExperience = experience;
  }
}
