export class Pessoa {
    id?: number;
    nome: string;
    sobrenome: string;

    constructor(nome: string, sobrenome: string){
        this.nome = nome;
        this.sobrenome = sobrenome; 
    }
}
