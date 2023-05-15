const Supermercado = (props) => {
    return (
        <div>
            <h1>
                Supermercado (props.nome)
                (pros.children)
            </h1>
        </div>
    )
}

const Legume = ({nome}) => {
    return (
        <div>
            Legume {nome}
        </div>
    )
}

const Fruta = ({nome}) => {
    return (
        <div>
            Fruta {nome}
        </div>
    )
}

const Bebida = ({nome}) => {
    return (
        <div>
            Bebida {nome}
        </div>
    )
}

export default {Supermercado, Legume, Fruta, Bebida}