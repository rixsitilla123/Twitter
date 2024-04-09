import { useState } from 'react'
import Authentication from './Authentication'
import Unauthentication from './Unauthentication'
import './App.css'

function App() {
  const [token, setToken] = useState(JSON.parse(window.localStorage.getItem("token")) || false)
  if(token){
    return <Authentication/> 
  }else{
    return <Unauthentication setToken={setToken}/>
  }
}

export default App
