package com.crud.CrudRandy.controller;

import com.crud.CrudRandy.dto.Mensagem;
import com.crud.CrudRandy.dto.PessoaDto;
import com.crud.CrudRandy.entity.Pessoa;
import com.crud.CrudRandy.service.PessoaService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pessoa")
@CrossOrigin(origins = "http://localhost:4200")
public class PessoaController {

    @Autowired
    PessoaService pessoaService;

    @GetMapping("/lista")
    public ResponseEntity<List<Pessoa>> list(){
        List<Pessoa> list = pessoaService.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }

    @GetMapping("/detail/{id}")
    public ResponseEntity<Pessoa> getById(@PathVariable("id") int id){
        if (!pessoaService.exitsById(id))
            return new ResponseEntity(new Mensagem("Nao existe"), HttpStatus.NOT_FOUND);
        Pessoa pessoa = pessoaService.getOne(id).get();
        return new ResponseEntity(pessoa, HttpStatus.OK);
    }

    @GetMapping("/detailName/{nome}")
    public ResponseEntity<Pessoa> getByNome(@PathVariable("nome") String nome){
        if (!pessoaService.exitsByNome(nome))
            return new ResponseEntity(new Mensagem("Nao existe"), HttpStatus.NOT_FOUND);
        Pessoa pessoa = pessoaService.getByNome(nome).get();
        return new ResponseEntity(pessoa, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody PessoaDto pessoaDto){
        if (StringUtils.isBlank(pessoaDto.getNome()))
            return new ResponseEntity(new Mensagem("O nome e obrigatorio"), HttpStatus.BAD_REQUEST);
        if (StringUtils.isBlank(pessoaDto.getSobrenome()))
            return new ResponseEntity(new Mensagem("O sobrenome e obrigatorio"), HttpStatus.BAD_REQUEST);
        if(pessoaService.exitsByNome(pessoaDto.getNome()))
            return new ResponseEntity(new Mensagem("Esse nome existe"), HttpStatus.BAD_REQUEST);
        Pessoa pessoa = new Pessoa(pessoaDto.getNome(), pessoaDto.getSobrenome());
        pessoaService.save(pessoa);
        return new ResponseEntity(new Mensagem("Pessoa criada"), HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody PessoaDto pessoaDto){
        if (!pessoaService.exitsById(id))
            return new ResponseEntity(new Mensagem("Nao existe"), HttpStatus.NOT_FOUND);
        if (StringUtils.isBlank(pessoaDto.getNome()))
            return new ResponseEntity(new Mensagem("O nome e obrigatorio"), HttpStatus.BAD_REQUEST);
        if (StringUtils.isBlank(pessoaDto.getSobrenome()))
            return new ResponseEntity(new Mensagem("O sobrenome e obrigatorio"), HttpStatus.BAD_REQUEST);
        if(pessoaService.exitsByNome(pessoaDto.getNome()))
            return new ResponseEntity(new Mensagem("Esse nome existe"), HttpStatus.BAD_REQUEST);
        Pessoa pessoa = pessoaService.getOne(id).get();
        pessoa.setNome(pessoaDto.getNome());
        pessoa.setSobrenome(pessoaDto.getSobrenome());
        pessoaService.save(pessoa);
        return new ResponseEntity(new Mensagem("Pessoa Atualizada"), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id){
        if (!pessoaService.exitsById(id))
            return new ResponseEntity(new Mensagem("Nao existe"), HttpStatus.NOT_FOUND);
        pessoaService.delete(id);
        return new ResponseEntity(new Mensagem("Pessoa Excluida"), HttpStatus.OK);
    }
}
