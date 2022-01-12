import { MensagemService } from './../shared/mensagem.service';
import { Product } from './../shared/product.model';
import { ProductService } from './../shared/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {

  product: Product = { name: '', price: 0 };
  id: number = 0;

  constructor(private productService: ProductService,
    private mensagem: MensagemService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.productService.lerPeloId(this.id).subscribe(product => {
      this.product = product;
    });
  }

  updateProduto(): void {
    this.productService.editar(this.id, this.product).subscribe(() => {
      this.mensagem.mostrar('Produto editado com sucesso!');
      this.router.navigate(['/products']);
    })
  }

  cancelar(): void {
    this.router.navigate(['/products']);
  }
}
