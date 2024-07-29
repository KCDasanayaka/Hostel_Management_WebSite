import React,{useState} from "react";
import './Signup.css';
import logo from '../assets/susl_logo_transparent1.png';
import NavBar from "./Components/NavBar";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    const handleSignupClick = () => {
        navigate("/Pages/Login");
    }

    const [user,setUser] = useState("");
    const [email,setEmail] = useState("");
    const [pass1,serPass1] = useState("");
    const [pass2,setPass2] = useState("");
    const [error, setError] = useState("");

    const handleInputChange = (e, type) => {
        switch(type){
            case "user":
                setError("");
                setUser(e.target.value);
                if(e.target.value === ""){
                    setError("username has left blank");
                }
                break;
            case "email":
                setError("");
                setUser(e.target.value);
                if(e.target.value === ""){
                    setError("email has left blank");
                }
                break;
            case "pass1":
                setError("");
                setUser(e.target.value);
                if(e.target.value === ""){
                    setError("confirm password has left blank");
                }
                break;  
            case "pass2":
                setError("");
                setUser(e.target.value);
                if(e.target.value === ""){
                    setError("confirm password does not match");
                }
                break;  
            default:    
        }
    }

    return (
        <div>
            <div className="login">
                <NavBar />
                <div className="homeContent" style={{padding:'5%'}}>
                    <div className="homeTop">
                        <img src={logo} alt="SUSL Logo" />
                    </div>
                    <div className="loginCenter">
                        <h1>Create an Account</h1>
                        <div className="signupForm">
                            <div className="loginFormLabel">
                            <div className="signUpPassword">
                                <label>Username</label>
                                <input 
                                    className="loginInput" 
                                    placeholder="enter your username"
                                    type="text"
                                    name="user"
                                    value={user} 
                                    onChange={(e) => handleInputChange(e, "user")}/>
                            </div>
                            <div className="signUpPassword">
                                <label>Email</label>
                                <input 
                                    className="loginInput" 
                                    placeholder="enter your email"
                                    type="email"
                                    name="email"
                                    value={email} 
                                    onChange={(e) => handleInputChange(e, "email")}/>
                            </div>
                            </div>
                            <div className="loginFormLabel1">
                            <div className="signUpPassword">
                                <label>Password</label>
                                <input 
                                    className="loginInput" 
                                    placeholder="enter your password" 
                                    type="password" 
                                    name="pass1"
                                    value={pass1}
                                    onChange={(e) => handleInputChange(e, "pass1")}/>
                            </div>
                            <div className="signUpPassword">
                                <label>Confirm Password</label>
                                <input
                                 className="loginInput"
                                 placeholder="confirm your password" 
                                 type="password"
                                 name="pass2"
                                 value={pass2}
                                 onChange={(e) => handleInputChange(e, "pass2")} />
                            </div>
                            </div>
                            <label>
                            Or Already have an account, Login <span onClick={handleSignupClick}>here</span>
                            </label>
                            <button className="login_home">
                            Sign Up
                            </button>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
