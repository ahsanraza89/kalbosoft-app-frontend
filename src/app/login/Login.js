import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ROUTE_NAMES } from '../../constants/routesConstants'
import Button from '../../components/button/Button'

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
      }
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f2f5' }}>
      <div style={{ width: '100%', maxWidth: '400px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Login</h2>
        <input 
          type='text' 
          placeholder='Enter your Email' 
          value={formData.email} 
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
        <input 
          type='password' 
          placeholder='Enter your Password' 
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          style={{ width: '100%', padding: '10px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
        <Button 
          title={"Login"} 
          loading={loading} 
          onClick={handleSubmit} 
          style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        />
        <p style={{ marginTop: '20px', textAlign: 'center', color: '#555' }}>
          Don't have an account? <Link to={ROUTE_NAMES.SIGNUP} style={{ color: '#007bff', textDecoration: 'none' }}>Sign up</Link>
        </p>
      </div>
    </div>
  )
}
