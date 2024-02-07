import React, { useState } from 'react'
import Login from '../../../components/Login'
import Footer from '../../global/Footer'
// import { setUser } from '../redux/userSlice';
import UserRegistration from '../../../components/UserRegistration'

const LoginPage = () => {
const [boxName,setBoxName] =useState('login');
// const {user} = setUser((state)=>state.user)


  return (
    <div>

{ boxName==='login' &&<Login setBoxName={setBoxName}/>}
{ boxName==='signup' && <UserRegistration setBoxName={setBoxName} />}
        
        
        <Footer/>
      
    </div>
  )
}

export default LoginPage
