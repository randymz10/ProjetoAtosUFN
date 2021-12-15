package com.crud.CrudRandy.service;


import com.crud.CrudRandy.entity.Pessoa;
import com.crud.CrudRandy.repository.PessoaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class PessoaService {

    @Autowired
    PessoaRepository pessoaRepository;

    public List<Pessoa> list(){
        return pessoaRepository.findAll();
    }

    public Optional<Pessoa> getOne(int id){
        return pessoaRepository.findById(id);
    }

    public Optional<Pessoa> getByNome(String nome){
        return pessoaRepository.findByNome(nome);
    }

    public void save(Pessoa pessoa){
        pessoaRepository.save(pessoa);
    }

    public void delete(int id){
        pessoaRepository.deleteById(id);
    }

    public boolean exitsById(int id){
        return pessoaRepository.existsById(id);
    }

    public boolean exitsByNome(String nome){
        return pessoaRepository.existsByNome(nome);
    }
}
