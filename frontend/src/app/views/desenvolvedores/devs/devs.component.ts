import { HeaderService } from './../../../components/product/shared/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devs',
  templateUrl: './devs.component.html',
  styleUrls: ['./devs.component.scss']
})
export class DevsComponent implements OnInit {

  constructor(private headerService: HeaderService) {
    headerService.headerData = {
      title: "Desenvolvedores",
      icon: "computer",
      routeUrl: "/devs"
    }
}

  ngOnInit(): void {
  }

}
