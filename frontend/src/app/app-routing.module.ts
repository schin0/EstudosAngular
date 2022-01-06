import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './views/inicio/inicio.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { SobreComponent } from './views/sobre/sobre.component';
import { CarrinhoComponent } from './views/carrinho/carrinho.component';
import { VendasComponent } from './views/vendas/vendas.component';
import { MeuPerfilComponent } from './views/meu-perfil/meu-perfil.component';
import { DevsComponent } from './views/desenvolvedores/devs/devs.component';

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
