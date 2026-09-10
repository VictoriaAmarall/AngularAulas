import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './componentes/content/content.component';
import { SobreComponent } from './componentes/sobre/sobre.component';
import { ProjetosComponent } from './componentes/projetos/projetos.component';
import { ContatoComponent } from './componentes/contato/contato.component';

const routes: Routes =  [
  { path: '', component: ContentComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'projetos', component: ProjetosComponent },
  { path: 'contato', component: ContatoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
