import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { HeroComponent } from "../hero/hero.component";
import { TecnologiasComponent } from "../tecnologias/tecnologias.component";
import { ProjetosComponent } from "../projetos/projetos.component";
import { ContatosComponent } from "../contatos/contatos.component";
import { AboutComponent } from "../about/about.component";

@Component({
  selector: 'app-pagina-inicial',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, TecnologiasComponent, ProjetosComponent, ContatosComponent, AboutComponent],
  templateUrl: './pagina-inicial.component.html',
  styleUrl: './pagina-inicial.component.css'
})
export class PaginaInicialComponent {

}
