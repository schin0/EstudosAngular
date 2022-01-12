import { HeaderService } from './../../components/product/shared/header.service';
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

  constructor(private productService: ProductService,
    private headerService: HeaderService) {
    headerService.headerData = {
      title: "Produtos",
      icon: "inventory_2",
      routeUrl: "/products"
    }
  }

  ngOnInit(): void {
    this.productService.ler().subscribe(products => {
      this.products = products;
    });
  };
}
