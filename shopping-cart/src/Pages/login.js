
import React, { useState } from 'react'
import { useFirebase } from "../Context/Firebase";

const Login = () => {

  const firebase = useFirebase();
  

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  return (
    <div className='flex  justify-center flex-col'>

       <label> E-mail : </label>
        <input onChange={(e) => setEmail(e.target.value)}
      value={email} 
        type='email' placeholder='Enter Your Email here' />
          <br></br>
        <label> Password : </label>
        <input onChange={(e) => setPassword(e.target.value)}
      value={password} 
        type='password' placeholder='Enter Your Password here' />
        <button onClick={() => {firebase.signInWithEmailAndPassword(email, password)
      }}>Sign In</button>
    </div>
  )
}

export default Login
