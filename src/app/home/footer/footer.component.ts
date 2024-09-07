import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  @Output() navigateToTop = new EventEmitter<void>();
  email = 'rajatnahl25@gmail.com';
  onFooterButtonClick(){
    this.navigateToTop.emit();
  }
}
