import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-meu-perfil',
  templateUrl: './meu-perfil.component.html',
  styleUrls: ['./meu-perfil.component.scss']
})
export class MeuPerfilComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegarAddProduto(): void {
    this.router.navigate(['/products/criar'])
  }

}
