import React from 'react';

// images
import { pieceObject } from '../../images/index.js'

// styling
import './Board.css';

const PieceImg = props => {
    const { piece } = props
    return (
        piece ? 
            <img className="piece-img" src={pieceObject[piece]} alt="piece"/> 
                : <div></div> 
        );
}

export default PieceImg;
