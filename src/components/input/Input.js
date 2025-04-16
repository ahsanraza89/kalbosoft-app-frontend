import React from 'react'

export default function Input({ placeholder, value, onChange, type }) {
    return (
        <div>
            <input placeholder={placeholder} value={value} onChange={onChange} type={type}
                style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
            />

        </div>
    )
}
