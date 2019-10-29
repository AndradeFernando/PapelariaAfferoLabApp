import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { produto } from '../models/produto';

@Component({
  selector: 'app-produto-detail',
  templateUrl: './produto-detail.component.html',
  styleUrls: ['./produto-detail.component.scss']
})
export class produtoDetailComponent implements OnInit {

  produto: produto = { id: '', nome: '', descricao: '', categoria: null, codigoDeBarras: '',quantidade: null, atualizacao: null, criacao:null };
  isLoadingResults = true;

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    this.getprodutoDetails(this.route.snapshot.params['id']);
  }

  getprodutoDetails(id) {
    this.api.getproduto(id)
      .subscribe(data => {
        this.produto = data;
        console.log(this.produto);
        this.isLoadingResults = false;
      });
  }

  deleteProduto(id) {
    this.isLoadingResults = true;
    this.api.deleteProduto(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/produtos']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

}
