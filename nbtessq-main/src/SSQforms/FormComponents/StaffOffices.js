import React, { PureComponent } from "react";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import _ from "lodash";
import TableControls from "./TableControls";
import Table from "./Table";
import "./StaffOffices.css";
import FormControls from "./FormControls";

class StaffOffices extends PureComponent {
  constructor(props) {
    super(props);
    this.table14HeaderList = [
      "id",
      "Office Description",
      "Size in (MeterSquare)",
      "Capacity (No of Lecturers)",
      "Remarks",
    ];
    this.state = {
      officeData: [],
      officeTableRows: [],
    };
  }
  // switch(type){
  // case("books"):return {table1Data:data,table1Rows:row}

  //  })}

  moveToNextStep = (staffOffices) => {
    this.props.setStaffOfficesData(staffOffices);
    this.props.nextStep();
  };
  selectTableToChangeState = (data, row, type) => {
    this.setState((state) => {
      return null;
    });
  };
  deleteLastRow = (e) => {
    e.preventDefault();

    if (this.state.officeTableRows.length > 1) {
      let officeTableRowsClone = _.cloneDeep(this.state.officeTableRows);
      officeTableRowsClone.pop();
      this.setState({ officeTableRows: officeTableRowsClone });

      var officeDataClone = _.cloneDeep(this.state.officeData);
      officeDataClone.pop();
      this.setState({ officeData: officeDataClone });
    }
  };
  addRow = (tableHeaderList) => (e) => {
    // e.preventDefault();
    var rowData = tableHeaderList.reduce((result, item) => {
      if (item === "id") {
        result[item] =
          this.state.officeData[this.state.officeData.length - 1][item] + 1;
        return result;
      } else {
        result[item] = "";
        return result;
      }
    }, {});
    console.log(rowData);
    let officeDataClone = _.cloneDeep(this.state.officeData);
    officeDataClone.push(rowData);
    this.setState({ officeData: officeDataClone }, () => {
      var tableRow = tableHeaderList.map((data) => {
        var dataIndex = tableHeaderList.findIndex((rank) => rank === data);
        console.log(dataIndex);
        if (data === "id") {
          return (
            <td key={data}>
              <input value={rowData[data]} readOnly />
            </td>
          );
        } else {
          return (
            <td key={data}>
              <input
                onChange={this.handleChange(rowData["id"] - 1, data)}
                row={rowData["id"] - 1}
                column={data}
                type={
                  data === "Capacity (No of Lecturers)" ||
                  data === "Size in (MeterSquare)"
                    ? "number"
                    : "text"
                }
              />
            </td>
          );
        }
      });
      var wrappedTableRow = <tr key={rowData["id"]}>{tableRow}</tr>;
      var officeTableRowsClone = _.cloneDeep(this.state.officeTableRows);
      officeTableRowsClone.push(wrappedTableRow);
      this.setState({ officeTableRows: officeTableRowsClone });
    });
  };
  renderTableHeaderList = (tableHeaderList) => {
    return tableHeaderList.map((key, index) => {
      return <th key={index}>{key}</th>;
    });
  };

  handleChange = (row, column) => (e) => {
    var officeDataClone = _.cloneDeep(this.state.officeData);
    officeDataClone[row][column] = e.target.value;
    this.setState({ officeData: officeDataClone });
  };
  initializeTable = (tableHeaderList) => {
    var rowData = tableHeaderList.reduce(function (result, item) {
      if (item === "id") {
        result[item] = 1;
        return result;
      } else {
        result[item] = "";
        return result;
      }
    }, {});
    var officeData = [];

    console.log(rowData);
    officeData.push(rowData);
    this.setState({ officeData: officeData }, () => {
      var tableRow = tableHeaderList.map((data) => {
        //var dataIndex = tableHeaderList.findIndex(rank=> rank === data);
        //console.log(dataIndex);
        if (data === "id") {
          return (
            <td key={data}>
              <input value={rowData[data]} readOnly />
            </td>
          );
        } else {
          return (
            <td key={data}>
              <input
                onChange={this.handleChange(rowData["id"] - 1, data)}
                row={rowData["id"] - 1}
                column={data}
                type={
                  data === "Capacity (No of Lecturers)" ||
                  data === "Size in (MeterSquare)"
                    ? "number"
                    : "text"
                }
                // value={this.state.officeData[rowData["id"] - 1][data]}
              />
            </td>
          );
        }
      });
      var officeTableRows = [];

      var wrappedTableRow = <tr key={rowData["id"]}>{tableRow}</tr>;
      officeTableRows.push(wrappedTableRow);

      this.setState({ officeTableRows: officeTableRows });

      //  this.selectTableToChangeState(TableNumber,rowData,wrappedTableRow,'INIT');
    });
  };
  componentDidMount() {
    this.initializeTable(this.table14HeaderList);
  }
  render() {
    return (
      <AnimatePresence>
        <div
          className="container4"
          initial={{ scale: 0 }}
          animate={{ scale: 1, transition: { duration: 0.3 } }}
          exit={{ scale: 0, transition: { delay: 0.6 } }}
        >
          <motion.h3
            initial={{ x: 500, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { delay: 0.3, duration: 0.3 },
            }}
            exit={{ x: -500, opacity: 0 }}
          >
            {" "}
            Office Accommodation
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
            Provide the following information on offices (including Departmental
            office) available to the proposed programme.
          </motion.p>
          <Table>
            <tbody>
              <tr>{this.renderTableHeaderList(this.table14HeaderList)}</tr>
              {this.state.officeTableRows}
            </tbody>
          </Table>
          <TableControls>
            <button style={{ color: "#944317" }} onClick={this.deleteLastRow}>
              DELETE LAST ROW
            </button>
            <button
              style={{ color: "#5C9210" }}
              onClick={this.addRow(this.table14HeaderList)}
            >
              ADD ROW
            </button>
          </TableControls>
          <FormControls wide={true}>
            <button
              style={{ color: "#944317" }}
              onClick={this.props.previousStep}
            >
              PREVIOUS STEP
            </button>
            <button
              style={{ color: "#5C9210" }}
              onClick={() => this.moveToNextStep(this.state.officeData)}
            >
              NEXT STEP
            </button>
          </FormControls>
        </div>
      </AnimatePresence>
    );
  }
}

export default StaffOffices;
