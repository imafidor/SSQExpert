import React, { Component, PureComponent } from "react";
import "./Laboratories.css";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import Table from "./Table";
import TableControls from "./TableControls";
import { connect } from "react-redux";
import { getLabEquipments } from "../../actions/ssqActions";
import { MenuItem } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
// import MenuItem from '@mui/material/MenuItem';
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import _ from "lodash";
import PropTypes from "prop-types";
import FormControls from "./FormControls";

// import {getSelectedLabs} from "../../actions/ssqActions";

class Laboratories extends PureComponent {
  constructor(props) {
    super(props);
    this.workingConditionOptions = [
      "Functional",
      "Non Functional",
      "Installed",
      "Not Installed",
    ];
    this.table6and7HeaderList = [
      "id",
      "Item Description and Model",
      "Quantity",
      "Working Condition",
    ];
    this.state = {
      unchanged: true,
      laboratoryRows: [],
      laboratoriesData: [],
      labData: [],
      labWithEquipments: [],
      item: "",
      laboratories: ["Biochemistry Laboratory", "Instrumentation Room"],
    };
    // this.handleChange = this.handleChange.bind(this)
  }
  renderTableHeaderList = (tableHeaderList) => {
    return tableHeaderList.map((key, index) => {
      return <th key={index}>{key}</th>;
    });
  };
  // componentWillReceiveProps(nextProps){
  //let labWithEquipments= nextProps.labWithEquipments
  //console.log(labWithEquipments);
  // this.setState({labWithEquipments:labWithEquipments});
  // }
  deleteLastRow = (index) => (e) => {
    e.preventDefault();
    // var Table = this.selectTable(TableNumber);
    //To be wrapped in switch statement
    if (this.state.laboratoryRows[index].length > 1) {
      // let newArray = [...this.state.laboratoryRows[index]]

      var laboratoryRowsClone = [...this.state.laboratoryRows];
      var laboratoryRowsIndexClone = [...this.state.laboratoryRows[index]];
      laboratoryRowsClone[index] = laboratoryRowsIndexClone;

      laboratoryRowsClone[index].pop();
      // newArray.splice(-1,1);

      this.setState({ laboratoryRows: laboratoryRowsClone });
      var laboratoryDataClone = [...this.state.laboratoriesData];
      var laboratoryDataIndexClone = [...this.state.laboratoriesData[index]];
      laboratoryDataClone[index] = laboratoryDataIndexClone;
      laboratoryDataClone[index].pop();

      // let newTableDataArray= [...this.state.laboratoriesData[index]];
      //  newTableDataArray.splice(-1, 1);
      //    [...state.labWithEquipments, action.payload]
      this.setState({ laboratoriesData: laboratoryDataClone });
      // this.selectTableToChangeState(TableNumber,newTableDataArray,newArray,'DEL');
    }
  };

  addRow = (tableHeaderList, laboratory, index) => (e) => {
    // e.preventDefault();

    var labItems = this.state.labWithEquipments[laboratory].map((labItem) => {
      return <MenuItem value={labItem}>{labItem}</MenuItem>;
    });

    var workingConditionOptions = this.workingConditionOptions.map((item) => {
      return <MenuItem value={item}>{item}</MenuItem>;
    });
    // var Table = this.selectTable(TableNumber);
    var rowData = tableHeaderList.reduce((result, item) => {
      var specificIndex =
        this.state.laboratoriesData[index][
          this.state.laboratoriesData[index].length - 1
        ][item] + 1;
      if (item === "id") {
        // console.log(Table[0]);
        // console.log(Table[0].length);
        result[item] =
          this.state.laboratoriesData[index][
            this.state.laboratoriesData[index].length - 1
          ][item] + 1;
        return result;
      } else {
        result[item] = "";
        return result;
      }
    }, {});
    console.log(rowData);
    var laboratoryDataClone = [...this.state.laboratoriesData];
    var laboratoryDataIndexClone = [...this.state.laboratoriesData[index]];
    if (typeof this.state.laboratoriesData[index] === "object") {
      var arrayLaboratoryDataIndexClone = Object.values(
        laboratoryDataIndexClone
      );
      arrayLaboratoryDataIndexClone.push(rowData);
      laboratoryDataClone[index] = arrayLaboratoryDataIndexClone;
    } else {
      laboratoryDataIndexClone[index].push(rowData);
      laboratoryDataClone[index] = laboratoryDataIndexClone;
    }
    this.setState({ laboratoriesData: laboratoryDataClone }, () => {
      var tableRow = tableHeaderList.map((data) => {
        var dataIndex = tableHeaderList.findIndex((rank) => rank === data);
        console.log(dataIndex);
        if (data === "id") {
          return (
            <td key={Math.random()}>
              <input value={rowData[data]} readOnly />
            </td>
          );
        } else if (data === "Item Description and Model") {
          return (
            <td key={Math.random()}>
              {" "}
              <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-filled-label">
                  Item
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  // value={
                  // this.state.laboratoriesData[index][rowData["id"] - 1][data]
                  // }
                  onChange={this.handleChange(rowData["id"] - 1, data, index)}
                  // onChange={(e) =>
                  // this.handleChange(e, rowData["id"] - 1, data, index)
                  // }
                  //  native= {true}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {labItems}
                </Select>
              </FormControl>
            </td>
          );
        } else if (data === "Working Condition") {
          return (
            <td key={Math.random()}>
              {" "}
              <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-filled-label">
                  Working Condition
                </InputLabel>
                <Select
                  key={Math.random()}
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  // value={
                  // this.state.laboratoriesData[index][rowData["id"] - 1][data]
                  // }
                  onChange={this.handleChange(rowData["id"] - 1, data, index)}
                  // onChange={(e) =>
                  // this.handleChange(e, rowData["id"] - 1, data, index)
                  // }
                  //  native={true}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>

                  {/* "","Installed", "Not Installed" */}
                  {workingConditionOptions}
                </Select>
              </FormControl>
            </td>
          );
        } else {
          return (
            <td key={Math.random()}>
              <input
                key={Math.random()}
                type="number"
                onChange={this.handleChange(rowData["id"] - 1, data, index)}
                // onChange={(e) =>
                // this.handleChange(e, rowData["id"] - 1, data, index)
                // }
                // value={
                // this.state.laboratoriesData[index][rowData["id"] - 1][data]
                // }
                row={rowData["id"] - 1}
                column={data}
              />
            </td>
          );
        }
      });
      var wrappedTableRow = <tr key={rowData["id"]}>{tableRow}</tr>;

      //To be wrapped in switch case statement

      var laboratoryRowsClone = [...this.state.laboratoryRows];
      var laboratoryRowsIndexClone = [...this.state.laboratoryRows[index]];
      if (typeof this.state.laboratoryRows[index] === "object") {
        var arrayLaboratoryRowsIndexClone = Object.values(
          laboratoryRowsIndexClone
        );
        arrayLaboratoryRowsIndexClone.push(wrappedTableRow);
        laboratoryRowsClone[index] = arrayLaboratoryRowsIndexClone;
      } else {
        laboratoryRowsIndexClone.push(wrappedTableRow);
        laboratoryRowsClone[index] = arrayLaboratoryRowsIndexClone;
      }

      this.setState({ laboratoryRows: laboratoryRowsClone });
    });
  };
  // handleCheckChange = (event) => {
  // this.setState({programme:event.target.value});
  // };
  setStateAsync = (state) => {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  };
  // valueFromFunction = (row, column, index) => (e) => {
  // return new Promise((resolve) => {
  // let laboratoriesData
  // this.setState(
  // (state) => {
  // laboratoriesData = state.laboratoriesData;
  // var laboratoryDataClone = _.cloneDeep(state.laboratoriesData);
  // var pair = { [column]: e.target.value };
  // _.merge(laboratoryDataClone[index][row], pair);
  // return {
  // laboratoriesData: laboratoryDataClone,
  // };
  // },
  // () => resolve(this.state.laboratoriesData[index][row][column])
  // );
  // });
  // };
  // getValue = async (row, column, index) => e =>{
  // return await this.valueFromFunction(e, row, column, index);
  // };
  handleChange = (row, column, index) => (e) => {
    // e.preventDefault();
    var laboratoryDataClone = [...this.state.laboratoriesData];
    // console.log(laboratoryDataClone[index]);

    // var pair = { [column]: e.target.value };
    // _.merge(laboratoryDataClone[index][row], pair);
    laboratoryDataClone[index][row][column] = e.target.value;
    this.setState({ laboratoriesData: laboratoryDataClone }, () => {
      setTimeout(() => console.log("timeout here"), 500);
    });

    // this.setState({item:event.target.value});
    console.log(this.state.item);

    console.log(this.state.laboratoriesData[index][row][column]);
    //
    // this.setState({laboratoriesData:laboratoryDataClone});
    console.log(this.state.laboratoriesData);
    // this.setState({unchanged:false});

    // this.setState({laboratoriesData:[...this.state.laboratoriesData, laboratoryDataClone]})
  };

  initializeTable = (tableHeaderList, laboratory, index) => {
    console.log(this.state.labWithEquipments);
    var labItems = this.state.labWithEquipments[laboratory].map(
      (labItem, i) => {
        return (
          <MenuItem key={Math.random} value={labItem}>
            {labItem}
          </MenuItem>
        );
      }
    );

    var workingConditionOptions = this.workingConditionOptions.map(
      (item, j) => {
        return (
          <MenuItem key={Math.random} value={item}>
            {item}
          </MenuItem>
        );
      }
    );

    var rowData = tableHeaderList.reduce(function (result, item) {
      if (item === "id") {
        result[item] = 1;
        return result;
      } else {
        result[item] = "";
        return result;
      }
    }, {});
    console.log(rowData);
    var arrayRowData = [rowData];

    this.setState(
      (prevState) => ({
        laboratoriesData: [...prevState.laboratoriesData, arrayRowData],
      }),
      () => {
        var tableRow = tableHeaderList.map((data) => {
          //var dataIndex = tableHeaderList.findIndex(rank=> rank === data);
          //console.log(dataIndex);
          if (data === "id") {
            return (
              <td key={Math.random()}>
                <input value={rowData[data]} readOnly />
              </td>
            );
          } else if (data === "Item Description and Model") {
            console.log(this.state.laboratoriesData.length);
            return (
              <td key={Math.random()}>
                {" "}
                <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-filled-label">
                    Item
                  </InputLabel>
                  <Select
                    key={Math.random()}
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    onChange={this.handleChange(rowData["id"] - 1, data, index)}
                    // value={
                    // this.state.laboratoriesData[index][rowData["id"] - 1][
                    // data
                    // ]
                    // }
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {labItems}
                  </Select>
                </FormControl>
              </td>
            );
          } else if (data === "Working Condition") {
            console.log(this.state.laboratoriesData[index]);
            return (
              <td key={Math.random()}>
                {" "}
                <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-filled-label">
                    Working Condition
                  </InputLabel>
                  <Select
                    key={Math.random()}
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    onChange={this.handleChange(rowData["id"] - 1, data, index)}
                    // onChange={(e) =>
                    // this.handleChange(e, rowData["id"] - 1, data, index)
                    // }
                    // value={
                    // this.state.laboratoriesData[index][rowData["id"] - 1][
                    // data
                    // ]
                    // }
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>

                    {workingConditionOptions}
                  </Select>
                </FormControl>
              </td>
            );
          }
          //  value={this.state.laboratoriesData[index][rowData['id'] - 1][data]}
          else {
            return (
              <td key={data}>
                <input
                  key={Math.random()}
                  // value={
                  // this.state.laboratoriesData[index][rowData["id"] - 1][data]
                  // }
                  type="number"
                  row={rowData["id"] - 1}
                  column={data}
                  onChange={this.handleChange(rowData["id"] - 1, data, index)}
                  // onChange={(e) =>
                  // this.handleChange(e, rowData["id"] - 1, data, index)
                  // }
                />
              </td>
            );
          }
        });
        var wrappedTableRow = <tr key={rowData["id"]}>{tableRow}</tr>;
        var arrayWrappedTableRow = [wrappedTableRow];

        console.log(wrappedTableRow);
        console.log(rowData);
        // arr.splice(2, 0, "Lene");
        // arrayvar: [...this.state.arrayvar, newelement]
        this.setState((prevState) => ({
          laboratoryRows: [...prevState.laboratoryRows, arrayWrappedTableRow],
        }));
      }
    );

    // this.setState({laboratoryRows:[...this.state.laboratoryRows,arrayWrappedTableRow],laboratoriesData:[...this.state.laboratoriesData,arrayRowData]});
  };

  componentWillReceiveProps(nextProps) {
    // var num=0;
    if (nextProps.labWithEquipments) {
      console.log(nextProps.labWithEquipments);

      this.setState({ labWithEquipments: nextProps.labWithEquipments }, () => {
        this.state.laboratories.forEach((lab, index) => {
          this.initializeTable(this.table6and7HeaderList, lab, index);
        });
      });
    }
  }

  componentDidUpdate() {
    // this.renderClassroomTableRows()
    // console.log(this.props)
  }

  render() {
    console.log(this.state.labWithEquipments);
    console.log(this.state.laboratoryRows);
    console.log(this.state.laboratoriesData);
    console.log(this.state.laboratoryRows[0]);
    console.log(typeof this.state.laboratoryRows[0]);
    console.log(this.state.laboratoryRows[1]);
    console.log(this.state.laboratoriesData[0]);
    console.log(this.state.laboratoriesData[1]);
    var tables = this.state.laboratories.map((lab, index) => {
      return (
        <div className="container3">
          <h3>{lab}</h3>
          <Table>
            <tbody key={index}>
              <tr key={index}>
                {this.renderTableHeaderList(this.table6and7HeaderList)}
              </tr>
              {this.state.laboratoryRows[index]}
            </tbody>
          </Table>

          <TableControls>
            <button
              style={{ color: "#944317" }}
              onClick={this.deleteLastRow(index)}
            >
              DELETE LAST ROW
            </button>
            <button
              style={{ color: "#5C9210" }}
              onClick={this.addRow(this.table6and7HeaderList, lab, index)}
            >
              ADD ROW
            </button>
          </TableControls>
        </div>
      );
    });
    console.log(this.state.laboratoryRows);
    console.log(this.state.laboratoriesData);

    return (
      <AnimatePresence>
        <div className="container3">
          <motion.h3
            initial={{ x: 500, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { delay: 0.3, duration: 0.3 },
            }}
            exit={{ x: -500, opacity: 0 }}
          >
            Dedicated Facilities for Proposed Programme
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
            Provide the following information on laboratories,workshop and
            studios available exclusively for the new programme.{" "}
          </motion.p>
          {tables}
          <FormControls wide={true}>
            <button style={{ color: "#944317" }}>PREVIOUS STEP</button>
            <button style={{ color: "#5C9210" }}>NEXT STEP</button>
          </FormControls>
        </div>
      </AnimatePresence>
    );
  }
}

Laboratories.propTypes = {
  getLabEquipments: PropTypes.func.isRequired,
  labWithEquipments: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  labWithEquipments: state.ssq.labWithEquipments,
});
export default connect(mapStateToProps, { getLabEquipments })(Laboratories);
