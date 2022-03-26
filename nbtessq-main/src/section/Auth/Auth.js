
import React,{Component} from "react";
import'./Auth.css';
import Login from './Login';
import Register from './Register';
import Radium from 'radium';
class auth extends Component{
registerClick= false;
state={
    left: '0px',
    registerClicked:false,
    loginClicked:true
    
    }


Register=()=>{
this.setState({left:'108px',
        registerClicked:true,
        loginClicked:false});
}
Login=()=>{
    this.setState({left:'0px',
    registerClicked:false,
    loginClicked:true});
    // this.setState({registerClicked:false});
    // this.setState({loginClicked:true});
}


render(){
const style ={
    left:this.state.left
}
 return(
 
<div className = "Auth"   style ={{transform: this.props.show?'translateY(0)':'translateY(-200vh)' ,
                                    opacity:this.props.show?'1':'0'}}> 

<button onClick = {this.props.closeClicked}  style={{':hover':{backgroundColor:'red'}}} className = 'close'>X</button>
<div className = "button-box">
<div className= "btn" style ={style}  > </div>
<button type = "button" onClick = {this.Login} className = "toggle-btn" >Login</button>
<button type = "button" onClick = {this.Register} className = "toggle-btn" >Register</button>
</div>
<Login clicked = {this.state.loginClicked}></Login>
<Register  checkFileNo ={this.props.checkFileNo}clicked = {this.state.registerClicked} errorMessage={this.props.errorMessage}
startLoading ={this.props.startLoading} stopLoading={this.props.stopLoading}></Register>
</div>);






}

}
export default Radium(auth);






