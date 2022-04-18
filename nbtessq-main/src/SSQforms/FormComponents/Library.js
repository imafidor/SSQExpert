import React, { PureComponent } from 'react'
import './Library.css'; 
import { getCoreSpecializations } from '../../actions/ssqActions';
import PropTypes from 'prop-types'

class Library extends PureComponent {
    constructor(props) {
        super(props)
  this.LibraryHeaderList=['id','Author\'s Name','Title and Year of Publication','Area of Specialization','No of Copies'];
        this.state = {
            specializations:[],
            books:[],
            booksTableRow:[],
            ebooks:[],
            ebooksTableRow:[],
            journals:[],
            journalsTableRow:[],
            ejournals:[],
            ejournalsTableRow:[]           
        }
    }
// switch(type){
        // case("books"):return {table1Data:data,table1Rows:row}
       
        //  })}
        selectTableRowToChangeState=(row,type)=>{
            this.setState((state)=>{
                switch(type){
                     case("books"):return {booksTableRow:row};
                     case("ebooks"):return {ebooksTableRow:row};
                     case("journals"):return {journalsTableRow:row};
                     case("ejournals"):return {ejournalsTableRow:row};
             }
            })
        }
        selectTableToChangeState=(tableHeaderList,data,type)=>{
            this.setState((state)=>{
                switch(type){
                     case("books"):return {books:data};
                     case("ebooks"):return {ebooks:data};
                     case("journals"):return {journals:data};
                     case("ejournals"):return {ejournals:data};
             }
            },()=>{
        this.initializeTableRows(tableHeaderList,type);
             })
        }
onChange=(row, column,type)=>(e)=>{
    // var laboratoryDataClone = _.cloneDeep(this.state.laboratoriesData);
    
//   laboratoryDataClone[index][row][column]=e.target.value;
    // this.setState({laboratoriesData: laboratoryDataClone})
    this.setState((state)=>{
        switch(type){
             case("books"):
             var booksDataClone = _.cloneDeep(this.state.books);
             booksDataClone[row][column]=e.target.value;
             return {books:booksDataClone};
             case("ebooks"):
             var ebooksDataClone = _.cloneDeep(this.state.ebooks);
             ebooksDataClone[row][column]=e.target.value;
             return {ebooks:ebooksDataClone};
             case("journals"):
             var journalsDataClone = _.cloneDeep(this.state.journals);
             journalsDataClone[row][column]=e.target.value;
             return {journals:journalsDataClone};
             case("ejournals"):
             var ejournalsDataClone = _.cloneDeep(this.state.ejournals);
             ejournalsDataClone[row][column]=e.target.value;
             return {ejournals:ejournalsDataClone};
     }
    });

}
    renderTableHeaderList=(tableHeaderList)=>{
        return tableHeaderList.map((key,index)=>{
            return <th key={index}>{key}</th>
        })
         }

  initializeTableRows=(tableHeaderList,targetData)=>{
    var tableRow = tableHeaderList.map((data)=>{
        //var dataIndex = tableHeaderList.findIndex(rank=> rank === data);  
        //console.log(dataIndex);
       if(data==='id'){
             return (<td key = {data}><input  value={rowData[data]} readOnly/></td>)
         }
         else if(data==='Area of Specialization'){
            // console.log(this.state.laboratoriesData.length);
            return(<td key={data}> <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-filled-label">Item</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
               onChange={this.handleChange(rowData['id'] - 1, data,targetData)}
              //  value={this.state.laboratoriesData[index][rowData['id'] - 1][data]}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {specializations}
            </Select>
            
          </FormControl></td>)
         }
         else{
         
           return (<td key = {data}><input onChange = {this.handleChange(rowData['id'] - 1, data,targetData)}  row = {rowData['id'] - 1} column ={data} type={(data==='No of Copies')?"number":"text"}/></td>);
         }
         }
         )
        //  var officeTableRows=[];
         
         var wrappedTableRow= <tr key = {rowData['id']}>{tableRow}</tr>;
         
        this.selectTableToChangeState(wrappedTableRow,targetData);
         //  officeTableRows.push(wrappedTableRow);
         
        //  this.setState({officeTableRows:officeTableRows});
  }

         initializeTableData=(tableHeaderList,targetData)=>{
            var specializations=this.state.specializations.map((specialization)=>{
                return <MenuItem key = {Math.random} value={specialization}>{specialization}</MenuItem>
            });
            var rowData = tableHeaderList.reduce(function(result,item){
            if(item==='id'){ 
             result[item]= 1;
              return result;
            }
            else{ 
              result[item] = "";
              return result;
            }
          },{})
        //   var officeData=[];
          
          console.log(rowData);
        //   officeData.push(rowData);
         
   this.selectTableToChangeState(tableHeaderList,rowData,targetData);
        //   this.setState({officeData:officeData},()=>{
            //  this.selectTableToChangeState(TableNumber,rowData,wrappedTableRow,'INIT');


        // });
          }
    componentWillReceiveProps(nextProps){
        if(nextProps.specializations){
    this.setState({specializations:nextProps.specializations},()=>{
  this.initializeTableData(this.LibraryHeaderList,"books");
  this.initializeTableData(this.LibraryHeaderList,"ebooks");
  this.initializeTableData(this.LibraryHeaderList,"journals");
  this.initializeTableData(this.LibraryHeaderList,"ejournals");
    });
        }
    }
     componentDidMount(){
    this.props.getCoreSpecializations();
     }
    render() {
        return (<div className='container5'>
            <div className='container5'>  
            <h3>Books</h3>
 <Table>
    <tbody key = {Math.random}>
     <tr  key = {Math.random}>{this.renderTableHeaderList(this.LibraryHeaderList)}</tr>
        {this.state.booksTableRow}    
    </tbody>
</Table>

            </div>
<div className='container5'>  
            <h3>E Books</h3>
 <Table>
    <tbody key = {Math.random}>
     <tr  key = {Math.random}>{this.renderTableHeaderList(this.LibraryHeaderList)}</tr>
        {this.state.ebooksTableRow}    
    </tbody>
</Table>
</div>
<div className='container5'>  
            <h3>Journals</h3>
 <Table>
    <tbody key = {Math.random}>
     <tr  key = {Math.random}>{this.renderTableHeaderList(this.LibraryHeaderList)}</tr>
        {this.state.journalsTableRow}    
    </tbody>
</Table>
</div>  
<div className='container5'>  
            <h3>E Journals</h3>
 <Table>
    <tbody key = {Math.random}>
     <tr  key = {Math.random}>{this.renderTableHeaderList(this.LibraryHeaderList)}</tr>
        {this.state.ejournalsTableRow}    
    </tbody>
</Table>
</div>        
        </div>)
    }
}
Library.propTypes={
    getCoreSpecializations:PropTypes.func.isRequired,
    specializations:PropTypes.array.isRequired,
}
const mapStateToProps= state =>({
    specializations: state.ssq.specializations
})


export default connect(mapStateToProps,{getCoreSpecializations})(Library)