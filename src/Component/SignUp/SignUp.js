import React from 'react';
import {useForm} from 'react-hook-form';
import {db,auth} from "../../firebase"
import { updateProfile } from "firebase/auth"; 



function SignUp({isRouteChangeForSignIn}) {

    const {register, handleSubmit}= useForm()

    const signUpForm=async(data,event)=>{
        event.preventDefault();
        try {
            
            const res= await auth.createUserWithEmailAndPassword(data.email, data.password)
            // updateProfile(auth.currentUser)

            await db.collection("Users").add({
                uid:res.user.uid,
                username: data.username,
                email: data.email,
                password: data.password,
            })
            isRouteChangeForSignIn('signInPage')
         } 
         catch(error){
                 console.log(error)
                 alert(error.message)
             }
        
     }


  return (
    <div>
        <form onSubmit={handleSubmit(signUpForm)}>
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
                    type='text' 
                    placeholder='Username' 
                    {...register('username', {required: true, minLength: 4 , maxLength: '15'})}
                />
                <input 
                    style={{ padding: '5px', width: '200px'}} 
                    type='email' placeholder='Email'
                    {...register('email', {required: true , pattern:/(?![.-])((?![.-][.-])[a-zA-Z\d.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}/ })}
                />
                <input style={{padding: '5px', width: '200px', marginBottom: '5px'}} 
                type='password' 
                placeholder='password' 
                {...register('password', {required: true , pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/, minLength: 6 , maxLength: 16})}
            />
                <button 
                    type='submit' 
                    style={{ padding: '5px', width: '215px', backgroundColor: '#5851DB' , color:'white', cursor: 'pointer' }}
                >Sign Up</button>
                <p style={{fontWeight: 'lighter', fontSize: '15px'}}>Already have an account?</p>
                <button 
                    style={{ padding: '5px', width: '215px', backgroundColor: '#5851DB' , color:'white', marginBottom: '50px', cursor: 'pointer'}}
                    onClick={()=>{isRouteChangeForSignIn('signInPage')}}
                >Sign In</button>
             </div>
         </form>
    </div>
  )
}

export default SignUp