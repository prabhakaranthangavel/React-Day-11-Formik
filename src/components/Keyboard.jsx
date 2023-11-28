import React, {useState} from 'react'
import '../styles/Keyboard.css'
import '../styles/LetterGrid.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';

function Keyboard() {

    const [squares, setSquares] = useState(Array(28).fill(''));

  return (

    <div className="keyboardGrid">

      <div className="row">
        <button className="rectangle"> { <b>Q</b> } </button>
        <button className="rectangle"> { <b>W</b> } </button>
        <button className="rectangle"> { <b>E</b> } </button>
        <button className="rectangle"> { <b>R</b> } </button>
        <button className="rectangle"> { <b>T</b> } </button>
        <button className="rectangle"> { <b>Y</b> } </button>
        <button className="rectangle"> { <b>U</b> } </button>
        <button className="rectangle"> { <b>I</b> } </button>
        <button className="rectangle"> { <b>O</b> } </button>
        <button className="rectangle"> { <b>P</b> } </button>
      </div>
      

      <div className="row">
        <button className="rectangle"> { <b>A</b> } </button>
        <button className="rectangle"> { <b>S</b> } </button>  
        <button className="rectangle"> { <b>D</b> } </button>
        <button className="rectangle"> { <b>F</b> } </button>
        <button className="rectangle"> { <b>G</b> } </button>
        <button className="rectangle"> { <b>H</b> } </button>
        <button className="rectangle"> { <b>J</b> } </button>
        <button className="rectangle"> { <b>K</b> } </button>
        <button className="rectangle"> { <b>L</b> } </button>
      </div>

      <div className="row">
        <button className="square"> { <b>ENTER</b>  } </button>
        <button className="rectangle"> { <b>Z</b> } </button>
        <button className="rectangle"> { <b>X</b> } </button>
        <button className="rectangle"> { <b>Q</b> } </button>
        <button className="rectangle"> { <b>Q</b> } </button>
        <button className="rectangle"> { <b>Q</b> } </button>
        <button className="rectangle"> { <b>Q</b> } </button>
        <button className="rectangle"> { <b>Q</b> } </button>
        <button className="square"> <FontAwesomeIcon icon={faDeleteLeft} size='2xl' /></button>
      </div>

    </div> 
  );
 
}

export default Keyboard