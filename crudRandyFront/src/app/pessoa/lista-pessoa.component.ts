import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Pessoa } from '../models/pessoa';
import { PessoaService } from '../service/pessoa.service';

@Component({
  selector: 'app-lista-pessoa',
  templateUrl: './lista-pessoa.component.html',
  styleUrls: ['./lista-pessoa.component.css']
})
export class ListaPessoaComponent implements OnInit {

  pessoas: Pessoa[] = [];
  
  constructor(
    private pessoaService: PessoaService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router 
    ) { }

  ngOnInit(): void {
    this.carregarPessoas();
    
  }

  carregarPessoas(): void{
    this.pessoaService.lista().subscribe(
      data => {
        this.pessoas = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  excluir(id: any){
   if(confirm('Seguro quer excluir essa pessoa?')){
    this.pessoaService.delete(id).subscribe(
      data => {
        this.carregarPessoas();
        this.toastr.success('Pessoa excluida', 'OK', {
          timeOut: 3000,
        });
        this.router.navigate(['/']);
      },
      err => {
        this.toastr.error(err.error.mensagem, 'FAIL', {
          timeOut: 3000,
        });
        this.router.navigate(['/']);
      }  
     );
       
   }
   
  }
}
function id(id: any, any: any) {
  throw new Error('Function not implemented.');
}

