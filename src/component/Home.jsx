import React from "react"
import { useNavigate,useLocation } from "react-router"


let highorderfun = (Comp) => {

       let forward = React.forwardRef((props,ref) => {
       let location = useLocation()
       let navigate = useNavigate()
       return(
          <Comp {...props } location={location} navigate={navigate}/>
       )
    })
    return forward
 }

class Home extends React.Component{

   
    render(){
        console.table(this.props.location.state)
       return(
          <>
          <h1>Home</h1>
          </>
       )
 
    }
 }
 
 export default highorderfun(Home)