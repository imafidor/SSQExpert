import React,{Component} from 'react';
import './Register.css';
import fire from './firebaseConfig.js' 



class Register extends Component{
constructor(props){
    super(props);
    this.state={
        email:"",
        password:"",
      fileRefNo:""
      
    }

}

register=(e)=>{
    e.preventDefault();
    this.props.startLoading();
    this.props.checkFileNo(this.state.fileRefNo);
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        this.props.stopLoading();
    }).catch((error)=>{
        this.props.stopLoading();
        console.log(error);
  this.props.errorMessage(error,this.state.fileRefNo);
});

}
handleChange=(e)=>{
    this.setState({[e.target.name]: e.target.value});
    
}

render(){


return(
    <form  style ={{left:this.props.clicked?'25px':'450px'}} className = "input-group-r">
    <input type= 'text' name = 'fileRefNo' onChange ={this.handleChange} className= "input-field-r" placeholder = 'File Reference Number' required />
    <input value = {this.state.email} type= 'email' name="email" onChange={this.handleChange} className= "input-field-r" placeholder = "Email" required/>
    
    <input  value={this.state.password} type= 'password' name="password" onChange={this.handleChange} className = "input-field-r" placeholder = "Enter Password" required/>
    
     <input  type= 'checkbox' id="check-box-r" className = "input-field-r" required /><span className="span-r">I agree to the notes for completing Self-Study Questionnaire NBTE/PRO/8</span>
    <button type= "submit" onClick ={this.register} className= "submit-btn-r">Register</button>
    </form> 
    
    
    
);
}










}
export default Register;