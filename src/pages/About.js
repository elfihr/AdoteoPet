import React from 'react'
import '../styles/About.css'
import video from '../assets/aboutVideo.mp4'
import adote from "../assets/adote.jpg"

const about = () => {
  return (
    <div className='about'>
      <div className='aboutTop'>
        <div className='aboutTopContainer'>
          <h1 className='title'>Sobre PetLover</h1>
          <p className='desciption'>A Fihr PetLover nasceu em 2019 e temos como missao dar um lar a todos os pet que nescessitam e fazemos as atividades:
            <br /><br />
            Resgate: uitos pets chegam às instituições por meio de resgates, entregues por tutores que não podem mais cuidar deles, ou através de parcerias com organizações de bem-estar animal.
            <br /><br />
            Cuidados Médicos: Antes de serem disponibilizados para adoção, os animais recebem cuidados médicos essenciais, incluindo vacinas, esterilização e tratamento para quaisquer condições de saúde.
            <br /><br />
            Socialização e Treinamento:Os animais passam por processos de socialização e, em alguns casos, treinamento básico para garantir que estejam prontos para viver em um novo lar.
            <br /> <br />
            Avaliação do Adotante: Realizamos uma avaliação dos potenciais adotantes para garantir que estão aptos a cuidar do pet, considerando fatores como estilo de vida, espaço disponível e experiência prévia com animais.
          </p>
        </div>
        <img src={adote} alt='Imagem PetLover' />
      </div>
      <div className='aboutBottom'>
        <div className='aboutVideo'>
          <video autoPlay muted loop>
            <source src={video} type='video/mp4'></source>
          </video>
        </div>
        <div>
        <h1 className='title'>Beneficios da Adoção</h1>
        <p className='desciption'>
          Descubra o amor incondicional e a alegria que só um amigo de quatro patas pode trazer. Adotar um animal é um gesto de compaixão que transforma a vida deles e a sua.

          <br />
          <b>Benefícios da Adoção:</b>
          <br /><br />
          Salva Vidas: Ao adotar, você dá uma segunda chance para um animal que, de outra forma, poderia não sobreviver.
          <br /><br />
          Companhia e Amor Incondicional: Animais adotados são eternamente gratos e proporcionam uma amizade verdadeira.
          <br /><br />
          Reduz o Estresse: Estudos comprovam que a presença de um animal de estimação reduz o estresse e melhora a saúde mental.
          <br /><br />
          Contribui para o Controle Populacional: Ao adotar, você ajuda a reduzir o número de animais nas ruas e nos abrigos.
        </p>
        </div>
      </div>

    </div>
  )
}

export default about