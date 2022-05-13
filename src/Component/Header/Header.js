import React from 'react'
import {useNavigate} from 'react-router-dom'

function Header() {
  const navigate=useNavigate();
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between' , backgroundColor: 'white' , borderBottom: '1px solid lightGray'}}>
        <img 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLF3H-LTyPl-Pql1UaLM6-KIprIhlt42JivwgsCVkgTX8b5sOJeRZ6SITTLqtFA2lBAhI&usqp=CAU'
            alt='logo'
            width='200px'
         />
        <button 
          style={{backgroundColor: 'white', borderColor: 'white' , borderWidth: '0', cursor: 'pointer' }}
          onClick={()=>{navigate('/')}}
        >Sign Out</button>
    </div>
  )
}

export default Header