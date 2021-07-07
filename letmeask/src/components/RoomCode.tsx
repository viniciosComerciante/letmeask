import React from 'react'
import copyImg from '../assets/images/copy.svg';

import '../styles/room-code.scss'


export const RoomCode = () => {
    return (
        <button className="room-code">
            <div>
                <img src={copyImg} alt="Imagem do botão para copiar codigo da sala" />
            </div>
            <span>Sala #-MYSkaska$dksa</span>
        </button>
    )
}

