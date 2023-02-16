import React , {useState , useEffect} from 'react'
import Header from '../components/header'
import Footer from '../components/Footer'
import LandingHeader
 from '../components/LandingHeader'
import { NavLink } from 'react-router-dom'
import { useContext } from "react";
import { Context } from "../contexts/UserContext";
import { UserLogContext } from '../contexts/LogUserContext'
export default function SignUp() {
  const { isLogin, setIsLogin } = useContext(Context);
  const {user , setUser} = useContext(UserLogContext)
    const [firstName , setFirstName] = useState("")
    const [lastName , setlastName] = useState("")
    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")
    const [rePassword , setRePassword] = useState("")

 
        const Create =() => {
            if(password == rePassword ){
                    fetch("http://localhost:8090/api/user", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            firstName : firstName , 
                            lastName : lastName,
                            username : username ,
                            password  : password,
                            userType : "User"
                    }),
                      })
                        .then((res) => res.json())
                        .then((data) => console.log(data));
                        alert("Amjilttai")
                        setIsLogin(true)
            }else{
                alert("Amjiltgui")
            }
         
        }
    
 
  

  return (
    <div className='container-fluid pb-5'>
 {isLogin ? <LandingHeader/> :<Header />}
    <div className='pt-5 text-center'>
        <h2>Sign Up</h2>
    </div>
    <div className=" w-100 py-5 px-3 d-flex justify-content-center rounded">
    <div className="text-end">
    </div>
      <div className='w-50 d-flex flex-column gap-4 '>
        <input
          className="form-control"
          placeholder="FirstName..."
          name="firstName"
         onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          className="form-control"
          placeholder="LastName..."
          name="lastName"
          onChange={(e) => setlastName(e.target.value)}
        />
        <input
          className="form-control"
          placeholder="Username..."
          name="userName"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="form-control"
          type="password    "
          placeholder="Password..."
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="form-control"
          type="password"
          placeholder="Re-Password..."
          name="rePassword"
          onChange={(e) => setRePassword(e.target.value)}
        />
        <div className='d-flex justify-content-between'>
        <button className="btn btn-warning w-25">
            <NavLink to="/" className="text-decoration-none text-dark">
            Back
            </NavLink>
        </button>
        <button className="btn btn-primary w-25" onClick={Create}>
            <NavLink to="/" className="text-white text-decoration-none">Sign Up</NavLink>
        </button>
        </div>
      </div>
  </div>
  <Footer/>
  </div>
  )
}
