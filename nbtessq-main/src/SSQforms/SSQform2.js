import React, { Component } from 'react'
import './SSQform2.css'
import Table from './FormComponents/Table'
import TableControls from './FormComponents/TableControls'
import NextPageButton from './FormComponents/NextPageButton'
class SSQform2 extends Component{
 
 constructor(props){
     super(props);
 this.state={
 table2Rows:[],
 table2HeaderList:['id','Number','Size in (MeterSquare)','Capacity (No. of Students)','Remarks'],
 table3Rows:[], 
table4and5HeaderList:['id','Type/Description of Facilties','Size in (MeterSquare)','Capacity'],
table6and7HeaderList:['id','Item Description and Model','Quantity','Working Condition'],
table8HeaderList:['id','Facilities','Readiness']
}
 
 
    }
 
 
 renderTable2rows=()=>{
let table2rows=[];

for(let k = 0;k < 2; k++){
    let row = this.state.table2HeaderList.map((item)=>{
        if(item==='id'&& k===0){
            return (<td key = {item}><input  value='Classrooms'  readOnly/></td>)
        }
        else if(item==='id'&& k===1){
   return (<td key = {item}><input  value='Lecture Theatre/Hall'  readOnly/></td>)
        }
  else{
    return(<td key={item}><input onChange={this.handleChange}  row = {k===0?'Classrooms':'Lecture Theatre/Hall'} column={item}/></td>)
   }
      

    }
    )
    var wrappedRow = <tr key={k===0?'Classrooms':'Lecture Theatre/Hall'}>{row}</tr>
    table2rows.push(wrappedRow);    
    console.log(wrappedRow);
    console.log(table2rows);
}
console.log(table2rows);
this.setState({table2Rows:table2rows});
this.setState({table3Rows:table2rows});


 }



 
 
 
 renderTableHeaderList=(tableHeaderList)=>{
return tableHeaderList.map((key,index)=>{
    return <th key={index}>{key}</th>
})
 }
 
 
 componentDidMount(){
this.renderTable2rows();
this.props.initializeTable(this.state.table2HeaderList,2);
this.props.initializeTable(this.state.table2HeaderList,3);
this.props.initializeTable(this.state.table4and5HeaderList,4); 
this.props.initializeTable(this.state.table4and5HeaderList,5); 
this.props.initializeTable(this.state.table6and7HeaderList,6); 
this.props.initializeTable(this.state.table6and7HeaderList,7);
this.props.initializeTable(this.state.table8HeaderList,8); 
}
 
 
 
 
 
 
 
render(){        
return(
<form className='formContainer2'>

<strong  > <i>Continuation from page one </i></strong>

             <h2>RESOURCES FOR THE PROGRAMME</h2>
<h3>Physical Facilities(Dedicated Classrooms/Lecture Theaters/Halls)</h3>
<p>Provide the following information on classrooms and theatre halls presently available 
    exclusively  for the programme</p>
<Table  >
 <tbody key={0}>
<tr key={0}>{this.renderTableHeaderList(this.state.table2HeaderList)}</tr>
  {this.state.table2Rows}
 </tbody>
</Table>

  
       <h3>Physical Facilities(Shared Classrooms/Lecture Theaters/Halls)</h3>
<p>Provide the following information on classrooms and lecture theatres/Halls
    to be shared by the new programme and existing programmes.Attach a time schedule 
    indicating how the rooms to be shared will be used.
</p>
<Table>
 <tbody key= {0}>
 <tr key ={0}>{this.renderTableHeaderList(this.state.table2HeaderList)}</tr>
      {this.state.table3Rows}
 </tbody>   
</Table>

  
  
                 <h3>Dedicated Facilities for Proposed Programme</h3>
  <p>Provide the following information on laboratories,workshop and studios available exclusively for the 
      new programme. </p>
<Table>
    <tbody key = {0}>
     <tr  key = {0}>{this.renderTableHeaderList(this.state.table4and5HeaderList)}</tr>
        {this.props.table4Rows}    
    </tbody>
</Table>
<TableControls>
<button style={{color:'#944317'}} onClick={this.props.deleteLastRow(4)} >DELETE LAST ROW</button>
     <button style={{color:'#5C9210'}} onClick= {this.props.addRow(this.state.table4and5HeaderList,4)} >ADD ROW</button>
</TableControls>
  
                <h3>Shared Facilities</h3>
<p>Provide the following information on labortories, workshop and studios to 
    be shared by the new programme and other programmes. 
</p>
<Table>
<tbody key={0}>
<tr key={0}>{this.renderTableHeaderList(this.state.table4and5HeaderList)}</tr>
{this.props.table5Rows}
</tbody>
</Table>
<TableControls>
    <button style={{color:'#944317'}} onClick={this.props.deleteLastRow(5)} >DELETE LAST ROW</button>
     <button style={{color:'#5C9210'}} onClick= {this.props.addRow(this.state.table4and5HeaderList,5)} >ADD ROW</button>
</TableControls>

  
  
     <p>List all tools and equipment contained in each laboratory,workshop or studio described 
       in the two tables above <br/> List tools and equipment strictly by lab/workshop/studio </p>
<Table>
  <tbody key={0}>
      <tr key={0}>{this.renderTableHeaderList(this.state.table6and7HeaderList)}</tr>
      {this.props.table6Rows}
  </tbody>
  </Table>
<TableControls>
     <button style={{color:'#944317'}} onClick={this.props.deleteLastRow(6)} >DELETE LAST ROW</button>
     <button style={{color:'#5C9210'}} onClick= {this.props.addRow(this.state.table6and7HeaderList,6)} >ADD ROW</button>
</TableControls>

  
  
    <p>List all the tools and equipment in the facilities listed in the above table</p>
  <Table>
<tbody key={0}>
    <tr key={0}>{this.renderTableHeaderList(this.state.table6and7HeaderList)}</tr>
    {this.props.table7Rows}
</tbody>
</Table>
<TableControls>
<button style={{color:'#944317'}} onClick={this.props.deleteLastRow(7)} >DELETE LAST ROW</button>
<button style={{color:'#5C9210'}} onClick= {this.props.addRow(this.state.table6and7HeaderList,7)} >ADD ROW</button>
</TableControls>

  
  
  
  
              <h3>Facilities Under Construction</h3>
<p>List all laboratories,workshops,studio and other facilities still under construction
    that will be used for the proposed programme.<br/>
    Provide information on the state of readiness of each facility at the time of the questionnaire.
</p>
<Table style={{left:'100px'}}>
    <tbody key={0} >
        <tr key={0}>{this.renderTableHeaderList(this.state.table8HeaderList)}</tr>
        {this.props.table8Rows}
    </tbody>
</Table>
<TableControls>
<button style={{color:'#944317'}} onClick={this.props.deleteLastRow(8)} >DELETE LAST ROW</button>
<button style={{color:'#5C9210'}} onClick= {this.props.addRow(this.state.table8HeaderList,8)} >ADD ROW</button>
</TableControls>


<NextPageButton  click ={this.props.nextPage}/>



</form>
);
}
}
export default SSQform2;