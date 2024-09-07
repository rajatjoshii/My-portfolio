import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './home/header/header.component';
import { BioComponent } from './home/bio/bio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExperienceComponent } from './home/experience/experience.component';
import { FooterComponent } from './home/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent, BioComponent, ExperienceComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  title = 'my-app';
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
