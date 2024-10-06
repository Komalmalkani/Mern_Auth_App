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
            <input type='text' name='username' placeholder='username'  id='username'/>
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