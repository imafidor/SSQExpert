
import React , {Component} from 'react';
import Topic from './Topic';
import Confidentiality from './Confidentiality';
import './section.css';
import Notes from './notes';
import Radium from 'radium';
import Auth from './Auth/Auth';
import Modal from './StateInformation/Modal'
import Spinner from './StateInformation/Spinner'

class section extends Component{
state = {
    authButtonClicked : false,
    error:null,
    refNoIsNotEmpty:false,
    loading:false,
    modalOpen:false
}

authButtonClickedHandler= ()=>{
    this.setState({authButtonClicked: true});    
}
closedAuthButtonClicked =()=>{
    this.setState({authButtonClicked: false});
}
errorHandler=(error,fileRefNo)=>{
    if(fileRefNo!==""){
        this.setState({refNoIsNotEmpty:true});
    }
    this.setState({error:error});

}
modalClosed=()=>{
    this.setState({error:null});
    this.props.resetFileNoFailed();
  this.setState({modalOpen:false});
}
startLoading=()=>{
this.setState({loading:true});
this.setState({modalOpen:true})
}
stopLoading=()=>{
this.setState({loading:false})
this.setState({modalOpen:false});
}
render(){
    var modalMessage=  this.state.error?this.state.error.message:this.props.fileNoFailed?'Incorrect File Reference number':null ;
    if(this.state.loading){
      modalMessage=<Spinner/> 
    }

return(
 

<div className = 'FullSection'>
<Modal show={Boolean(this.state.modalOpen || this.state.error || (this.props.fileNoFailed && this.state.refNoIsNotEmpty))} clicked={this.modalClosed}>
       {modalMessage}
    </Modal>
   <Auth checkFileNo= {this.props.checkFileNo} show = {this.state.authButtonClicked} closeClicked = {this.closedAuthButtonClicked} 
   errorMessage ={this.errorHandler} startLoading={this.startLoading} stopLoading={this.stopLoading}/>    
    <Topic/>
    <Confidentiality/>
     <Notes></Notes>
     <button className ="button" onClick = {this.authButtonClickedHandler}  style ={{':hover':{backgroundColor:'lightgreen'}} } > Please click to register or login</button> 
  

</div>

);

}
}
export default Radium(section);