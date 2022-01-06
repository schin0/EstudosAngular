import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Componentes:
import { HeaderComponent } from './components/template/header/header.component';
import { NavComponent } from './components/template/nav/nav.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { InicioComponent } from './views/inicio/inicio.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { DevsComponent } from './views/desenvolvedores/devs/devs.component';
import { DiretivaAtributoDirective } from './diretivas/diretiva-atributo.directive';
import { DiretivaEstruturalDirective } from './diretivas/diretiva-estrutural.directive';

// Material:
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MeuPerfilComponent } from './views/meu-perfil/meu-perfil.component';
import { SobreComponent } from './views/sobre/sobre.component';
import { CarrinhoComponent } from './views/carrinho/carrinho.component';
import { VendasComponent } from './views/vendas/vendas.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    InicioComponent,
    ProductCrudComponent,
    DevsComponent,
    DiretivaAtributoDirective,
    DiretivaEstruturalDirective,
    MeuPerfilComponent,
    SobreComponent,
    CarrinhoComponent,
    VendasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
