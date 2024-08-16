import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { HeroComponent } from "../hero/hero.component";
import { ProjetosComponent } from "../projetos/projetos.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, ProjetosComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
