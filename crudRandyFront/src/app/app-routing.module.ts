import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPessoaComponent } from './pessoa/lista-pessoa.component';
import { DetalhePessoaComponent } from './pessoa/detalhe-pessoa.component';
import { NovoPessoaComponent } from './pessoa/novo-pessoa.component';
import { EditarPessoaComponent } from './pessoa/editar-pessoa.component';

const routes: Routes = [
  {path: '', component: ListaPessoaComponent},
  {path: 'detalhe/:id', component: DetalhePessoaComponent},
  {path: 'novo', component: NovoPessoaComponent},
  {path: 'editar/:id', component: EditarPessoaComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
