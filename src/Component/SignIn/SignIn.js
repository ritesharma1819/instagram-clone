 import React from 'react'
 
 function SignIn() {
   return (
     <div>
         <form>
            <img 
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLF3H-LTyPl-Pql1UaLM6-KIprIhlt42JivwgsCVkgTX8b5sOJeRZ6SITTLqtFA2lBAhI&usqp=CAU'
                alt='logo'
                width='200px'
            />
             <input type='email' placeholder='Email' />
             <input type='password' placeholder='password' />
             <button>SignIn</button>
         </form>
     </div>
   )
 }
 
 export default SignIn