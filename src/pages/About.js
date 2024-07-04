import React from 'react'
import '../styles/About.css'

const about = () => {
  return (
    <div className='about'>
      <div className='aboutTop'></div>
      <div className='aboutBottom'>
        <h1>Sobre Adoção</h1>
        <p>
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
  )
}

export default about