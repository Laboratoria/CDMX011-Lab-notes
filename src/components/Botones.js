import React from 'react';
import imagenSalir from "../assets/botonSalir.png"
class Botones extends React.Component{
    render(){
        return (
        <div className="herramientas">
                <img src={imagenSalir} className="botones" />
            
            </div>
        );            
    }
}

export default Botones;