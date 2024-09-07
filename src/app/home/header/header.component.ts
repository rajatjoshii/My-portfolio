import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { catchError, concatMap, Observable, of } from 'rxjs';
import { TypewriterService } from './typewriter.service';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatDividerModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  type$!: Observable<string>;
  typewriter: string = "";
  @Output() navigateToBio = new EventEmitter<void>();
  @Output() navigateToExperience = new EventEmitter<void>();
  constructor(readonly typewriterService: TypewriterService){}

  ngOnInit(): void {
    let i=0;
    const strings = [
      "software engineer",
      "Angular developer",
      "human being"
    ];
  
   this.typewriterService.getLetters(strings).pipe(concatMap(async(char)=>{
      if(this.typewriter.length === strings[i].length && i<strings.length-1){
        while(this.typewriter.length){
        this.typewriter = await this.deleteTypewriter(this.typewriter);
        }
        this.typewriter = "";
        i++;
      }
      this.typewriter += char; 
      return char;
    })).subscribe();
  }
  async deleteTypewriter(str: string): Promise<string>{
    return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve(str.substring(0,str.length-1));
      },100)
    })
  }

  onBioButtonClick(){
    this.navigateToBio.emit();
  }
  onExperienceButtonClick(){
    this.navigateToExperience.emit();
  }
}
