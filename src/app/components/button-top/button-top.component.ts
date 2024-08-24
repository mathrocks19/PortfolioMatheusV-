import { Component } from '@angular/core';

@Component({
  selector: 'app-button-top',
  standalone: true,
  imports: [],
  templateUrl: './button-top.component.html',
  styleUrl: './button-top.component.css'
})
export class ButtonTopComponent {
  
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
