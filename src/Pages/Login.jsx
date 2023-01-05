import React from 'react'
import Loginn from '../Loginn'
import Signup from '../Signup'

function Login() {
  return (
    <div>
    <div className='login'>
         <div className='fb'>
            <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="" />
            <h2>Connect with friends and the world around you on Facebook.</h2>
         </div>

         <div className='logdiv'>
             <Loginn/>
         </div>
        

        

    </div>

<div className='signup'>
           <Signup/>
        </div>


    </div>
  )
}

export default Login