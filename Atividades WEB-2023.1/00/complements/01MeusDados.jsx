import './sty.css';
/*import React from "react";*/
import image from "./me.jpg"

/*function MeusDados()
{
        return (
            <div>
                <h1 className = "sty" > Carlos Cauet Ferreira Costa </h1>
                <h1 className = "sty" > Sistemas de Informação</h1>
                <h1 className = "sty" > Universidade Federal do Ceará - UFC </h1>
            </div>
        )
    }
*/

const MeusDados = () => 
{
    return (
        <div>
            <h1 className = "sty" > Carlos Cauet Ferreira Costa </h1>
            <h1 className = "sty" > Sistemas de Informação </h1>
            <h1 className = "sty" > Universidade Federal do Ceará - UFC </h1>
            <img src = {image} alt = 'besties'/>
        </div>
    )
}

/*const MeusDados = () =>
{
    <div>
        <h1 className = "sty" > Carlos Cauet Ferreira Costa </h1>
        <h1 className = "sty" > Sistemas de Informação </h1>
        <h1 className = "sty" > Universidade Federal do Ceará - UFC </h1>
    </div>
}
*/

/*class MeusDados extends React.Component {
    render() {
        return (
            <div>
                <h1 className = "sty" > Carlos Cauet Ferreira Costa </h1>
                <h1 className = "sty"> Sistemas de Informação </h1>
                <h1 className = "sty"> Universidade Federal do Ceará - UFC </h1>
                <img src = {image} alt = 'besties'/>
            </div>
        )
    }
}
*/

export default MeusDados;

