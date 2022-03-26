import React, { PureComponent } from 'react'
import "./IntroDialog.css"
//import {motion} from "framer-motion"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'

class IntroDialog extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            open:true,
            programme:''
            }
    }
     handleChange = (event) => {
        
    this.setState({programme:event.target.value});  
    };
closeDialog=()=>{
    this.setState({open:false});
}
    render() {
        return (
           <AnimatePresence>{this.state.open &&(<motion.div initial={{opacity:0}} animate ={{opacity:1,transition:{duration:0.3}}}  exit={{opacity:0,transition:{delay:0.3}}}className='modal-backdrop'>
           <motion.div initial={{scale:0}} animate ={{scale:1,transition:{duration:0.3}}} exit={{scale:0,transition:{delay:0.3}}} className='Intro' >
           <motion.h1 initial ={{x:500,opacity:0}} animate={{x:0,opacity:1, transition:{delay:0.3,duration:0.3}}} exit={{x:500,opacity:0}}  >Welcome {this.props.institutionName} </motion.h1>
           <motion.h5 initial ={{x:500,opacity:0}} animate={{x:0,opacity:1, transition:{delay:0.3,duration:0.3}}} exit={{x:500,opacity:0,transition:{duration:0.3}}}> Please select which programme to mount</motion.h5>        
           <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">Programme</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={this.state.programme}
          onChange={this.handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"HND SLT Biochemistry"}>HND SLT Biochemistry</MenuItem>
        </Select>
        <Button sx={{ mt: 5 }} variant="contained" color="success"  onClick={this.closeDialog} >
        Confirm
      </Button>
      </FormControl>
           </motion.div>
           </motion.div>
           
           
           )}
           
            </AnimatePresence> 
        )
    }
}

export default IntroDialog