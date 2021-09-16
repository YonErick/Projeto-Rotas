import React from 'react'

import './Titulo.css'

export default function Titulo(props) {
    return (
        <div className="Titulo">

            <h2> {props.texto} </h2>

        </div>
    )
}