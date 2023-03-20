import './sty.css';
import image from "./me.jpg"

const MeusDados = (props) => 
{
    return (
        <div>
            <h1 className = "sty" > {props.nome} </h1>
            <h1 className = "sty" > {props.curso} </h1>
            <h1 className = "sty" > Universidade Federal do Ceará - UFC </h1>
            <img src = {image} alt = 'besties'/>
        </div>
    )
}

export default MeusDados