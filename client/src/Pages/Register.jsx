import React from 'react'

const Register = () => {
  return (
   <>
   <section>
    <main>
      <div className='section-registeration'>
      <div className='container grid grid-two-cols'>
      <div className='registeration-image'>
      <img src='/images/register.png' alt='a girl is trying to do registeration'
        width="400"
        height="500"
      />
      </div>

      {/* {let tackle registeration form} */}
      <div  className='registration-form'>
         <h1 className='main-heading mb-3'>registration-form</h1>
         <br/>

         <form>
          <div>
            <label htmlFor='username'>Username</label>
            <input type='text' name='username' placeholder='username'  id='username' required autoComplete='off'/>
          </div>
          <div>
            <label htmlFor='email'>Username</label>
            <input type='email' name='email' placeholder='email'  id='email' required autoComplete='off'/>
          </div>
          <div>
            <label htmlFor='phone'>Username</label>
            <input type='number' name='phone' placeholder='phone'  id='phone' required autoComplete='off'/>
          </div>
          <div>
            <label htmlFor='password'>password</label>
            <input type='password' name='password' placeholder='password'  id='password' required autoComplete='off'/>
          </div>
         </form>
      </div>

      </div>

      </div>
    </main>
   </section>

   </>
  )
}

export default Register