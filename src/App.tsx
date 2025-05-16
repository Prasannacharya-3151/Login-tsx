import React from 'react'
import LoginForm from './Components/LoginForm'

const App:React.FC=()=>{
  const handleLogin=(email:string, password:string)=>{
    console.log("Email:",email);
    console.log("Password",password);
    alert(`Welcome ${email}!`)
  }




 
      return <LoginForm onLogin={handleLogin}/>
  
}

export default App
