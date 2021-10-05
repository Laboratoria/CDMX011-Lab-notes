import React, {useState} from "react";
import logo from "../../assets/logoColor.png";
// import { Link } from "react-router-dom";
import "../../Styles/SignUp.css";
import "../../Styles/App.css";
import { useHistory } from "react-router";
import { useAuth } from "../../context/AuthContext";


const SignUp = () => {

  const { register} = useAuth();
  const [ error, setError] = useState("");
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleConfirmPassword = (e)=> setConfirmPassword(e.target.value)

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setTimeout(() => setError(''), 1500);
    } else {
      try {
        await register(email, password);
        history.push('/Home');
      } catch (error) {
        setError('Wrong Credentials');
        setTimeout(() => setError(''), 1500);
      }
    }
   }
  return (
<div>
    <div className="containerSignUp">
      <div className="logo">
        {/* <Link to="/"> */}
        <img src={logo} alt="logoMyNote" />
        {/* </Link> */}
      </div>
      <div className="signUp-content">
        <form onSubmit={handleSubmit} className="form">
          <input type="email" placeholder="Email" onChange={handleEmail} />
          <input type="password" placeholder="Password" onChange={handlePassword} />
          <input type="password" placeholder="Confirm Password" onChange={handleConfirmPassword} />
          {error && <p className='error' >{error}</p>}
          <button>SignUp</button>
        </form>
      </div>
    </div>
    <div>
    <div className="footer">
        <p>
          Copyright - All rights reserved - Created by Ana Karina Dávila Dávila
        </p>
      </div>
    </div>
    </div>
  );
};
export default SignUp;
