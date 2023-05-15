import Filho from "./01Filho"

const Pai = ({peso, altura}) => {
    return (
        <div>
            <Pai />
            <h1> Índice de Massa Corporal: </h1>
            <Filho peso = {peso = 90} altura = {altura = 1.8} />
        </div>
    )
}

export default Pai;