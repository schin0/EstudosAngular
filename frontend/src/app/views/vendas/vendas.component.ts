import { ProductService } from './../../components/product/shared/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/components/product/shared/product.model';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.scss']
})
export class VendasComponent implements OnInit {

  products: Product[] = [];
  displayedColumns = ['id', 'name', 'price', 'date', 'qtdVendas', 'view']

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.ler().subscribe(products => {
      this.products = products;
    });
  }

}
