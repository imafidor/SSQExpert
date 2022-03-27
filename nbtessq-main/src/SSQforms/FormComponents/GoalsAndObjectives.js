import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './GoalsAndObjectives.css'

import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'
import FormControls from './FormControls';
import PropTypes from 'prop-types'
import {getGoalsAndObjectives} from "../../actions/ssqActions";


class GoalsAndObjectives extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
           goal:"",
           objective:"",
           confirmed:false            
        }
    }

componentDidMount(){
    this.props.getGoalsAndObjectives();
}

componentWillReceiveProps(nextProps){
 let goal= nextProps.goalsAndObjectives.goal;
 let objective = nextProps.goalsAndObjectives.objective
this.setState({goal:goal, objective:objective });
//  setState({ })

}
    render() {
        return (<div className='container'>
            <p><strong>Goals:</strong><br/>
            <i>{this.state.goal}</i>
            </p>
            <p ><strong>Objective:</strong><br/>
            <i>{this.state.objective}</i>
            </p>
            <h5>Does the programme intend to follow the above Goal and Objective?</h5>
           
            <form className="form">
  <div className="inputGroup">
    <input className ="input"id="radio1" name="radio" type="radio"/>
    <label className="label" for="radio1">Yes</label>
  </div>
  <div className="inputGroup">
    <input className ="input" id="radio2" name="radio" type="radio"/>
    <label className ="label" for="radio2">No</label>
  </div>
  </form>
<FormControls>
<button style={{color:'#944317'}}  >PREVIOUS STEP</button>
     <button style={{color:'#5C9210'}} >NEXT STEP</button>
</FormControls>
        </div>)
    }
}
GoalsAndObjectives.propTypes={
    getGoalsAndObjectives:PropTypes.func.isRequired,
    goalsAndObjectives:PropTypes.object.isRequired,
}
const mapStateToProps= state =>({
    goalsAndObjectives: state.ssq.goalsAndObjectives
})
export default connect(mapStateToProps,{getGoalsAndObjectives})(GoalsAndObjectives)