import React,{Component} from 'react';
import Toolbar from './Toolbar/Toolbar';
import {Route , Switch,Redirect} from 'react-router-dom';
import SSQform1 from './SSQform1';
import SSQform2 from './SSQform2';
import SSQform3 from './SSQform3';
import SSQform4 from './SSQform4';
import SSQform5 from './SSQform5';
import SSQform6 from  './SSQform6';
import SSQform7 from './SSQform7';
import SSQform8 from './SSQform8';
import Questionaire from './FormComponents/Questionnaire';
import  _ from "lodash"; 


class SSQform extends Component{

constructor(props){
    super(props);
this.Table1Title ='List all existing programmes';
this.Table2Title = 'RESOURCES FOR THE PROGRAMME';
this.Table3Title ='Physical Facilities(Dedicated Classrooms/Lecture Theaters/Halls)'
this.Table4Title ='Dedicated Facilities for Proposed Programme'
this.Table5Title ='Shared Facilities'
this.Table6Title ='All tools contained in the laboratory workshop or studio'
this.Table7Title ='All the tools and equipment in the facilities listed in the above table'
this.Table8Title ='Facilities Under Construction'
this.Table9Title ='CROP FARMS'
this.Table10Title ='Livestock Farms'
this.Table11Title ='All equipment contained in each of the facilties listed in Livestock Farms'
this.Table12Title ='Other Teaching Facilities'
this.Table13Title ='All the equipment contained in each of the facilities in Other Teaching facilities above'
this.Table14Title ='Office Accommodation'
this.Table15Title ='Teaching Staff'
this.Table16Title ='Service Staff'
this.Table17Title ='List all full time Technologicians/Technicians available exclusively for the Programme'
this.Table18Title ='All administrative staff in the department in order seniority'
this.state={
    submitted:false,
    pageNumber:1,          
    ProgrammeTitle:'',
    InstitutionAddress:'',
    DateEstablished:'',
    NameOfTheChiefExecutive:'',
    TitleOfTheChiefExecutive:'',
    NameOfTheHeadOfDepartment:'',
    TitleOfTheHeadOfDepartment:'',
    FileOfDepartmentalOrganizationalStructure:null,
    LetterOfApprovalFromTheMinistry:null,
    FileForTheTeachingDepartmentalCurriculum:null,
    BriefCurriculumForStudentsEnrollment:'',
    table1Rows :[],
    table1Data:[],
    table2Data:[],
    table3Data:[],
    table4Data:[],
    table4Rows:[],
    table5Data:[],
    table5Rows:[],
    table6Data:[],
    table6Rows:[],
    table7Data:[],
    table7Rows:[],
    table8Data:[],
    table8Rows:[],
    table9Data:[],
    table9Rows:[],
    table10Data:[],
    table10Rows:[],
    table11Rows:[],
    table11Data:[],
    table12Rows:[],
    table12Data:[],
    table13Data:[],
    table13Rows:[],
    table14Data:[],
    table14Rows:[],
    table15Data:[],
    table15Rows:[],
    table16Data:[],
    table16Rows:[],
    table17Data:[],
    table17Rows:[],
    table18Data:[],
    table18Rows:[],
    LibraryInformation:null,
    ProgrammeReadiness:'',
    NameOfTheOfficerCompletingTheQuestionnaire:'',
    DesignationOfTheOfficerCompletingTheQuestionnaire:'',
    MobilePhoneNumber:'',
}    
}

sendDataToServer=(pageNumber)=>{
    switch(pageNumber){
    case 1:
    fetch(`https://ssq2-2f329.firebaseio.com/Institutions/${this.props.databaseKey}.json`,{
        method:'POST',
        body:JSON.stringify({[this.Table1Title]:this.state.table1Data,
                            ProgrammeTitle:this.state.ProgrammeTitle ,
                             InstitutionAddress:this.state.InstitutionAddress,
                              DateEstablished:this.state.DateEstablished,
                            NameOfTheChiefExecutive:this.state.NameOfTheChiefExecutive,
                            TitleOfTheChiefExecutive:this.state.TitleOfTheChiefExecutive,
                            NameOfTheHeadOfDepartment:this.state.NameOfTheHeadOfDepartment,
                             TitleOfTheHeadOfDepartment:this.state.TitleOfTheHeadOfDepartment}),
                            headers:{"Content-type":"applicaton/json; charset=UTF-8"}
                            })
    .then(response=>{
 console.log(response.json().then(data=>{
    console.log(data)
}))
    })
break;
case 2:
break;
case 3:
break;
case 4:
break;
default:

}
}
 handleChange=(row, column, tableNumber)=>(e)=>{  
        switch(tableNumber){
        case 1:   
       var  table1Clone = _.cloneDeep(this.state.table1Data); 
       var pair={ [column] : e.target.value };
       _.merge(table1Clone[row] , pair);
       this.setState({table1Data:table1Clone});
        console.log(this.state.table1Data);
        break;
        case 2:
        var table2Clone = _.cloneDeep(this.state.table2Data);
         pair={ [column] : e.target.value };
       _.merge(table2Clone[row] , pair);
        this.setState({table2Data:table2Clone});
        break;
        case 3:
        var table3Clone = _.cloneDeep(this.state.table3Data);
         pair={ [column] : e.target.value };
        _.merge(table3Clone[row] , pair);
        this.setState({table3Data:table3Clone});
        break;
        case 4:
        var table4Clone = _.cloneDeep(this.state.table4Data);
        pair={ [column] : e.target.value };
        _.merge(table4Clone[row] , pair);
        this.setState({table4Data:table4Clone});
        break;
        case 5:
            var table5Clone = _.cloneDeep(this.state.table5Data);
             pair={ [column] : e.target.value };
            _.merge(table5Clone[row] , pair);
            this.setState({table5Data:table5Clone});
            break;
            case 6:
            var table6Clone = _.cloneDeep(this.state.table6Data);
             pair={ [column] : e.target.value };
            _.merge(table6Clone[row] , pair);
            this.setState({table6Data:table5Clone});
            break;
            case  7:
            var table7Clone = _.cloneDeep(this.state.table7Data);
             pair={ [column] : e.target.value };
            _.merge(table7Clone[row] , pair);
            this.setState({table7Data:table7Clone});
            break;
            case 8:
            var table8Clone = _.cloneDeep(this.state.table8Data);
             pair={ [column] : e.target.value };
            _.merge(table8Clone[row] , pair);
            this.setState({table8Data:table8Clone});
            break;
            case 9:
            var table9Clone = _.cloneDeep(this.state.table9Data);
             pair={ [column] : e.target.value };
            _.merge(table9Clone[row] , pair);
            this.setState({table9Data:table9Clone});
            break;
            case 10:
            var table10Clone = _.cloneDeep(this.state.table10Data);
             pair={ [column] : e.target.value };
            _.merge(table10Clone[row] , pair);
            this.setState({table10Data:table10Clone});
            break;
            case 11:
            var table11Clone = _.cloneDeep(this.state.table11Data);
            pair={ [column] : e.target.value };
            _.merge(table11Clone[row] , pair);
            this.setState({table11Data:table11Clone});
            break;
            case 12:
            var table12Clone = _.cloneDeep(this.state.table12Data);
            pair={ [column] : e.target.value };
            _.merge(table12Clone[row] , pair);
            this.setState({table12Data:table12Clone});
            break;
            case 13:
            var table13Clone = _.cloneDeep(this.state.table13Data);
            pair={ [column] : e.target.value };
            _.merge(table13Clone[row] , pair);
            this.setState({table13Data:table13Clone});
            break;
            case 14:
            var table14Clone = _.cloneDeep(this.state.table14Data);
            pair={ [column] : e.target.value };
            _.merge(table14Clone[row] , pair);
            this.setState({table14Data:table14Clone});
            break;
            case 15:
            var table15Clone = _.cloneDeep(this.state.table15Data);
            pair={ [column] : e.target.value };
            _.merge(table15Clone[row] , pair);
            this.setState({table15Data:table15Clone});
            break;
            case 16:
            var table16Clone = _.cloneDeep(this.state.table16Data);
            pair={ [column] : e.target.value };
            _.merge(table16Clone[row] , pair);
            this.setState({table16Data:table16Clone});
            break;        
            case 17:
            var table17Clone = _.cloneDeep(this.state.table17Data);
            pair={ [column] : e.target.value };
            _.merge(table17Clone[row] , pair);
            this.setState({table17Data:table17Clone});
            break;
            case 18:
            var table18Clone = _.cloneDeep(this.state.table18Data);
            pair={ [column] : e.target.value };
            _.merge(table17Clone[row] , pair);
            this.setState({table18Data:table18Clone});
         break;
            default:
             table1Clone = _.cloneDeep(this.state.table1Data);
          //  table1Clone[e.target.row][e.target.column]= e.target.value;
            this.setState({table1Data:table1Clone});
     }
     

}


onFileInputFieldChangedHandler=(number)=>(e)=>{
switch(number){
  case 1: this.setState({FileOfDepartmentalOrganizationalStructure:e.target.files});
  break;
  case 2: this.setState({LetterOfApprovalFromTheMinistry:e.target.files});
    break;
  case 3: this.setState({FileForTheTeachingDepartmentalCurriculum:e.target.files});
    break;
    default:
      this.setState({FileOfDepartmentalOrganizationalStructure:e.target.files});
}
}
onInputFieldChangedHandler=(number)=>(e)=>{
    switch(number){
        case 1:this.setState({ProgrammeTitle: e.target.value});
        console.log(this.state.ProgrammeTitle);
        break;
        case 2: this.setState({InstitutionAddress: e.target.value});
        break;
        case 3: this.setState({DateEstablished: e.target.value});
        break;
        case 4: this.setState({NameOfTheChiefExecutive: e.target.value});
        break;
        case 5: this.setState({TitleOfTheChiefExecutive: e.target.value});
        break;
        case 6: this.setState({NameOfTheHeadOfDepartment: e.target.value});
        break;
        case 7: this.setState({TitleOfTheHeadOfDepartment: e.target.value});
        break;
        case 8: this.setState({FileOfDepartmentalOrganizationalStructure:e.target.files});
        break;
        case 9:  this.setState({LetterOfApprovalFromTheMinistry:e.target.files});
        break;
        case 10: this.setState({FileForTheTeachingDepartmentalCurriculum:e.target.files});
        break;
        case 11: this.setState({BriefCurriculumForStudentsEnrollment:e.target.value});
        break;
        case 12: this.setState({LibraryInformation:e.target.files});
        break;
        case 13: this.setState({ProgrammeReadiness:e.target.value});
        break;
        case 14:this.setState({NameOfTheOfficerCompletingTheQuestionnaire:e.target.value});
        break;
        case 15: this.setState({DesignationOfTheOfficerCompletingTheQuestionnaire:e.target.value});
        break;
        case 16: this.setState({MobilePhoneNumber:e.target.value});
        break;
        default: this.setState({ProgrammeTitle: e.target.value});

    }
}
initializeTable=(tableHeaderList,TableNumber)=>{
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
  console.log(rowData);
     var tableRow = tableHeaderList.map((data)=>{
     //var dataIndex = tableHeaderList.findIndex(rank=> rank === data);  
     //console.log(dataIndex);
    if(data==='id'){
          return (<td key = {data}><input  value={rowData[data]} readOnly/></td>)
      }else{
      
        return (<td key = {data}><input onChange = {this.handleChange(rowData['id'] - 1, data, TableNumber)} TableNumber = {TableNumber} row = {rowData['id'] - 1} column ={data} columnLength={tableHeaderList.length} /></td>);
      }
      }
      )
      var wrappedTableRow= <tr key = {rowData['id']}>{tableRow}</tr>;
  

      this.selectTableToChangeState(TableNumber,rowData,wrappedTableRow,'INIT');
     
      //To be wrapped in switch statement
     // this.setState({table1Data:this.state.table1Data.concat(rowData),
      //table1Rows:this.state.table1Rows.concat(wrappedTableRow)
  
    //})
  
 
  console.log(this.state.tableRows);
  console.log(this.state.tableData);
  
  }
//handleChange=(e)=>{
//this.setState()
//}


selectTable=(TableNumber)=>{
    
    switch(TableNumber){
    case (1):
    return [this.state.table1Data,this.state.table1Rows]
    case(2):
    return this.state.table2Data
    case(3):
    return this.state.table3Data
    case (4):
    return [this.state.table4Data,this.state.table4Rows]
    case (5):
    return[this.state.table5Data,this.state.table5Rows]
    case (6):
    return [this.state.table6Data,this.state.table6Rows]
    case (7):
    return [this.state.table7Data,this.state.table7Rows]
    case (8):
    return [this.state.table8Data,this.state.table8Rows]
    case (9):
    return [this.state.table9Data,this.state.table9Rows]
    case (10):
    return [this.state.table10Data,this.state.table10Rows]
    case (11):
    return [this.state.table11Data,this.state.table11Rows]
    case (12):
    return [this.state.table12Data,this.state.table12Rows]
    case (13):
    return [this.state.table13Data,this.state.table13Rows]
    case (14):
    return [this.state.table14Data,this.state.table14Rows]
    case (15):
    return [this.state.table15Data,this.state.table15Rows]
    case (16):
    return [this.state.table16Data,this.state.table16Rows]
    case (17):
    return [this.state.table17Data,this.state.table17Rows]
    case (18):
    return [this.state.table18Data,this.state.table18Rows]
    default:
    return [this.state.table1Data,this.state.table1Rows]
 }
    }

    
 moveToNextPage=(e)=>{
    e.preventDefault();
  this.sendDataToServer(this.state.pageNumber);

   this.setState(state=>(
       {pageNumber:state.pageNumber + 1,submitted:true}));
    console.log(this.state.pageNumber);    
}

componentWillUpdate(nextProps,nextState){
    console.log(this.state.pageNumber);
    console.log(nextState.pageNumber);
    if(nextState.pageNumber > this.state.pageNumber){  
    this.props.history.push({pathname:`/SSQform${nextState.pageNumber}`});
    }
}

selectTableToChangeState=(TableNumber,data,row,type)=>{
    this.setState((state)=>{
        switch(TableNumber){
       case(1):
       if(type==='DEL'){
      return {table1Data:data,table1Rows:row}
       }
       else{
       return {table1Data:state.table1Data.concat(data),
        table1Rows:state.table1Rows.concat(row)}
       }
       case(2):
       return{table2Data:data}
       case(3):
       return{table3Data:data}
       case(4):
       if(type==='DEL'){
       return{table4Data:data,table4Rows:row}
       }
       else{ return {table4Data:state.table4Data.concat(data),
                     table4Rows:state.table4Rows.concat(row)}}
       case(5):
       if(type==='DEL'){
       return{table5Data:data,table5Rows:row}
       }else{
           return {table5Data:state.table5Data.concat(data),
            table5Rows:state.table5Rows.concat(row)}
       }
       case(6):
       if(type==='DEL'){
       return{table6Data:data,table6Rows:row}
       }else{
        return {table6Data:state.table6Data.concat(data),
         table6Rows:state.table6Rows.concat(row)}}
       case(7):
       if(type==='DEL'){
       return{table7Data:data,table7Rows:row}
       }else{
        return {table7Data:state.table7Data.concat(data),
            table7Rows:state.table7Rows.concat(row)}}
       case(8):
       if(type==='DEL'){
       return{table8Data:data,table8Rows:row}
       }else{
        return {table8Data:state.table8Data.concat(data),
            table8Rows:state.table8Rows.concat(row)}
       }
       case(9):
       if(type==='DEL'){
       return{table9Data:data,table9Rows:row}
       }else{
        return {table9Data:state.table9Data.concat(data),
            table9Rows:state.table9Rows.concat(row)}
       }
       case(10):
       if(type==='DEL'){
       return{table10Data:data,table10Rows:row}
       }else{
        return {table10Data:state.table10Data.concat(data),
            table10Rows:state.table10Rows.concat(row)}
       }
       case(11):
       if(type==='DEL'){
       return{table11Data:data,table11Rows:row}
       }else{
        return {table11Data:state.table11Data.concat(data),
            table11Rows:state.table11Rows.concat(row)}
       }
       case(12):
       if(type==='DEL'){
       return{table12Data:data,table12Rows:row}
       }else{
        return {table12Data:state.table12Data.concat(data),
            table12Rows:state.table12Rows.concat(row)}
       }
       case(13):
       if(type==='DEL'){
       return{table13Data:data,table13Rows:row}
       }else{
        return {table13Data:state.table13Data.concat(data),
            table13Rows:state.table13Rows.concat(row)}
       }
       case(14):
       if(type==='DEL'){
       return{table14Data:data,table14Rows:row}
       }else{
        return {table14Data:state.table14Data.concat(data),
            table14Rows:state.table14Rows.concat(row)}
       }
       case(15):
       if(type==='DEL'){
       return{table15Data:data,table15Rows:row}
       }else{
        return {table15Data:state.table15Data.concat(data),
            table15Rows:state.table15Rows.concat(row)}
       }
       case(16):
       if(type==='DEL'){
       return{table16Data:data,table16Rows:row}
       }else{
        return {table16Data:state.table16Data.concat(data),
            table16Rows:state.table16Rows.concat(row)}
       }
       case(17):
       if(type==='DEL'){
       return{table17Data:data,table17Rows:row}
       }else{
        return {table17Data:state.table17Data.concat(data),
            table17Rows:state.table17Rows.concat(row)}
       }
       case(18):
       if(type==='DEL'){
       return{table18Data:data,table18Rows:row}
       }else{
        return {table18Data:state.table18Data.concat(data),
            table18Rows:state.table18Rows.concat(row)}
       }
       default:
       if(type==='DEL'){
        return {table1Data:data,table1Rows:row}
         }
         else{
         return {table1Data:state.table1Data.concat(data),
          table1Rows:state.table1Rows.concat(row)}
         }
    }
    
    })
}
deleteLastRow=(TableNumber)=>(e)=>{
    e.preventDefault();
var Table = this.selectTable(TableNumber);
    //To be wrapped in switch statement
  if(Table[1].length > 1){
let newArray = [...Table[1]]
newArray.splice(-1,1);
//this.setState({table1Rows:newArray})
let newTableDataArray= [...Table[0]]
   newTableDataArray.splice(-1,1);
//   this.setState({table1Data:newTableDataArray})
this.selectTableToChangeState(TableNumber,newTableDataArray,newArray,'DEL');
}
}

addRow=(tableHeaderList,TableNumber)=>(e)=>{
    e.preventDefault();
    var Table = this.selectTable(TableNumber);
    var rowData = tableHeaderList.reduce((result,item)=>{
        if(item==='id'){ 
            console.log(Table[0]);
            console.log(Table[0].length);
            result[item]= Table[0][Table[0].length - 1][item] + 1;
          return result;
        }
        else{ 
          result[item] = "";
          return result;
        }
      },{})
      console.log(rowData);
     
    var tableRow = tableHeaderList.map((data)=>{
        var dataIndex = tableHeaderList.findIndex(rank=> rank === data);      
    console.log(dataIndex);
        if(data==='id'){
            return (<td key = {data}><input  value={rowData[data]}  readOnly/></td>)
        }else{
        return (<td key = {data}><input onChange = {this.handleChange(rowData['id'] - 1, data, TableNumber)} row = {rowData['id'] - 1}  column={data}  TableNumber={TableNumber} columnLength={tableHeaderList.length }  /></td>);
        }
        }
        )
    var wrappedTableRow = <tr key = {rowData['id']}>{tableRow}</tr>
     
    //To be wrapped in switch case statement
    
    this.selectTableToChangeState(TableNumber,rowData,wrappedTableRow,'ADD');
  //  this.setState({table1Data:this.state.table1Data.concat(rowData)});
   // this.setState({table1Rows:this.state.table1Rows.concat(wrappedTableRow)});
        
}
renderTableHeaderList=(tableHeaderList)=>{
    return tableHeaderList.map((key,index)=>{
        return <th key={index}>{key}</th>
    })
     }

renderTable2and3Data=()=>{
    let table2Data = []
     for(let k =0;k < 2;k++){
     let rowData = this.state.table2HeaderList.reduce((result,item)=>{
       if(item==='id'&& k===0){
       result[item]='Classrooms';
       return result;   
    }
       else if(item==='id'&& k===1){
         result[item] = 'Lecture Theatre/Hall';  
       return result;
        }
      else{
          result[item]="";
       return result;
        }
     },{}
     ); 
     table2Data.concat(rowData);
     }
 this.setState({table2Data:table2Data});
 this.setState({table3Data:table2Data});
 }


render(){
let redirect =null;

   
if(!this.state.submitted){
redirect=<Redirect to ="/Questionnaire"/> 
}
//<h1>{this.props.institutionName}</h1>
console.log(this.props);
return(<div>
<Route  path= "/" render = {()=> <Toolbar institutionName = {this.props.institutionName}/>}   />
{redirect}
<Switch>
<Route path="/Questionnaire" render={()=> <Questionaire nextPage= {this.moveToNextPage} 
                         table1Rows={this.state.table1Rows} table1Data={this.state.table1Data} 
                         addRow={this.addRow} deleteLastRow={this.deleteLastRow}    institutionName={this.props.institutionName}
                         initializeTable ={this.initializeTable} captureInput = {this.onInputFieldChangedHandler}/>}/>
<Route path="/SSQform2" render={()=> <SSQform2 nextPage = {this.moveToNextPage} 
                                table4Rows={this.state.table4Rows} table4Data={this.state.table4Data} 
                                addRow={this.addRow} table5Rows={this.state.table5Rows} 
                                table6Rows={this.state.table6Rows} table7Rows={this.state.table7Rows} 
                                table8Rows={this.state.table8Rows}   deleteLastRow={this.deleteLastRow}          
                                 initializeTable = {this.initializeTable}/>}/>
<Route path="/SSQform3" render={()=> <SSQform3 nextPage = {this.moveToNextPage}
                                      table9Rows={this.state.table9Rows} table10Rows={this.state.table10Rows}
                                      table11Rows={this.state.table11Rows} table12Rows={this.state.table12Rows}
                                      table13Rows={this.state.table13Rows} table14Rows={this.state.table14Rows}
                                      addRow={this.addRow} deleteLastRow={this.deleteLastRow}  initializeTable = {this.initializeTable} 
                                      renderTableHeaderList={this.renderTableHeaderList}
                                      />}/>
<Route path="/SSQform4" render={()=> <SSQform4  nextPage = {this.moveToNextPage}
                                table15Rows={this.state.table15Rows} table16Rows={this.state.table16Rows}
                                table17Rows={this.state.table17Rows} table18Rows={this.state.table18Rows}
                                renderTableHeaderList={this.renderTableHeaderList} addRow={this.addRow} 
                                deleteLastRow={this.deleteLastRow}  initializeTable = {this.initializeTable} captureInput={this.onInputFieldChangedHandler} />}/>
<Route path="/SSQform5" render={()=> <SSQform5 nextPage = {this.moveToNextPage}/>}/>
<Route path="/SSQform6" render={()=> <SSQform6 nextPage = {this.moveToNextPage}/>}/>
<Route path="/SSQform7" render={()=> <SSQform7 nextPage = {this.moveToNextPage}/>}/>
<Route path="/SSQform8" render={()=> <SSQform8 nextPage = {this.moveToNextPage}/>}/>
</Switch>
</div>
)

}
}
export default SSQform;