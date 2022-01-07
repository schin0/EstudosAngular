import { MensagemService } from './../shared/mensagem.service';
import { ProductService } from './../shared/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  constructor(private productService: ProductService,
    private mensagemService: MensagemService,
    private router: Router) { }

  ngOnInit(): void {
  }

  product: Product = {
    name: '',
    price: 0
  }

  criarProduto(): void {
    this.productService.criar(this.product).subscribe(() => {
      this.mensagemService.mostrar('Produto cadastrado com sucesso!');
      this.router.navigate(['/perfil']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/perfil']);
  }
}
