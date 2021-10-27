import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { auth, google } from '../firebase/config';
import '../index.css';

const SignUp = () => {
    const [email, setEmail] = useState ('')
    const [pass, setPass] = useState('')
    const history = useHistory();

    const registerUser = (e) =>{
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email,pass)
        .then((res) => {
            history.push('/wallnotes')
            alert('Usuario Registrado')
        })
        .catch((err) => console.log(err))
    }

    const [user,setUser] = useState('')
    const registerGoogle =(e) => {
        auth.signInWithPopup(google)
        .then(respuesta => {
            history.push('/wallnotes')
            setUser(respuesta.user)
        })
            .catch(err => {
                console.log(err)
            })
    }

return(
    <div className="signUpContainer">
        <form  onSubmit={registerUser} className="formSignup">
            <div className='boxcontainer'>
            <h3>SignUp</h3>
        <input  onChange={(e) => {setEmail(e.target.value)}} type="email" placeholder="Email" className="emailSignUp"/><br/>
        <input  onChange={(e) => {setPass(e.target.value)}} type="password" placeholder="Password" className="passSign"/><br/>
        <input type="password" placeholder="Confirm Password" /><br/>
        <button>Submit</button>
            </div>
            <div>
            <p>OR</p>
        <button onClick={registerGoogle}>Continue with Google</button>
        <p className="text-link">Are you already registred? <Link to="/">Login</Link></p>
            </div>
        </form>
    </div>
);
}
export default SignUp