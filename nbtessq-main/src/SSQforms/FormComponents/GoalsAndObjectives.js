import React, { PureComponent } from 'react';
import { connect } from 'react-redux';



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


    render() {
        return (<div></div>)
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