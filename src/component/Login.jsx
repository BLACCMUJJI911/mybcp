import React from "react";
import { Link ,useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";


// export default function Login(){

//    let [email,setEmail] = useState();
//    let [password,setPassword] = useState();
//    let [btn , setbtn] = useState(true);

//    let login = () =>{
//       setbtn(false)
//       if (email == undefined || password == undefined) {
//          toast.error("Enter Email and Password")
//       }
//       setTimeout(() => {
//          setbtn(true)
//        }, 1500);


//    }

//      return(
//         <>
        
//         <h1>Login Page</h1>

//         <input type="text" name="Email" placeholder="E-mail" id="em" onChange={(e)=>setEmail(e.target.value)} />
//         <br />
//         <input type="password" name="Password" placeholder="Password" id="ps" onChange={(e)=>setPassword(e.target.value)} />
//         <br />
//         { btn == true ?
//         <button type="submit" id="bt" onClick={ () => login()}>Submit</button>

//         :
//         <button type="submit" disabled id="bt" onClick={ () => login()}>Submit</button>

// }
// <ToastContainer
//         theme="dark"
//         autoClose="10"/>
        
//         </>
//      )

// }

// High Order

let navigatehighorder = (Comp) => {

   
   let forward = React.forwardRef((props,ref) => {

      let navigate = useNavigate()
      return(
         <Comp {...props } navigate={navigate}/>
      )
   })
   return forward
}

class Login extends React.Component{

   

   call_Data = () => {
      console.log(this.props)
      this.props.navigate("/home",
      {
      state:{
         email:"new@gmail.com",
         age:"22",
         contact:"032128763678"
      }
   })
   }

   
   render(){
      
      return(
         <>
         <h1>Login</h1>
         <Link className="lii" to="/home">Go To Home Page</Link>
         <button className="lii" onClick={() => this.call_Data()}>Call</button> 
         </>
      )

   }
}

export default navigatehighorder(Login)