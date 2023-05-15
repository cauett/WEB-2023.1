import './sty.css';
import image from "./me.jpg"
import meme from "./meme.gif"
import useSound from 'use-sound';
import mySound from './antihero.mp3';
document.body.style = 'background: violet;'; 

const MeusDados = (props) => 
{
        const [playSound] = useSound(mySound)
        return (
            <div>
                <h1 className = "sty" > {props.nome} </h1>
                <h1 className = "sty" > {props.curso} </h1>
                <h1 className = "sty" > {props.universidade} </h1>

                <div className = 'image-container'>
                    <img src = {image} alt = 'cuet'/>
                </div> 

                <button className = "stype" onClick={() => playSound()}>
                    Play sound
                </button>

                <div className = 'image-container'>
                    <img src = {meme} alt = 'so nos compiuter'/>
                </div> 

                <h1> #programei💅 </h1>

            </div>
        )
}

export default MeusDados