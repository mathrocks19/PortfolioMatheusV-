import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {


  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.scrollToFooter();
      }
    });
  }

  scrollToFooter() {
    const footer = document.querySelector('footer'); // Seleciona o elemento footer
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' }); // Rola suavemente até o footer
    }
  }
}
