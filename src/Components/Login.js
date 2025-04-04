import Header from './Header'
import { useState } from 'react';
const Login = () => {
    const [isSingedIn, setIsSignedIn] = useState(true);
    const togglesignin = () =>{
        setIsSignedIn(!isSingedIn);
    }
  return (
    <>
      <Header/>
      <div>
        <img className=" z-50" src ="https://assets.nflxext.com/ffe/siteui/vlv3/98df3030-1c2b-4bd1-a2f5-13c611857edb/web/IN-en-20250331-TRIFECTA-perspective_247b6f06-c36d-4dff-a8eb-4013325c3f8e_large.jpg"
        alt ="Netflix login bg"/>
      </div>
      <div >
        <form className='absolute bg-opacity-70 rounded-3xl w-3/12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black p-4 rounded text-white'>
            <h1 className='m-3 p-2 text-2xl font-bold w-full'>{isSingedIn ? "Sign In" : "Sign Up"}</h1>
            {!isSingedIn && <input type="text" placeholder="Full Name" className="w-full my-3 rounded-lg bg-zinc-700 m-auto bg-white p-3 "/>}
            <input type="text" placeholder="Email or phone number" className="w-full my-3 rounded-lg bg-zinc-700 m-auto bg-white p-3 "/>
            <input type="password" placeholder="Password" className="w-full my-3 bg-zinc-700 rounded-lg bg-white p-3 "/>
            <button type="submit" className="w-full my-3 rounded-lg  bg-red-600 text-white p-3">{isSingedIn ? "Sign In" : "Sign Up"}</button>
            <p onClick={togglesignin} className='m-3 p-2 cursor-pointer'>{isSingedIn ? "New to Netflix?Sign up now." : "Already Registered? Sing In"}</p>
        </form>
      </div>
    </>
  )
}

export default Login
