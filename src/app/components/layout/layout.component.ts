import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { HeroComponent } from "../hero/hero.component";
import { ProjetosComponent } from "../projetos/projetos.component";
import { TecnologiasComponent } from "../tecnologias/tecnologias.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, ProjetosComponent, TecnologiasComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
