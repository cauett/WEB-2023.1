import React from 'react'
import {useEffect, useState} from 'react';

const Questao01B = ({alunos, Media}) => {

    //Calcula a média dos alunos
    useEffect(() => {
        const tiragem = alunos.map(aluno => (aluno.notas.ap1 + aluno.notas.ap2) / 2)

        //Chama a função média, e passa o vetor de médias
        Media(tiragem)},   

    [alunos, Media])

    return null;
}

const Questao01A = () => {
  const alunos = [
    {nome: "Sicrano", notas: {ap1: 8.4, ap2: 5.4}},
    {nome: "Fulano", notas: {ap1: 6.7, ap2: 3.5}},
    {nome: "Beltrano", notas: {ap1: 7.3, ap2: 9.2}}
  ];

  const [medias, defineMedias] = useState([]);


  //É chamada após ter o vetor de medias atualizado
  const mudancaMedia = (mediasNovas) => {
    defineMedias(mediasNovas);
  };


  //Define que os alunos iguais ou acima de 6 estão aprovados, os filtrando
  const Aprovados = alunos.filter((aluno, index) => medias[index] >= 6.0);


  //Imprime os alunos aprovados
  return (
    <div>
      <h1> Questão 1 </h1>
      <Questao01B alunos = {alunos} Media = {mudancaMedia} />

      <h2> Alunos Aprovados: </h2>

      <h2> {Aprovados.map((aluno) => (
          <h2 key = {aluno.nome}> {aluno.nome} </h2>
        ))}
        </h2>
    </div>
  );
};

export default Questao01A;