import React, { Component } from 'react';
import Table from './FormComponents/Table';
import TableControls from './FormComponents/TableControls';
import './SSQform3.css';
import NextPageButton from './FormComponents/NextPageButton';


class SSQform3 extends Component{
   
constructor(props){
    super(props);
    this.table9HeaderList=['id','Type Farm','Size','Estimated Yearly output'];
    this.table10HeaderList =['id','Type Farm','Size in (MeterSquare)','Total No','Estimated Yearly output'];
    this.table11HeaderList = ['id','Facility','Equipment/Instrument','Quantity','Working Condition'];
    this.table12HeaderList =['id','Description','Type','Size/Capacity','Remarks'];
    this.table13HeaderList = ['id','Facility','Equipment Instrument','Quantity','Working Condition'];
    this.table14HeaderList = ['id','Office Description','Size in (MeterSquare)','Capacity (No of Lecturers)','Remarks'];

}



componentDidMount(){
    this.props.initializeTable(this.table9HeaderList, 9);
    this.props.initializeTable(this.table10HeaderList, 10);
    this.props.initializeTable(this.table11HeaderList, 11);
    this.props.initializeTable(this.table12HeaderList, 12);
    this.props.initializeTable(this.table13HeaderList, 13);
    this.props.initializeTable(this.table14HeaderList, 14);
}
render(){
return(
    <form className='formContainer3'>

<strong  > <i>Continuation from page two </i></strong>


<h2>FOR AGRICULTURAL PROGRAMMES</h2>
<h3>CROP FARMS</h3>
<p>Complete the table below in respect of all experimental and commercial crop farms,
    orchards,plantations,gardens etc. available for the programme.  </p>

<Table>
<tbody>
<tr>{this.props.renderTableHeaderList(this.table9HeaderList)}</tr>    
{this.props.table9Rows}
</tbody>
</Table>
<TableControls>
  <button style={{color:'#944317'}} onClick={this.props.deleteLastRow(9)} >DELETE LAST ROW</button>
     <button style={{color:'#5C9210'}} onClick= {this.props.addRow(this.table9HeaderList,9)} >ADD ROW</button>
</TableControls>
   
   
   <h3>Livestock Farms</h3>
   <p>Complete the table below in respect of all experiment and commercial
       livestock farms available for the programme. </p>
<Table>
    <tbody>
        <tr>{this.props.renderTableHeaderList(this.table10HeaderList)}</tr>
            {this.props.table10Rows}    
    
    </tbody>
</Table>
<TableControls>
<button style={{color:'#944317'}} onClick={this.props.deleteLastRow(10)} >DELETE LAST ROW</button>
     <button style={{color:'#5C9210'}} onClick= {this.props.addRow(this.table10HeaderList,10)} >ADD ROW</button>   
</TableControls>

<p>List all equipment contained in each of the facilties listed in Livestock Farms </p>
<Table>
    <tbody>
        <tr>{this.props.renderTableHeaderList(this.table11HeaderList)}</tr>
        {this.props.table11Rows}
    </tbody>
</Table>
<TableControls>
     <button style={{color:'#944317'}} onClick={this.props.deleteLastRow(11)} >DELETE LAST ROW</button>
     <button style={{color:'#5C9210'}} onClick= {this.props.addRow(this.table11HeaderList, 11)} >ADD ROW</button>     
</TableControls>

<h3>Other Teaching Facilities</h3>
<p>Complete the table below in respect of the following facilities for agricultural training: audio visual;
    drawing room; navigation facilities; museum;armoury;tannary;herbarium 
</p>
<Table>
    <tbody>
        <tr>{this.props.renderTableHeaderList(this.table12HeaderList)}</tr>
        {this.props.table12Rows}
    </tbody>
</Table>
<TableControls>
    <button style={{color:'#944317'}} onClick={this.props.deleteLastRow(12)} >DELETE LAST ROW</button>
     <button style={{color:'#5C9210'}} onClick= {this.props.addRow(this.table12HeaderList, 12)} >ADD ROW</button> 
</TableControls>


  <p>List all the equipment contained in each of the facilities in Other Teaching facilities above </p>
  <Table>
      <tbody>
          <tr>{this.props.renderTableHeaderList(this.table13HeaderList)}</tr>
          {this.props.table13Rows}
      </tbody>
  </Table>
  <TableControls>
  <button style={{color:'#944317'}} onClick={this.props.deleteLastRow(13)} >DELETE LAST ROW</button>
     <button style={{color:'#5C9210'}} onClick= {this.props.addRow(this.table13HeaderList, 13)} >ADD ROW</button> 
  </TableControls>
  
  <h3>Office Accommodation</h3>
  <p>Provide the following information on offices (including Departmental office)
      available to the proposed programme.
  </p>
  <Table>
     <tbody>
      <tr>{this.props.renderTableHeaderList(this.table14HeaderList)}</tr>
          {this.props.table14Rows}
          </tbody>
  </Table>
  <TableControls>
  <button style={{color:'#944317'}} onClick={this.props.deleteLastRow(14)} >DELETE LAST ROW</button>
     <button style={{color:'#5C9210'}} onClick= {this.props.addRow(this.table14HeaderList, 14)} >ADD ROW</button> 
  </TableControls>
  
  
  <NextPageButton click={this.props.nextPage}/>
  
    </form>

);
}
}
export default SSQform3;