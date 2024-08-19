import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { initFlowbite } from 'flowbite/lib/esm/components';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ProjetosComponent } from "./components/projetos/projetos.component";
import { TecnologiasComponent } from "./components/tecnologias/tecnologias.component";
import { HeroComponent } from "./components/hero/hero.component";
import { PaginaInicialComponent } from './components/pagina-inicial/pagina-inicial.component';
import { ContatosComponent } from './components/contatos/contatos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PaginaInicialComponent, NavbarComponent, TecnologiasComponent, HeroComponent, ProjetosComponent, ContatosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'portfolio';

  ngOnInit() {
    initFlowbite();
  }

}
