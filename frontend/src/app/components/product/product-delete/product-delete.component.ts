import { MensagemService } from './../shared/mensagem.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../shared/product.service';
import { Product } from './../shared/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.scss']
})
export class ProductDeleteComponent implements OnInit {

  product: Product = { name: '', price: 0.0, urlImg: '', descricaoImg: '', descricaoProduto: '' };
  id: string = '';

  constructor(
    private productService: ProductService,
    private mensagem: MensagemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.productService.lerPeloId(`${this.id}`).subscribe(product => {
      this.product = product;
    });
  }

  deleteProduto(): void {
    this.productService.excluir(`${this.id}`).subscribe(() => {
      this.mensagem.mostrar('Produto excluído com sucesso!');
      this.router.navigate(['/products']);
    })
  }

  cancelar(): void {
    this.router.navigate(['/products']);
  }
}
