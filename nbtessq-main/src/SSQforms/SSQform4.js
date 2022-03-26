import React ,{Component} from 'react';
import Input from './FormComponents/Input';
import Table from './FormComponents/Table';
import TableControls from './FormComponents/TableControls';
import './SSQform4.css'
class SSQform4 extends Component{
constructor(props){
    super(props);
this.table15HeaderList=['id','Name of Staff','Qualification with Dates and area of specialization ',
                          'Current rank with Date','Teaching/Industrial Experience','Courses to be Taught'];
this.table16HeaderList =['id','Name of Staff','Qualfication with Dates and area of specialization','Current rank',
                           'Teaching/Industrial Experience','Courses to be Taught','Departmental Teaching the Service Course'];
this.table17HeaderList =['id','Name of Staff','Qualification with Dates','Current Rank With Date','Industrial Experence','Practicals to be handed'];
this.table18HeaderList= ['id','Name of Staff','Qualification (with Dates)','Current Rank With Date','Proposed Duties'];

}






componentDidMount(){
    this.props.initializeTable(this.table15HeaderList, 15);
    this.props.initializeTable(this.table16HeaderList, 16);
    this.props.initializeTable(this.table17HeaderList, 17);
    this.props.initializeTable(this.table18HeaderList, 18);

}



render (){
    
    return(
    <form  className='formContainer4'>
<strong  > <i>Continuation from page three </i></strong>
   <h2>Library</h2>
<p style={{textAlign:'left'}}>
    <ol type='i' >
    <li>Estimate the size and capacity of the present library</li>
    <li>List all books, journals, periodicals and e-resources available for the programme to be mounted</li>
     <li>Appraise the adequacy of the library resources for the programme taking into account the number of students
         to be served (use additional sheets if necessary)  </li>
    </ol>
</p>
<Input   label = 'Upload an image or doc file containing all the library information as requested above'  type='file'/>

<h2> STAFFING</h2>
<h3>Teaching Staff</h3>
<p>List all full-time teaching staff available exclusively for the programme.</p>
<Table>
    <tbody>
        <tr>{this.props.renderTableHeaderList(this.table15HeaderList)}</tr>
        {this.props.table15Rows}
    </tbody>
</Table>
<TableControls>
<button style={{color:'#944317'}} onClick={this.props.deleteLastRow(15)} >DELETE LAST ROW</button>
     <button style={{color:'#5C9210'}} onClick= {this.props.addRow(this.table15HeaderList, 15)} >ADD ROW</button> 
</TableControls>
    
    <h3>Service Staff</h3>
    <p>List Service staff not exclusive to the department but whose service will 
        be utilized by the department. </p>
<Table>
    <tbody>
        <tr>{this.props.renderTableHeaderList(this.table16HeaderList)}</tr>
        {this.props.table16Rows}
    </tbody>
    </Table>    
    <TableControls>
    <button style={{color:'#944317'}} onClick={this.props.deleteLastRow(16)} >DELETE LAST ROW</button>
     <button style={{color:'#5C9210'}} onClick= {this.props.addRow(this.table16HeaderList, 16)} >ADD ROW</button>
    </TableControls>
    
    <h3>Technologist/Technicians</h3>
    <p>List all full time Technologicians/Technicians available exclusively for the Programme.</p>
    <Table>
    <tbody>
        <tr>{this.props.renderTableHeaderList(this.table17HeaderList)}</tr>
        {this.props.table17Rows}
        </tbody>
    </Table>
    <TableControls>
    <button style={{color:'#944317'}} onClick={this.props.deleteLastRow(17)} >DELETE LAST ROW</button>
     <button style={{color:'#5C9210'}} onClick= {this.props.addRow(this.table17HeaderList, 17)} >ADD ROW</button>
    </TableControls>

<p>List all administratve staff in the department in order seniority</p>
<Table>
<tbody>
    <tr>{this.props.renderTableHeaderList(this.table18HeaderList)}</tr>
    {this.props.table18Rows}
</tbody>
</Table>
<TableControls>
<button style={{color:'#944317'}} onClick={this.props.deleteLastRow(18)} >DELETE LAST ROW</button>
     <button style={{color:'#5C9210'}} onClick= {this.props.addRow(this.table18HeaderList, 18)} >ADD ROW</button>
</TableControls>

<h3>OTHER OBSERVATONS</h3>
<p>Provide any further information that may help the board to assess the readiness of the programme </p>
<textarea style={{height:'150px',width:'95%',marginBottom:'70px'}}></textarea>


<Input  label='Name of the officer Completing the Questionaire' type='text' />

<Input  label='Designation of the officer Completing the Questionnaire' type='text'/>

<Input   label = 'Mobile Phone Number: ' type='text'/>

<button className='submitFinalButton' >SUBMIT FINAL</button>
    
    </form>
);
}
}
export default SSQform4;