import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Pessoa } from '../models/pessoa';
import { PessoaService } from '../service/pessoa.service';

@Component({
  selector: 'app-novo-pessoa',
  templateUrl: './novo-pessoa.component.html',
  styleUrls: ['./novo-pessoa.component.css']
})
export class NovoPessoaComponent implements OnInit {

  nome: string = '';
  sobrenome: string = '';

  constructor(
    private pessoaService: PessoaService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const pessoa = new Pessoa(this.nome, this.sobrenome);
    this.pessoaService.save(pessoa).subscribe(
      data => {
        this.toastr.success('Pessoa criada', 'OK', {
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
