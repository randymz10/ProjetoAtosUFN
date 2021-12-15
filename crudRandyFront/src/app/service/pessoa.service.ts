import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from '../models/pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  pessoaURL = 'http://localhost:8080/pessoa/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Pessoa[]>{
    return this.httpClient.get<Pessoa[]>(this.pessoaURL + 'lista')
  }

  public detail(id: number): Observable<Pessoa>{
    return this.httpClient.get<Pessoa>(this.pessoaURL + `detail/${id}`)
  }

  public detailName(nome: string): Observable<Pessoa>{
    return this.httpClient.get<Pessoa>(this.pessoaURL + `detail/${nome}`)
  }

  public save(pessoa: Pessoa): Observable<any>{
   return this.httpClient.post<any>(this.pessoaURL + 'create', pessoa);
  }

  public update(id: number, pessoa: Pessoa): Observable<any>{
    return this.httpClient.put<any>(this.pessoaURL + `update/${id}`, pessoa);
   }

   public delete(id: number): Observable<any>{
     return this.httpClient.delete<any>(this.pessoaURL + `delete/${id}`);
   }
}
