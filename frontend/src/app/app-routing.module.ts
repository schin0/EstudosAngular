import { DevsComponent } from './views/desenvolvedores/devs/devs.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './views/inicio/inicio.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';

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
    path: "devs",
    component: DevsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
