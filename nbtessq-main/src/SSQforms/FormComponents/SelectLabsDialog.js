import React, { PureComponent } from 'react'
import {getLaboratories} from "../../actions/ssqActions"
import PropTypes from "prop-types"
import { connect } from 'react-redux'
import './SelectLabsDialog.css'
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'
import Button from '@mui/material/Button';



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

       renderClassroomTableRows=()=>{
        let table2rows=[];
        
        for(let k = 0;k < 2; k++){
           
           
        } 
           
        console.log(table2rows);
        this.setState({classroomRows:table2rows});
        // this.setState({table3Rows:table2rows});
        
        
         }

onCheckChanged=(e)=>{
    e.persist();
    if(e.target.checked){
        this.setState(prevState => ({
            selectedLabs: [...prevState.selectedLabs, e.target.name]
          }))
    }else{
        this.setState(prevState => ({
            selectedLabs: prevState.selectedLabs.filter((lab) => lab !== e.target.name)
          }))
        // this.state.selectedLabs.filter((lab) => lab !== e.target.name)
        
    }
}

    render() {
        console.log(this.state.selectedLabs)
        let labs = this.state.laboratories.map((lab,index)=>{
            // var currentRow= k===0?'Classrooms':'Lecture Theatre/Hall';
            // var currentColumn= {item}
            var x= index +1;
           var m =`${0.6 + index*0.3}`;
           var n = `${0.3 + index*0.3}`;
       return (<motion.div initial ={{x:500,opacity:0}} animate={{x:0,opacity:1, transition:{delay:`${m}`,duration:0.3}}} exit={{x:-500,opacity:0,transition:{delay:`${n}`}}} className="inputGroup">

       <input id={`option${x}`}  name={lab} checked={this.state.selectedLabs.includes(lab)} className ="input" type="checkbox" onChange={this.onCheckChanged} />
       <label for={`option${x}`} className ="label">{lab}</label></motion.div>)}
        )

        return (<AnimatePresence>{this.props.open &&(<motion.div  initial={{opacity:0}} animate ={{opacity:1,transition:{duration:0.3}}}  exit={{opacity:0,transition:{delay:0.6}}}  className='modal-backdrop'>
            <motion.div initial={{scale:0}} animate ={{scale:1,transition:{duration:0.3}}} exit={{scale:0,transition:{delay:0.9}}} className='select_container'>
               <motion.h3 initial ={{x:500,opacity:0}} animate={{x:0,opacity:1, transition:{delay:0.3,duration:0.3}}} exit={{x:-500,opacity:0}} >Please select the laboratories available for the programme:</motion.h3> 
             {labs}
      <Button sx={{ mt: 5 }} variant="contained" color="success"  onClick={this.props.closeLabs(this.state.selectedLabs)} >
        Confirm
      </Button>
            </motion.div>
        </motion.div>)
     } </AnimatePresence>
        )
    }
}
SelectLabsDialog.propTypes={
    getLaboratories:PropTypes.func.isRequired,
    laboratories:PropTypes.array.isRequired,
}

const mapStateToProps= state =>({
    laboratories: state.ssq.laboratories
})

export default connect(mapStateToProps,{getLaboratories})(SelectLabsDialog)