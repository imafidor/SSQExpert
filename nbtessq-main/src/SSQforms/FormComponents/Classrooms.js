import React, { PureComponent } from "react";
import "./Classroom.css";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import _ from "lodash";
import Table from "./Table";
import FormControls from "./FormControls";

// this.classroomsHeaderList=['id','Number','Size in (MeterSquare)','Capacity (No. of Students)','Remarks']

class Classrooms extends PureComponent {
  constructor(props) {
    super(props);
    this.classroomsHeaderList = [
      "id",
      "Number",
      "Size in (MeterSquare)",
      "Capacity (No. of Students)",
      "Remarks",
    ];

    this.state = {
      classroomRows: [],
      classroomRowData: [],
    };
  }

  handleChange = (row, column) => (e) => {
    var classroomDataClone = _.cloneDeep(this.state.classroomRowData);
    var pair = { [column]: e.target.value };
    _.merge(classroomDataClone[row], pair);
    this.setState({ classroomRowData: classroomDataClone });
  };

  renderTableHeaderList = (tableHeaderList) => {
    return tableHeaderList.map((key, index) => {
      return <th key={index}>{key}</th>;
    });
  };

  moveToNextStep = (classroomData) => {
    this.props.transformClassroomData(classroomData);
    this.props.nextStep();
  };

  renderClassroomTableRows = () => {
    let table2rows = [];

    for (let k = 0; k < 2; k++) {
      let Row = this.classroomsHeaderList.map((item) => {
        var currentRow = k === 0 ? "Classrooms" : "Lecture Theatre/Hall";
        var currentColumn = { item };
        if (item === "id" && k === 0) {
          return (
            <td key={item}>
              <input value="Classrooms" readOnly />
            </td>
          );
        } else if (item === "id" && k === 1) {
          return (
            <td key={item}>
              <input value="Lecture Theatre/Hall" readOnly />
            </td>
          );
        } else if (item === "Remarks") {
          return (
            <td key={item}>
              <input
                onChange={this.handleChange(currentRow, currentColumn)}
                row={k === 0 ? "Classrooms" : "Lecture Theatre/Hall"}
                column={item}
                value={this.state.classroomRowData[k][currentColumn]}
              />
            </td>
          );
        } else {
          return (
            <td key={item}>
              <input
                type="number"
                onChange={this.handleChange(currentRow, currentColumn)}
                row={k === 0 ? "Classrooms" : "Lecture Theatre/Hall"}
                column={item}
                value={this.state.classroomRowData[k][currentColumn]}
              />
            </td>
          );
        }
      });
      var wrappedRow = (
        <tr key={k === 0 ? "Classrooms" : "Lecture Theatre/Hall"}>{Row}</tr>
      );
      table2rows.push(wrappedRow);
      console.log(wrappedRow);
      console.log(table2rows);
    }
    console.log(table2rows);
    this.setState({ classroomRows: table2rows });
    // this.setState({table3Rows:table2rows});
  };

  renderClassroomsTableData = () => {
    var classroomRowData = [];
    for (let k = 0; k < 2; k++) {
      var rowData = this.classroomsHeaderList.reduce((result, item) => {
        if (item === "id" && k === 0) {
          result[item] = "Classrooms";
          return result;
        } else if (item === "id" && k === 1) {
          result[item] = "Lecture Theatre/Hall";
          return result;
        } else {
          result[item] = "";
          return result;
        }
      }, {});
      classroomRowData.push(rowData);
    }
    console.log(classroomRowData);
    this.setState({ classroomRowData: classroomRowData }, () => {
      this.renderClassroomTableRows();
    });
    //this.setState({table3Data:table2Data});
  };

  componentDidMount() {
    console.log(this.classroomsHeaderList);
    this.renderClassroomsTableData();
  }
  testNextButton = (e) => {
    console.log("Testing");
  };

  render() {
    console.log(this.state.classroomRowData);
    return (
      <AnimatePresence>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, transition: { duration: 0.3 } }}
          exit={{ scale: 0, transition: { delay: 0.6 } }}
          className="container2"
        >
          {/* <h2>RESOURCES FOR THE PROGRAMME</h2> */}
          <motion.h3
            initial={{ x: 500, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { delay: 0.3, duration: 0.3 },
            }}
            exit={{ x: -500, opacity: 0 }}
          >
            Physical Facilities(Dedicated Classrooms/Lecture Theaters/Halls)
          </motion.h3>
          <motion.p
            initial={{ x: 500, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { delay: 0.6, duration: 0.3 },
            }}
            exit={{ x: -500, opacity: 0, transition: { delay: 0.3 } }}
          >
            Provide the following information on classrooms and theatre halls
            presently available exclusively for the programme
          </motion.p>
          <Table>
            <tbody key={0}>
              <tr key={0}>
                {this.renderTableHeaderList(this.classroomsHeaderList)}
              </tr>
              {this.state.classroomRows}
            </tbody>
          </Table>
          <FormControls wide={true}>
            <button style={{ color: "#944317" }}>PREVIOUS STEP</button>
            <button
              style={{ color: "#5C9210" }}
              onClick={this.props.showSelectLabs}
            >
              NEXT STEP
            </button>
          </FormControls>
          {/* <button onClick={this.testNextButton}> click me</button> */}
        </motion.div>
      </AnimatePresence>
    );
  }
}

export default Classrooms;
