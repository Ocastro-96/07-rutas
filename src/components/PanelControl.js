import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export const PanelControl = () => {
    
    return (
        <div>
            <h1>Estas en el Panel de Control</h1>
            <br />
            <ul>
                <li>
                    <NavLink to="/panel/inicioPanel" >Inicio Panel</NavLink>
                </li>
                <li>
                    <NavLink to="/panel/crearPanel">Crear</NavLink>
                </li>
                <li>
                    <NavLink to="/panel/acercaPanel"> Acerca de</NavLink>
                </li>
                
                <li>
                    <NavLink to="/panel/gestionPanel">Gestion</NavLink>
                </li>
            </ul>
        {/* se van a ir cargando las subRutas de panel */}
        <div>
            <Outlet />
        </div>
        </div>
    )
}
