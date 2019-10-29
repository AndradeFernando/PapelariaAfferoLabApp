import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { produto } from '../models/produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class produtosComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'descricao','quantidade'];
  data: produto[] = [];
  isLoadingResults = true;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getProdutos()
      .subscribe(res => {
        this.data = res;
        console.log(this.data);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
