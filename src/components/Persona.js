import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

export const Persona = () => {
    // Forma de recibir parametros de la url y mostralos en nuestro componente
    const { nombre, apellido } = useParams();
    const navegar= useNavigate();

    /*valores por defecto
    const {nombre="oscar", apellido="castro"} = useParams();
    */

    const enviar = (e) => {
        e.preventDefault();
        let nombre= e.target.nombre.value;
        let apellido=  e.target.apellido.value;
        let url = `/persona/${nombre}/${apellido}`;
      if(nombre.length <= 0 && apellido.length <= 0){
        navegar("/inicio");
      }else if(nombre == "contacto"){
        navegar("/contacto")
      }else{
        navegar(url);
      }
      
        navegar(url);
    }
    return (
        <div>
            {!nombre && 
                <h1>No hay PERSONAS para mostrar</h1>
                }
            {nombre && 
                <h1>Pagina de la Persona: {nombre} {apellido}</h1>
            }
            <h3>
                Estas Navegando en el apartado de PERONAS
            </h3>

            <form onSubmit={enviar}>
                <input type="text" name='nombre' />
                <input type="text" name='apellido' />
                <input type="submit" name='enviar' value="enviar" />
            </form>

            <Link to="/">Clic! Para ir al INICIO</Link>
        </div>
    )
}
