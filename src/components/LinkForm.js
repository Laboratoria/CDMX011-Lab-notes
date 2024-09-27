import React, { useState } from 'react';
import { GuardarNota } from '../dataBase/FireStore'


const LinkForm = () => {
const [estadoNotaTexto, setEstadoNotaTexto] = useState(''); 

const handleCambiarTexto = (e) =>{
    setEstadoNotaTexto(e.target.value)
    console.log(e.target.value);
    
}
    return(  
        <div>
            <textarea 
                onChange={handleCambiarTexto} 
                value ={estadoNotaTexto}
                name="description" 
                className="form-control" 
                placeholder="Escribe el contenido de tu nota"></textarea>

            <button type="submit"
                onClick={(e)=>{
                    GuardarNota(estadoNotaTexto)
                    console.log('hice clic')    
                }}>Guardar Nota</button>
        </div>             
            
        );
}
export default LinkForm;

//       <form onSubmit={(e) => e.preventDefault()}>         </form>