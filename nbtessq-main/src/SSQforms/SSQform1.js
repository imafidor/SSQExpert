import React, { Component } from 'react';
import Input from './FormComponents/Input';
import './SSQform1.css';
import Table from './FormComponents/Table';
import TableControls from './FormComponents/TableControls'
import NextPageButton from './FormComponents/NextPageButton'

class  SSQform1 extends Component{ 
    
    constructor(props){
        super(props);
       
        this.state={
            table1HeaderList:['id','Existing programmes','Date established','Level','Enrolment','Accreditation Status'],          
            tableRows :[],
            tableData:[],
            
        }
    }



    renderTable1Header=()=>{
        let header = [...this.state.table1HeaderList];
        
        return header.map((key,index)=>{
        return <th key= {index}>{key}</th>
        })    
        
        }

componentDidMount(){
this.props.initializeTable(this.state.table1HeaderList,1);
}



render(){
    const TableTitle =  'List all existing programmes';
    console.log(this.state.tableData.length);
    
    console.log(this.props);
    return (
    <div  className= 'container1'>
<form className = 'SSQform1'>
<strong className = 'formTitle' > <i>Complete the SSQ details below </i></strong>
<Input  label = 'Title of the proposed programme:' type = 'text' changed={this.props.captureInput(1)}/>
<Input  label = 'Address of the Institution:' type = 'text'   changed=   {this.props.captureInput(2)}/>
<Input  label = 'Date Established:' type = 'date'      changed={this.props.captureInput(3)}       />
<Input  label = 'Name of the Chief Executive: ' type = 'text' changed={this.props.captureInput(4)}/>
<Input  label = 'Title of the Chief Executive: ' type = 'text' changed= {this.props.captureInput(5)}/>
<Input  label = 'Name of the Head of Department: ' type = 'text' changed={this.props.captureInput(6)}/>
<Input  label = 'Title of the Head of Department: ' type = 'text' changed={this.props.captureInput(7)}/>

</form >
<form className = 'secondContainer'>
<h3 className = 'TableHeader'>{TableTitle}</h3>
<Table className ='Table' >
  <tbody key={0}>
      <tr key={0}>{this.renderTable1Header()}</tr>
      {this.props.table1Rows}
     </tbody>
</Table>
<TableControls>
     <button style={{color:'#944317'}} onClick={this.props.deleteLastRow(1)} >DELETE LAST ROW</button>
     <button style={{color:'#5C9210'}} onClick= {this.props.addRow(this.state.table1HeaderList,1)} >ADD ROW</button>
</TableControls>

<Input  label = 'Upload an image  or doc file outlining the organisational structure of the department where the programme will be run : ' type = 'file' 
changed={this.props.captureInput(8)}/>
<Input  label = 'Upload an image or doc file containing the copy of the law or letter of approval of establishment from the Federal Ministry of Education: ' type = 'file'
changed={this.props.captureInput(9)}/>
<h2 style={{fontFamily:'Lora, serif'}}> CURRICULUM: </h2>
<div className ='curriculumGuide'>The minimum content expected should not be lower than the NBTE minimum guide curriculum and course
    specifications for the programme and it should be drawn in course units and the content spelt out 
    in behavioural objectives and could include:    
    <ol type="i">
    <li>Goal and objectives of the programme</li>
    <li>Entry requirements for the programme</li>
    <li> A task inventory of what is expected of the diplomats during the supervised students industrial 
        work experience (if any) </li>

    </ol>
Where an NBTE minimum guide curriculum does not exist, the institution should evolve one using NBTE guidelines 
for evolving curricula and course specifications for programmes and submit to the board for 
national critique for workshop. </div>
<Input  label = 'Upload an image or a doc file of the teaching (Departmental) Curriculum for the programme' type= 'file' changed={this.props.captureInput(10)}/>
<p style={{fontFamily:'Lora, serif',fontWeight:'bold'}}>State briefly how the curriculum and the students to be enrolled in the proposed programme will be evaluated below:</p>
<textarea style={{height:'150px',width:'95%',marginBottom:'70px'}} onChange={this.props.captureInput(11)} ></textarea>
<NextPageButton  click={this.props.nextPage}  />
</form>    

    </div>

);
}
}
export default SSQform1;