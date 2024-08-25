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

  private isInitialNavigation = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (!this.isInitialNavigation) {
          this.scrollToFooter();
        }
        this.isInitialNavigation = false;
      }
    });
  }

  goToHome() {
    this.router.navigate(['/']);
  }

  scrollToFooter() {
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  toggleMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-nav');
    if (mobileMenu) {
      mobileMenu.classList.toggle('active');
    }
  }


}
