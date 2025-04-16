import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ROUTE_NAMES } from '../../constants/routesConstants'
import Button from '../../components/button/Button'
import Input from '../../components/input/Input'

export default function Login() {
   const [loading,setLoading] =useState(false)

   const [formData,setFormData] = useState({
       email : "",
       password : ""
   })
      const handleSubmit =()=> {
          setLoading(true)
          setTimeout(()=> {
              setLoading(false)
              alert("Form Submitted",)
          }
          ,2000)
          console.log(formData);
      }

   
      
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f2f5' }}>
      <div style={{ width: '100%', maxWidth: '400px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Login</h2>
        

        <Input   type='text' 
          placeholder='Enter your Email' 
          value={formData.email} 
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}/>

        <Input
          type='password' 
          placeholder='Enter your Password' 
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
         
        />
        <Button 
          title={"Login"} 
          loading={loading} 
          onClick={handleSubmit} 
      
        />
        <p style={{ marginTop: '20px', textAlign: 'center', color: '#555' }}>
          Don't have an account? <Link to={ROUTE_NAMES.SIGNUP} style={{ color: '#007bff', textDecoration: 'none' }}>Sign up</Link>
        </p>
      </div>
    </div>
  )
}
