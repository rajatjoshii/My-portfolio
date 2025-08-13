import { Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';
import { HeaderComponent } from './home/header/header.component';
import { BioComponent } from './home/bio/bio.component';
import { ExperienceComponent } from './home/experience/experience.component';
import { FooterComponent } from './home/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, SliderModule, HeaderComponent, BioComponent, ExperienceComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  title = 'my-app';
  sliderValue: number = 200;
  constructor(private el: ElementRef){}
  onScrollToBio(){
    const bio = this.el.nativeElement.querySelector('#bio');
    bio?.scrollIntoView({behavior: 'smooth'});
  }
  onScrollToExperience(){
    const experience = this.el.nativeElement.querySelector('#experience');
    experience?.scrollIntoView({behavior: 'smooth'});
  }
  onScrollToTop(){
    const header = this.el.nativeElement.querySelector('#header');
    header?.scrollIntoView({behavior: 'smooth'});
  }
}
