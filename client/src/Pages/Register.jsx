import React from 'react'

const Register = () => {
  return (
   <>
    <section>
      <main>
        <div className='section-registration'>
        <div className='container grid grid-two-cols'>
        <div className='registration-image'>
        <img src='/images/register.png' alt='a girl is trying to do registration' width="200" height="200"/>
        </div>

        {/* let's tackle registration form */}
        <div className='registration-form'>
          <h1 className='main-heading mb-3'>Registeration Form</h1>
          <br/>
          <form>
            <div>
              <label htmlFor='username'>
              Username
              </label>
              <input type='text' name='username' placeholder='username' id='username' required autoComplete='off'/>
             <br/>
              <label htmlFor='Email'>
              Email 
              </label>
              <input type='Email' name='email' placeholder='Enter your Email' id='Email' required autoComplete='off'/>
            <br/>
              <label htmlFor='phone'>
              phone
              </label>
              <input type='Number' name='phone' placeholder='phone' id='phone' required autoComplete='off'/>
              <br/>
              <label htmlFor='Password'>
              Password
              </label>
              <input type='password' name='Password' placeholder='Password' id='Password' required autoComplete='off'/>
            </div>
            <br/>
            <button type='submit' className='btn'>Register Now</button>
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