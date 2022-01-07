import { ProductService } from './../../components/product/shared/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/components/product/shared/product.model';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.scss']
})
export class ProductCrudComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.ler().subscribe(products => {
      this.products = products;
      console.log(products);
    });
  };
}
