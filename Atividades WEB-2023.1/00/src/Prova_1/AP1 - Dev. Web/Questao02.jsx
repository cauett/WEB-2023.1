import {useRef, useState} from 'react';
import frente from './front_goth.png'
import costas from './back_goth.png'

function DefineImagem() {

    //Define o estado inicial como true, tornando a imagem frontal a inicial
    const [defFrente, setFrente] = useState(true)
    const imgCont = useRef(null)


    //Inverte os estados, fazendo com que as imagens alternem entre si (ou seja, frente e costas do pokémon)
    const contClicks = () => {
        setFrente(!defFrente)
    }

    //Aqui um botão é criado com o texto "alterna imagem" para que ao ser clicado as imagens alternem entre si
    return (
        <div>
            <button onClick = {contClicks}> Alterna Imagem </button>
                <img
                    cont = {imgCont}
                    src = {defFrente ? frente : costas}
                    altera = 'Imagem'
                />
        </div>
    )
}

export default DefineImagem