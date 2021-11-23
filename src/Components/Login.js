import React from "react";
import { Container } from "react-bootstrap";
import { HiOutlineMail } from 'react-icons/hi';
import {FiKey} from 'react-icons/fi';
import { useSelector, useDispatch } from "react-redux";
import { login } from "../index";

function Login()
{
    const userLogin = useSelector(state=>state);
    const dispatch = useDispatch();
    return(
        <Container>
            <div className="flex">
                <div className="Box-title">
                    <b><span className="login">Login</span> Your Account</b>
                </div>
                <br />
                <div className="Input-Box">
                    <center>
                        <form style={{maxwidth:'450px',margin:'auto'}}>
                            <div className="input-icons">
                                <i className="icon"><HiOutlineMail />
                            </i>
                                <input className="input-field" 
                                    type="text" 
                                    placeholder="Email" />
                            </div>
                            
                            <div className="input-icons">
                                <i className="icon">
                                    <FiKey />
                            </i>
                                <input className="input-field" 
                                    type="password"
                                    placeholder="Password" />
                            </div>           
                        </form> 
                    </center>
                </div>
                <br/>
                <div className="Submit-Btn">
                    <button className="SUBMIT" onClick={()=>dispatch(login())}>Get Started</button>
                </div>
                <br/>
                <div >
                    <a href="#" className="create-acc"><b>Create Account</b></a>
                </div>
                <br/>
                <div>
                    <a href="#" className="forget-pass"><b>Forget Password?</b></a>
                </div>
            </div>
        </Container>
    )
}

export default Login;