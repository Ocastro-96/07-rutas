import React from 'react'
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { Inicio } from '../components/Inicio';
import { Contacto } from '../components/Contacto';
import { Articulos } from '../components/Articulos';
import { Error } from '../components/Error';
import { Persona } from '../components/Persona';
import { PanelControl } from '../components/PanelControl';
import { InicioPanel } from '../components/panel/InicioPanel';
import { Acerca } from '../components/panel/Acerca';
import { CrearPanel } from '../components/panel/CrearPanel';
import { GestionPanel } from '../components/panel/GestionPanel';
export const RouterPrincipal = () => {

    return (
        // El BrowserRoute Siempre debe encerrar todo el componente de etiquetado HTML
        <BrowserRouter>
            <h1>practicando Con Rutas</h1>
            <br />
            <hr />
            <nav>
                <ul>
                    <li>
                        <NavLink to="/inicio" className={({ isActive }) => isActive ? "activado" : ""}>
                            Inicio
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/contacto" className={({ isActive }) => isActive ? "activado" : ""}>
                            Contacto
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/articulos" className={({ isActive }) => isActive ? "activado" : ""}>
                            Articulos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/panel" className={({ isActive }) => isActive ? "activado" : ""}>
                            PanelControl
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <br />
            <hr />

            <section className='contenido-principal'>
                {/* Aca se cargan los componentes que coinciden con el path */}
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/inicio" element={<Inicio />} />
                    <Route path="contacto" element={<Contacto />} />
                    <Route path="/articulos" element={<Articulos />} />

                    {/* Forma de pasar valores por la url y ser recibidos en cualquier componente */}
                    <Route path="/persona/:nombre/:apellido" element={<Persona />} />
                    <Route path="/persona/:nombre" element={<Persona />} />
                    <Route path="/persona" element={<Persona />} />
                    <Route path="*" element={<Navigate to="/persona/oscar"/>}/>
                    
                    <Route path="/panel/*" element={<PanelControl/>}>
                            <Route index element={<InicioPanel/>} />
                            <Route path="inicioPanel" element={<InicioPanel/>} />
                            <Route path="crearPanel" element={<CrearPanel/>} />
                            <Route path="acercaPanel" element={<Acerca/>} />
                            <Route path="gestionPanel" element={<GestionPanel/>}/>
                    </Route>
                    
                    <Route path="*" element={<Error />} />
                </Routes>
            </section>
        </BrowserRouter>
    )
}
