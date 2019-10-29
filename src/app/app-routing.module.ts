import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { produtosComponent } from './produtos/produtos.component';
import { produtoDetailComponent } from './produto-detail/produto-detail.component';
import { produtoAddComponent } from './produto-add/produto-add.component';
import { produtoEditComponent } from './produto-edit/produto-edit.component';

const routes: Routes = [
  {
    path: 'produtos',
    component: produtosComponent,
    data: { title: 'Lista de Produtos' }
  },
  {
    path: 'produto-details/:id',
    component: produtoDetailComponent,
    data: { title: 'Detalhes do Produto' }
  },
  {
    path: 'produto-add',
    component: produtoAddComponent,
    data: { title: 'Adicionar Produto' }
  },
  {
    path: 'produto-edit/:id',
    component: produtoEditComponent,
    data: { title: 'Editar Produto' }
  },
  { path: '',
    redirectTo: '/produtos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
