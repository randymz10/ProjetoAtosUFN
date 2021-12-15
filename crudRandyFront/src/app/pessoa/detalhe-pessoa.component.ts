import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Pessoa } from '../models/pessoa';
import { PessoaService } from '../service/pessoa.service';

@Component({
  selector: 'app-detalhe-pessoa',
  templateUrl: './detalhe-pessoa.component.html',
  styleUrls: ['./detalhe-pessoa.component.css']
})
export class DetalhePessoaComponent implements OnInit {

  pessoa: Pessoa = new Pessoa(" ", " ");

  constructor(
    private pessoaService: PessoaService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.pessoaService.detail(id).subscribe(
      data => {
        this.pessoa = data;
      },
      err => {
        this.toastr.error(err.error.mensagem, 'FAIL', {
          timeOut: 3000,
        });
        this.voltar();
      }
    );
  }

  voltar(): void{
    this.router.navigate(['/']);
  }
}
