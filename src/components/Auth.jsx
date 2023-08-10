import React, { useState } from 'react'
import { auth , Google } from '../config/firebase'
import  {createUserWithEmailAndPassword , signInWithPopup ,signOut} from 'firebase/auth'

const Auth = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword ] = useState('')

    
    const signpass = async () =>{
      try{
          await createUserWithEmailAndPassword(auth , email , password)
      }catch(err){
        console.log(err)
      }

    }
    const signGoogle = async () =>{
      try{
          await signInWithPopup(auth , Google)
      }catch(err){
        console.log(err)
      }

    }
    const logout = async () =>{
      try{
          await signOut(auth )
      }catch(err){
        console.log(err)
      }

    }

  return (
    <div>
        <input type="text"
         placeholder='email'
         onChange={(e) => setEmail(e.target.value)}
          />
        <input type="text"
         placeholder='password'
         onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={signpass}> submit </button>
          <button onClick={signGoogle}> submitwith google </button>
          <button onClick={logout}> Logout </button>
    </div>
  )
}

export default Auth