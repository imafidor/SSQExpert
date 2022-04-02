import React, { PureComponent } from 'react'
import {getLaboratories} from "../../actions/ssqActions"
import PropTypes from "prop-types"
import { connect } from 'react-redux'
import './SelectLabsDialogs.css'

class SelectLabsDialog extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
        laboratories:[],
        selectedLabs:[]    
        }
    }
    componentDidMount(){
        this.props.getLaboratories();
    }
    componentWillReceiveProps(nextProps){
        let laboratories= nextProps.laboratories
        
        this.setState({laboratories:laboratories});
                 //  setState({ })
       }
    render() {
        return (<div className='modal-backdrop'>
            <div className='select_container'>
               <h3>Please select one of the following options below:</h3> 
               <div class="inputGroup">
   
               <input id="option1" name="option1" type="checkbox"/>
               <label for="option1">Option One</label>
  </div>
  
  <div class="inputGroup">
    <input id="option2" name="option2" type="checkbox"/>
    <label for="option2">Option Two</label>
  </div>
            </div>
        </div>
            
        )
    }
}
SelectLabsDialog.propTypes={
    getLaboratories:PropTypes.func.isRequired,
    laboratories:PropTypes.object.isRequired,
}

const mapStateToProps= state =>({
    laboratories: state.ssq.laboratories
})

export default connect(mapStateToProps,{getLaboratories})(SelectLabsDialog)