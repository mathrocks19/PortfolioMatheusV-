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


  // Flag para indicar se a navegação é inicial
  private isInitialNavigation = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Se a navegação não é inicial, rola para o final
        if (!this.isInitialNavigation) {
          this.scrollToFooter();
        }
        // Marca a navegação como não inicial
        this.isInitialNavigation = false;
      }
    });
  }

  scrollToFooter() {
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
