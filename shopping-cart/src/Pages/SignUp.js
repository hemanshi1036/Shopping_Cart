import React, { useState } from 'react'
import { useFirebase } from "../Context/Firebase";

const SignUp = () => {
    const firebase = useFirebase();

    console.log('Firebase' , firebase);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return (
    <div>
      <h1>Sign Up</h1>
      <input onChange={(e) => setEmail(e.target.value)}
      value={email} 
      type='email' placeholder='Enter Email' />
      <input onChange={(e) => setPassword(e.target.value)}
      value={password} 
      type='password' placeholder='Enter Password' />
      <button onClick={() => {firebase.signupUserWithEmailAndPassword(email, password)
      firebase.putData('users', {email, password})}}>Sign Up</button>
    </div>
  );
}

export default SignUp
