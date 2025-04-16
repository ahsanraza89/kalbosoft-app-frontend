import React, { useState } from 'react'
import Input from '../../components/input/Input'

export default function Contact() {
    const [email ,setEmail] = useState("");
    console.log(email);

  return (
    <div>
      <h1>Contact Me</h1>

      <Input placeholder= "Enter your name" value={email} type= "text" 
      onChange={(e)=>(setEmail(e.target.value))} />

    
    </div>
    

  )
  
}
