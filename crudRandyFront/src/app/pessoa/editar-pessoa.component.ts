import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Pessoa } from '../models/pessoa';
import { PessoaService } from '../service/pessoa.service';

@Component({
  selector: 'app-editar-pessoa',
  templateUrl: './editar-pessoa.component.html',
  styleUrls: ['./editar-pessoa.component.css']
})
export class EditarPessoaComponent implements OnInit {

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
        this.router.navigate(['/']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.pessoaService.update(id, this.pessoa).subscribe(
      data => {
        this.toastr.success('Pessoa atualizada', 'OK', {
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
