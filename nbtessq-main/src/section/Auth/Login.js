import React,{ Component } from "react";
import './Login.css';
class Login extends Component{

constructor(props){
    super(props);
    this.state = {left:'0px'};

}



render(){


return(
<form style={{left:this.props.clicked?'25px':'-400px'}} className = "input-group">
{/* <input type= 'text'  className= "input-field" placeholder = 'File Reference Number'  required/> */}
<input type= 'text' className= "input-field" placeholder = "Email" required/>
<input type= 'text' className = "input-field" placeholder = "Enter Password" required/>

 <input  type= 'checkbox' id="check-box" className = "input-field"  /><span className="span">Remember Password</span>
<button type= "submit" className= "submit-btn">Login</button>
</form>

);
}

}
export default Login;