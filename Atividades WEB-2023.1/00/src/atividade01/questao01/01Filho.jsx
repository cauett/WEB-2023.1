const Filho = ({peso, altura}) => {

    const CalcularIMC = (peso, altura) => peso / (altura * altura)
    const IMC = CalcularIMC(peso, altura) 

    if (IMC < 18) {
        return ( 
        <h2>
            Abaixo do Peso
            <h3>
                IMC = {IMC}
            </h3>
        </h2> )
    }
    if (IMC > 25) {
        return ( 
        <h2>
            Acima do Peso
            <h3>
                IMC = {IMC}
            </h3>
        </h2> )
    }
    else { 
        return (
        <h2>
            Peso Ideal
            <h3>
                IMC = {IMC}
            </h3>
        </h2>
        )
    }
}

export default Filho;
