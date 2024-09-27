import React from 'react'

const Register = () => {
  return <h1>This is Register Page</h1>
}

export default Register


// const Register = () => {
// const [user , setUser] = useState({
//   username:"",
//   email:"",
//   phone:"",
//   password:"",
// });

// // handling the input values
// const handleInput = (e) =>{
//   console.log(e);
// }


//   return (
//    <>
//     <section>
//       <main>
//         <div className="section-registration">
//           <div container grid grid-two cols>
//           <div className="registration-image">
//           <img 
//             src="/images/girl.png" 
//             alt="a girl is trying to fill the registeration form"
//             width="400" height="400"
//           />
//           </div>


//           {/* {let's tackel registration Form } */}
//           <div className="registeration-form">
//           <h1 className="main-heading mb-3">Registeration Form</h1>
//           <br/>

//      <form>
//             <div>
//               <label htmlFor="username">username</label>
//               <input type="text" name="username" placeholder="username" id="username" required autoComplete="off"
//               // value={user.username}
//               // onChange={handleInput}
//               />
//             </div>
//             <div>
//               <label htmlFor="email">email</label>
//               <input type="email" name="email" placeholder="Enter Your Email" id="email" required autoComplete="off"/>
//             </div>


//             <div>
//               <label htmlFor="phone">email</label>
//               <input type="Number" name="phone" placeholder="Enter Your phone" id="phone" required autoComplete="off"/>
//             </div>
//             <div>
//               <label htmlFor="password">email</label>
//               <input type="password" name="password" placeholder="Enter Your password" id="password" required autoComplete="off"/>
//             </div>
//             <br/>
//             <button type="submit" className="btn btn-submit">Register Now</button>
//           </form>
//           </div>

//           </div>
//         </div>
//       </main>
//     </section>
//    </>
//   )
// }

// export default Register