import { useState } from "react";
import { createUser, gmailAuth } from "../firebase/auth";
import { Link, useHistory } from "react-router-dom"
import google from "../img/google.png"
import "./styles/forms.css"
function Register (){
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const history =  useHistory();
    const handleRegister= (e)=>{
        e.preventDefault();
        console.log('Te has registrado')
        if(password === confirmPassword){
            console.log(email)
            createUser(email,password)
            .then(() => {
                // Signed in
               history.push('/home')
                console.log('usuario registrado');
                // ...
              })
        }
    }
    const handleGmail= (e) =>{
        e.preventDefault()
        gmailAuth()
        .then(() => {
            history.push('/home')
            console.log('Logeado con Gmail')

        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = error.credential;
      
            console.log(errorCode, errorMessage, email, credential);
          });
    }
    return (
        <div className="first-body">
        <form className="form-container">
            <h1 className="form-header">REGISTRATE</h1>
            <input placeholder="Ingresa tu nombre" />
            <br/>
            <input onChange={(e) =>{ setEmail(e.target.value)} }
            type="email" placeholder="Ingresa tu correo electrónico" />
            <br/>
            <input onChange={(e) =>{ setPassword(e.target.value)} }
            type="password" placeholder="Crea una contraseña"  />
            <br/>
            <input onChange={(e) =>{ setConfirmPassword(e.target.value)} }
            type="password" placeholder="Confirmar contraseña"  />
            <br/>
            <input onClick={handleRegister}
            type="submit" className="btn-form" value="REGISTRAR"/>
            <button onClick= {handleGmail}
            className="g-btn-form">CONTINUAR CON <img src={google} alt="google-icon" className="icon-g"/></button>
            <br/>
            <p className="text-link">¿Ya tienes una cuenta?
               <Link to="/"> Inicia Sesión</Link> 
            </p>
          </form>
    </div>)
}
export default Register