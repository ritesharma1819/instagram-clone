 import React from 'react'
 
 function SignIn({isRouteChange, isRouteChangeForSignIn}) {
   return (
     <div>
         <form>
             <div style={{display: 'flex' , 
                flexDirection: 'column', 
                alignItems: 'center' ,
                marginTop: '100px',
                border: '1px solid lightgray' , 
                width: '300px',
                marginLeft: 'auto',
                marginRight: 'auto',
                gap: '5px'
             }}>
                <img 
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLF3H-LTyPl-Pql1UaLM6-KIprIhlt42JivwgsCVkgTX8b5sOJeRZ6SITTLqtFA2lBAhI&usqp=CAU'
                    alt='logo'
                    width='200px'
                    style={{marginTop: '50px', marginBottom: '30px'}}
                />                                                  
                <input style={{ padding: '5px', width: '200px'}} type='email' placeholder='Email' />
                <input style={{padding: '5px', width: '200px', marginBottom: '5px'}} type='password' placeholder='password' />
                <button 
                    style={{ padding: '5px', width: '215px', backgroundColor: '#5851DB' , color:'white'}}
                    onClick={()=>{isRouteChange('home')}}
                >Sign In</button>
                <p style={{fontWeight: 'lighter', fontSize: '15px'}}>Don't have an account?</p>
                <button 
                style={{ padding: '5px', width: '215px', backgroundColor: '#5851DB' , color:'white', marginBottom: '50px'}}
                onClick={()=>{isRouteChangeForSignIn('signUpPage')}}
                >Sign Up</button>
             </div>
         </form>
     </div>
   )
 }
 
 export default SignIn