import { HeaderService } from './../../components/product/shared/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {

  constructor(private headerService: HeaderService) {
    headerService.headerData = {
      title: "Carrinho de compras",
      icon: "shopping_cart",
      routeUrl: "/carrinho"
    }
  }

  ngOnInit(): void {
  }

}
