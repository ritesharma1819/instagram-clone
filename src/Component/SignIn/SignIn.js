 import React from 'react';
 import {useForm} from 'react-hook-form'
 
 function SignIn({isRouteChange, isRouteChangeForSignIn}) {
     const {register, handleSubmit}= useForm()
     const signInForm=(data)=>{
         console.log(data);
         isRouteChange('home')
     }
   return (
     <div>
         <form onSubmit={handleSubmit(signInForm)}>
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
                <input 
                    style={{ padding: '5px', width: '200px'}} 
                    type='email' 
                    placeholder='Email' 
                    {...register('email', {required: true , pattern:/(?![.-])((?![.-][.-])[a-zA-Z\d.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}/ })}
                />
                <input 
                    style={{padding: '5px', width: '200px', marginBottom: '5px'}} 
                    type='password' 
                    placeholder='password' 
                    {...register('password', {required: true , pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/, minLength: 6 , maxLength: 16})}
                />
                <button 
                    type='submit'
                    style={{ padding: '5px', width: '215px', backgroundColor: '#5851DB' , color:'white'}}
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