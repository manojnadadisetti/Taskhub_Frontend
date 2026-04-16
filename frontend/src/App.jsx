import { useEffect, useRef, useState } from 'react';
import { imgurl, callApi } from './lib';
import './App.css';

const App = () => {
    const [isSignin, setIsSignIn] = useState(true);
    const finput = useRef();

    useEffect(()=>{
        finput.current.focus();
    },[]);

    function switchWindow(){
        setIsSignIn(prev => !prev);
        finput.current.focus();
    }

    function signin(){
        /*Connect backend using callApi() function from lib.js
        Refer lib.js for callApi() parameters*/
    }

    function signup(){
        /*Connect backend using callApi() function from lib.js
        Refer lib.js for callApi() parameters*/
    }

    function responseHandler(res){
        alert(res.message);
    }

    return (
        <div className='app'>
            <div className='container' key={isSignin ? "signin" : "signup"}>
                <div className='container-header'>
                    <label>{isSignin ? "Login": "Create Account"}</label>
                    <img src={imgurl + "logo.png"} alt='' />
                </div>
                <div className='container-content'>
                    {isSignin? 
                        <>
                        <label>Username*</label>
                        <div className='input-group'>
                            <img src={imgurl + "user.png"} />
                            <input type='text' ref={finput} placeholder='Enter email id' autoComplete='off' />
                        </div>
                        <label>Password*</label>
                        <div className='input-group'>
                            <img src={imgurl + "padlock.png"} />
                            <input type='password' placeholder='Enter password' />
                        </div>
                        <p>Forgot <span>Password?</span></p>
                        <button onClick={()=>signin()}>Let's start</button>
                        <label onClick={()=>switchWindow()}>Don't have an account? <span>Sign up</span></label>
                        </>
                    :
                        <>
                        <label>Full Name*</label>
                        <div className='input-group'>
                            <img src={imgurl + "user.png"} />
                            <input type='text' ref={finput} placeholder='Enter full name' autoComplete='off' />
                        </div>
                        <label>Mobile Number*</label>
                        <div className='input-group'>
                            <img src={imgurl + "user.png"} />
                            <input type='text' placeholder='Enter mobile number' autoComplete='off' />
                        </div>
                        <label>Email Address*</label>
                        <div className='input-group'>
                            <img src={imgurl + "user.png"} />
                            <input type='text' placeholder='Enter email id' autoComplete='off' />
                        </div>
                        <label>Password*</label>
                        <div className='input-group'>
                            <img src={imgurl + "user.png"} />
                            <input type='text' placeholder='Enter password' autoComplete='off' />
                        </div>
                        <label>Re-type Password*</label>
                        <div className='input-group'>
                            <img src={imgurl + "user.png"} />
                            <input type='text' placeholder='Re-type your password' autoComplete='off' />
                        </div>
                        <button onClick={()=>signup()}>Register</button>
                        <label onClick={()=>switchWindow()}>Already have an account? <span>Sign in</span></label>
                        </>
                    }
                </div>
                <div className='container-footer'>Copyright @ 2026. All rights reserved.</div>
            </div>
        </div>
    );
}

export default App;
