import React from 'react'
import { Link } from 'react-router-dom'

export const Error = () => {
    return (
        <>
            <h1>ERROR 404</h1>
            <strong>
                La pagina que buscas no exite
            </strong>
            <br/>
             <Link to="/">Clic..! Para Volver Al Inicio</Link>
        </>
    )
}
