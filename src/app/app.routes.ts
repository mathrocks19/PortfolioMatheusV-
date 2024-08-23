import { Routes } from '@angular/router';
import { ProjetosComponent } from './components/projetos/projetos.component';
import { PaginaInicialComponent } from './components/pagina-inicial/pagina-inicial.component';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';
import { ContatosComponent } from './components/contatos/contatos.component';
import { AboutComponent } from './components/about/about.component';


export const routes: Routes = [

  { path: '', redirectTo: 'pagina-inicial', pathMatch: 'full' },
  { path: '', component: PaginaInicialComponent },
  { path: 'about', component: AboutComponent },
  { path: 'tecnologias', component: TecnologiasComponent},
  { path: 'projetos', component: ProjetosComponent },
  { path: 'contatos', component: ContatosComponent },
  { path: '**', redirectTo: '' }



];

