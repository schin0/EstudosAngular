import { HeaderService } from './../../components/product/shared/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-meu-perfil',
  templateUrl: './meu-perfil.component.html',
  styleUrls: ['./meu-perfil.component.scss']
})
export class MeuPerfilComponent implements OnInit {

  constructor(private router: Router,
    private headerService: HeaderService) {
      headerService.headerData = {
        title: "Meu perfil",
        icon: "account_circle",
        routeUrl: "/perfil"
      }
    }


  ngOnInit(): void {
  }

  navegarAddProduto(): void {
    this.router.navigate(['/products/criar'])
  }

}
