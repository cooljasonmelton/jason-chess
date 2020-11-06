import React from 'react';

// images
import { pieceObject } from '../../images/index.js'

// styling
import './Board.css';

const PieceImg = props => {
    const { piece } = props

    // av move sq
    if (piece === "av") return <div className="av-move"></div>

    // cp capture sq
    if (piece && (piece.substring(2,4) === "cp")) return <div className="av-move"></div>

    // return piece image or empty div
    return (
        piece ? 
            <img className="piece-img" src={pieceObject[piece]} alt="piece"/> 
                : <div></div> 
    );
}

export default PieceImg;
