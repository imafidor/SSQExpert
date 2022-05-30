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
import TextField from "@mui/material/TextField";
import _ from "lodash";
import Stack from "@mui/material/Stack";
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
      laboratoryRows: {},
      laboratoriesData: {},
      labData: [],
      labWithEquipments: [],
      labSpecs: {},
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

  moveToNextStep = (labData, laboratories) => {
    this.props.setLaboratoriesData(labData, laboratories);
    this.props.nextStep();
  };
  deleteLastRow = (lab) => (e) => {
    e.preventDefault();
    // var Table = this.selectTable(TableNumber);
    //To be wrapped in switch statement
    if (this.state.laboratoryRows[lab].length > 1) {
      // let newArray = [...this.state.laboratoryRows[index]]

      var laboratoryRowsClone = { ...this.state.laboratoryRows };
      for (const key in this.state.laboratoryRows) {
        laboratoryRowsClone[key] = [...this.state.laboratoryRows[key]];
      }

      // var laboratoryRowsIndexClone = [...this.state.laboratoryRows[index]];
      // laboratoryRowsClone[index] = laboratoryRowsIndexClone;

      laboratoryRowsClone[lab].pop();
      // newArray.splice(-1,1);

      this.setState({ laboratoryRows: laboratoryRowsClone });
      var laboratoryDataClone = _.cloneDeep(this.state.laboratoriesData);

      // var laboratoryDataIndexClone = [...this.state.laboratoriesData[index]];
      // laboratoryDataClone[lab] = laboratoryDataIndexClone;
      laboratoryDataClone[lab].pop();

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
        this.state.laboratoriesData[laboratory][
          this.state.laboratoriesData[laboratory].length - 1
        ][item] + 1;
      if (item === "id") {
        // console.log(Table[0]);
        // console.log(Table[0].length);
        result[item] =
          this.state.laboratoriesData[laboratory][
            this.state.laboratoriesData[laboratory].length - 1
          ][item] + 1;
        return result;
      } else {
        result[item] = "";
        return result;
      }
    }, {});
    console.log(rowData);
    var laboratoryDataClone = { ...this.state.laboratoriesData };

    for (const key in this.state.laboratoriesData) {
      laboratoryDataClone[key] = [...this.state.laboratoriesData[key]];
    }
    laboratoryDataClone[laboratory].push(rowData);
    // if (typeof this.state.laboratoriesData[index] === "object") {
    // var arrayLaboratoryDataIndexClone = Object.values(
    // laboratoryDataIndexClone
    // );
    // arrayLaboratoryDataIndexClone.push(rowData);
    // laboratoryDataClone[index] = arrayLaboratoryDataIndexClone;
    // } else {
    // laboratoryDataIndexClone[index].push(rowData);
    // laboratoryDataClone[index] = laboratoryDataIndexClone;
    // }
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
                  onChange={this.handleRowChange(
                    rowData["id"] - 1,
                    data,
                    laboratory
                  )}
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
                  onChange={this.handleRowChange(
                    rowData["id"] - 1,
                    data,
                    laboratory
                  )}
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
                onChange={this.handleRowChange(
                  rowData["id"] - 1,
                  data,
                  laboratory
                )}
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

      var laboratoryRowsClone = { ...this.state.laboratoryRows };

      // var laboratoryRowsClone = { ...this.state.laboratoriesRows };

      for (const key in this.state.laboratoryRows) {
        laboratoryRowsClone[key] = [...this.state.laboratoryRows[key]];
      }
      laboratoryRowsClone[laboratory].push(wrappedTableRow);

      // var laboratoryRowsIndexClone = [...this.state.laboratoryRows[laboratory]];

      // if (typeof this.state.laboratoryRows[laboratory] === "object") {
      // var arrayLaboratoryRowsIndexClone = Object.values(
      // laboratoryRowsIndexClone
      // );
      // arrayLaboratoryRowsIndexClone.push(wrappedTableRow);
      // laboratoryRowsClone[laboratory] = arrayLaboratoryRowsIndexClone;
      // } else {
      // laboratoryRowsIndexClone.push(wrappedTableRow);
      // laboratoryRowsClone[laboratory] = arrayLaboratoryRowsIndexClone;
      // }

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
  handleRowChange = (row, column, lab) => (e) => {
    // e.preventDefault();
    var laboratoryDataClone = _.cloneDeep(this.state.laboratoriesData);
    // console.log(laboratoryDataClone[index]);

    // var pair = { [column]: e.target.value };
    // _.merge(laboratoryDataClone[index][row], pair);

    laboratoryDataClone[lab][row][column] = e.target.value;

    // laboratoryDataClone[lab][row][column] = e.target.value;
    this.setState({ laboratoriesData: laboratoryDataClone }, () => {
      setTimeout(() => console.log("timeout here"), 500);
    });
    // this.setState({item:event.target.value});
    console.log(this.state.item);

    console.log(this.state.laboratoriesData[lab][row][column]);
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
    // let laboratoriesDataClone = {...this.state.laboratoriesData};
    //  laboratoriesDataClone[lab]= [rowData]
    var arrayRowData = { [laboratory]: [rowData] };
    // laboratoriesData[lab]= [rowData];
    this.setState(
      (prevState) => ({
        laboratoriesData: { ...prevState.laboratoriesData, ...arrayRowData },
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
                    onChange={this.handleRowChange(
                      rowData["id"] - 1,
                      data,
                      laboratory
                    )}
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
            console.log(this.state.laboratoriesData[laboratory]);
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
                    onChange={this.handleRowChange(
                      rowData["id"] - 1,
                      data,
                      laboratory
                    )}
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
                  onChange={this.handleRowChange(
                    rowData["id"] - 1,
                    data,
                    laboratory
                  )}
                  // onChange={(e) =>
                  // this.handleChange(e, rowData["id"] - 1, data, index)
                  // }
                />
              </td>
            );
          }
        });
        var wrappedTableRow = <tr key={rowData["id"]}>{tableRow}</tr>;
        var arrayWrappedTableRow = { [laboratory]: [wrappedTableRow] };

        console.log(wrappedTableRow);
        console.log(rowData);
        // let laboratoryRowsClone = [...this.state.laboratoryRows]
        // laboratoryRowsClone[laboratory]= arrayWrappedTableRow
        // arr.splice(2, 0, "Lene");
        // arrayvar: [...this.state.arrayvar, newelement]

        this.setState((prevState) => ({
          laboratoryRows: {
            ...prevState.laboratoryRows,
            ...arrayWrappedTableRow,
          },
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
  handleChange = (lab) => (e) => {
    var labSpecsClone = _.cloneDeep(this.state.labSpecs);

    if (!(lab in this.state.labSpecs)) {
      labSpecsClone[lab] = {};
      labSpecsClone[lab][e.target.name] = e.target.value;
    } else {
      labSpecsClone[lab][e.target.name] = e.target.value;
    }

    // labSpecsClone[lab] = {};
    // [e.target.name] = e.target.value;
    this.setState({ labSpecs: labSpecsClone });
  };
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
    var tables = this.props.selectedLabs.map((lab, index) => {
      return (
        <div className="container3">
          <h3>{lab}</h3>
          <Stack spacing={2}>
            <TextField
              id="filled-basic"
              label="Area in (Meter Square)"
              variant="filled"
              type="number"
              name="Area"
              onChange={this.handleChange(lab)}
              defaultValue={0}
              sx={{
                minWidth: 95,
                maxWidth: 500,
                paddingLeft: 32,
                "& label": { marginLeft: 32 },
              }}
            />

            <TextField
              id="filled-basic"
              label="Capacity (Number of students)"
              variant="filled"
              type="number"
              name="Capacity"
              defaultValue={0}
              onChange={this.handleChange(lab)}
              sx={{
                minWidth: 95,
                maxWidth: 500,
                paddingLeft: 32,
                paddingBottom: 5,
                "& label": { marginLeft: 32 },
              }}
            />
          </Stack>
          <Table>
            <tbody key={index}>
              <tr key={index}>
                {this.renderTableHeaderList(this.table6and7HeaderList)}
              </tr>
              {this.state.laboratoryRows[lab]}
            </tbody>
          </Table>

          <TableControls>
            <button
              style={{ color: "#944317" }}
              onClick={this.deleteLastRow(lab)}
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
    console.log(this.state.labSpecs);
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
