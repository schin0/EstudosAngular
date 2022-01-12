import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './views/inicio/inicio.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { SobreComponent } from './views/sobre/sobre.component';
import { CarrinhoComponent } from './views/carrinho/carrinho.component';
import { VendasComponent } from './views/vendas/vendas.component';
import { MeuPerfilComponent } from './views/meu-perfil/meu-perfil.component';
import { DevsComponent } from './views/desenvolvedores/devs/devs.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductViewComponent } from './components/product/product-view/product-view.component';

const routes: Routes = [
  {
  path: "",
  component: InicioComponent
  }, 
  {
    path: "products",
    component: ProductCrudComponent
  },
  {
    path: "products/criar",
    component: ProductCreateComponent
  },
  {
    path: "products/editar/:id",
    component: ProductUpdateComponent
  },
  {
    path: "products/excluir/:id",
    component: ProductDeleteComponent
  },
  {
    path: "products/visualizar/:id",
    component: ProductViewComponent
  },
  {
    path: "perfil",
    component: MeuPerfilComponent
  },
  {
    path: "vendas",
    component: VendasComponent
  },
  {
    path: "carrinho",
    component: CarrinhoComponent
  },
  {
    path: "sobre",
    component: SobreComponent
  },
  {
    path: "devs",
    component: DevsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
