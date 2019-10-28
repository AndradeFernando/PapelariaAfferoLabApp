import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-produto-edit',
  templateUrl: './produto-edit.component.html',
  styleUrls: ['./produto-edit.component.scss']
})
export class produtoEditComponent implements OnInit {

  produtoForm: FormGroup;
  id:string;
  nome:string='';
  codigoDeBarras:string='';
  descricao:string='';
  categoria:string='';
  quantidade:number=null;
  isLoadingResults = false;

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getproduto(this.route.snapshot.params['id']);
    this.produtoForm = this.formBuilder.group({
      'nome' : [null, Validators.required],
      'descricao' : [null, Validators.required],
      'codigoDeBarras' : [null, Validators.required],
      'categoria' : [null, Validators.required],
      'quantidade' : [null, Validators.required]
    });
  }

  getproduto(id) {
    this.api.getproduto(id).subscribe(data => {
      
      this.id = data.id;
      this.produtoForm.setValue({
        nome: data.nome,
        descricao: data.descricao,
        categoria: data.categoria,
        codigoDeBarras:data.codigoDeBarras,
        quantidade: data.quantidade
      });
    });
  }

  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    this.api.updateProduto(this.id, form)
      .subscribe(res => {
          let id = res['id'];
          this.isLoadingResults = false;
          this.router.navigate(['/produto-details', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

  produtoDetails() {
    this.router.navigate(['/produto-details', this.id]);
  }

}
