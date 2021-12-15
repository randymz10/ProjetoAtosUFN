import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListaPessoaComponent } from './pessoa/lista-pessoa.component';
import { DetalhePessoaComponent } from './pessoa/detalhe-pessoa.component';
import { NovoPessoaComponent } from './pessoa/novo-pessoa.component';
import { EditarPessoaComponent } from './pessoa/editar-pessoa.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//external
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    ListaPessoaComponent,
    DetalhePessoaComponent,
    NovoPessoaComponent,
    EditarPessoaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
