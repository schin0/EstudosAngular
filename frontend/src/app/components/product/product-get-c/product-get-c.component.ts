import { MensagemService } from './../shared/mensagem.service';
import { ProductBancocService } from './../shared/product-bancoc.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-product-get-c',
  templateUrl: './product-get-c.component.html',
  styleUrls: ['./product-get-c.component.scss']
})
export class ProductGetCComponent implements OnInit {

  produtos: Array<Product> = [];

  product: Product = {
    name: '',
    price: 0,
    urlImg: '',
    descricaoImg: '',
    descricaoProduto: ''
  }

  constructor(private produtosService: ProductBancocService,
    private mensagemService: MensagemService) { }

  ngOnInit(): void {
    this.produtosService.listarProdutos()
      .subscribe(produtos => this.produtos = produtos);
  }

  // criarProduto(): void {
  //   console.log(this.product);
  //   this.produtosService.addProduto(this.product).subscribe(() => {
  //     this.mensagemService.mostrar('Produto cadastrado com sucesso com o C#!');
  //   });
  //   console.log(this.produtos);
  // }
}
