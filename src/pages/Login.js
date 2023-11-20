import React, { useState } from 'react'
import SignIn from './SignIn';
import '../components/Login.css'
import netflix from '../images/Logonetflix.png'
function Login() {
    const [signIn, setSignIn] = useState(false);


  return (
    <div className='login'>
        <div className='login_bg'>
            <img src ={netflix} className='logo'/>

            <button onClick={() => setSignIn(true)} className='login_button'>Sign In </button>
            <div className='login_gradient'></div>
            <div className='login_body'>
                {signIn ? (
                    <SignIn />
                ) : (

                    <>
                <h1>Unlimited films, TV programmes and more. </h1>
                <h2>Watch anywhere. Cancel at anytime.</h2>
                <h3>Ready to watch? Enter your email addresss to create or restart your membership.</h3>
                <div className='login_input'>
                    <form>
                        <input type='email' placeholder='Email Address'/>
                        <button  onClick={() => setSignIn(true) }className='login_btn'>GET STARTED</button>
                    </form>
                </div>
                </>
                )}
            </div>
        </div>
    
    </div>
  )
}

export default Login 