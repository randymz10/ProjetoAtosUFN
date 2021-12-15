package com.crud.CrudRandy.repository;

import com.crud.CrudRandy.entity.Pessoa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PessoaRepository extends JpaRepository<Pessoa, Integer>{
    Optional<Pessoa> findByNome(String nome);

    boolean existsByNome(String nome);

}