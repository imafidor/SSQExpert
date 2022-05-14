import React, { Component } from "react";

import Table from "./Table";
import TableControls from "./TableControls";

import { MenuItem } from "@mui/material";
import "./AdministrativeStaff.css";
import InputLabel from "@mui/material/InputLabel";
// import MenuItem from '@mui/material/MenuItem';
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

class AdministrativeStaff extends Component {
  constructor(props) {
    super(props);
    this.courses = [
      "Office Technology Management",
      "Secretariat Studies",
      "Business Studies",
      "Computer Science",
    ];
    this.appointments = ["Secretary", "Clerical Officer", "Messenger"];
    this.administrativeStaffHeaderList = [
      "id",
      "Name of Staff",
      "First Qualification",
      "Second Qualification",
      "Appointment",
    ];
    this.qualifications = ["SSCE", "ND", "HND", "Pgd", "Bsc", "Msc", "Phd"];
    this.state = {
      administrativeStaff: [],
      administrativeStaffTableRows: [],
    };
  }
  deleteLastRow = () => {
    // e.preventDefault();

    if (this.state.administrativeStaffTableRows.length > 1) {
      let administrativeStaffTableRowsClone = [
        ...this.state.administrativeStaffTableRows,
      ];
      administrativeStaffTableRowsClone.pop();
      this.setState({
        administrativeStaffTableRows: administrativeStaffTableRowsClone,
      });

      var administrativeStaffDataClone = [...this.state.administrativeStaff];
      administrativeStaffDataClone.pop();
      this.setState({ administrativeStaff: administrativeStaffDataClone });
    }
  };
  addRow = (tableHeaderList, stateData) => {
    var appointments = this.appointments.map((appointment) => {
      return (
        <MenuItem key={Math.random} value={appointment}>
          {appointment}
        </MenuItem>
      );
    });
    var courses = this.courses.map((course) => {
      return (
        <MenuItem key={Math.random} value={course}>
          {course}
        </MenuItem>
      );
    });

    var qualifications = this.qualifications.map((qualification) => {
      return (
        <MenuItem key={Math.random} value={qualification}>
          {qualification}
        </MenuItem>
      );
    });
    var years = [];
    let currentYear = new Date().getFullYear();
    let earliestYear = 1970;
    for (let i = earliestYear; i <= currentYear; i++) {
      years.push(
        <MenuItem key={Math.random} value={i}>
          {i}
        </MenuItem>
      );
    }
    var rowData = tableHeaderList.reduce(function (result, item) {
      if (item === "id") {
        result[item] = stateData[stateData.length - 1][item] + 1;
        return result;
      } else {
        result[item] = "";
        return result;
      }
    }, []);
    //   var serviceStaffData = [];
    let administrativeStaffDataClone = [...this.state.administrativeStaff];
    administrativeStaffDataClone.push(rowData);
    console.log(rowData);
    //   serviceStaffData.push(rowData);
    console.log(administrativeStaffDataClone);
    this.setState({ administrativeStaff: administrativeStaffDataClone }, () => {
      var tableRow = tableHeaderList.map((data) => {
        //var dataIndex = tableHeaderList.findIndex(rank=> rank === data);
        //console.log(dataIndex);
        if (data === "id") {
          return (
            <td key={data}>
              <input value={rowData[data]} size="2" readOnly />
            </td>
          );
        } else if (
          data === "First Qualification" ||
          data === "Second Qualification"
        ) {
          return (
            <td key={data} className="qualificaton">
              {" "}
              <FormControl
                variant="filled"
                sx={{ m: 1, minWidth: 95, maxWidth: 120 }}
                size="small"
              >
                <InputLabel id="demo-simple-select-filled-label">
                  Title
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  // (e) => this.props.handleChange("tags", e)
                  onChange={this.handleQualificationsChange(
                    rowData["id"] - 1,
                    data,
                    0
                  )}
                  // value={stateData[rowData["id"] - 1][data]}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {qualifications}
                </Select>
              </FormControl>
              <FormControl
                variant="filled"
                sx={{ m: 1, minWidth: 95, maxWidth: 200 }}
                size="small"
              >
                <InputLabel id="demo-simple-select-filled-label">
                  Course
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  // (e) => this.props.handleChange("tags", e)
                  onChange={this.handleQualificationsChange(
                    rowData["id"] - 1,
                    data,
                    1
                  )}
                  // value={stateData[rowData["id"] - 1][data]}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {courses}
                </Select>
              </FormControl>
              <FormControl
                variant="filled"
                sx={{ m: 1, minWidth: 95, maxWidth: 120 }}
                size="small"
              >
                <InputLabel id="demo-simple-select-filled-label">
                  Year
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  // (e) => this.props.handleChange("tags", e)
                  onChange={this.handleQualificationsChange(
                    rowData["id"] - 1,
                    data,
                    2
                  )}
                  // value={stateData[rowData["id"] - 1][data]}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {years}
                </Select>
              </FormControl>
            </td>
          );
        } else if (data === "Appointment") {
          return (
            <td key={data}>
              <FormControl
                variant="filled"
                sx={{ m: 1, minWidth: 95, maxWidth: 160 }}
                size="small"
              >
                <InputLabel id="demo-simple-select-filled-label">
                  Appointment
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  // (e) => this.props.handleChange("tags", e)
                  onChange={this.handleChange(rowData["id"] - 1, data)}
                  // value={stateData[rowData["id"] - 1][data]}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {appointments}
                </Select>
              </FormControl>
            </td>
          );
        } else {
          return (
            <td key={data}>
              <input
                onChange={this.handleChange(rowData["id"] - 1, data)}
                row={rowData["id"] - 1}
                column={data}
                type="text"
              />
            </td>
          );
        }
      });
      // var serviceStaffTableRows = [];
      var administrativeStaffTableRowsClone = [
        ...this.state.administrativeStaffTableRows,
      ];
      var wrappedTableRow = <tr key={rowData["id"]}>{tableRow}</tr>;
      administrativeStaffTableRowsClone.push(wrappedTableRow);

      this.setState({
        administrativeStaffTableRows: administrativeStaffTableRowsClone,
      });

      console.log(this.state.administrativeStaffTableRows);
      // serviceStaffTableRows.push(wrappedTableRow);
      // console.log(this.state.serviceStaffTableRows);
      // this.setState({ serviceStaffTableRows: serviceStaffTableRows });

      //  this.selectTableToChangeState(TableNumber,rowData,wrappedTableRow,'INIT');
    });
  };
  renderTableHeaderList = (tableHeaderList) => {
    return tableHeaderList.map((key, index) => {
      return <th key={index}>{key}</th>;
    });
  };
  handleChange = (row, column) => (e) => {
    var administrativeStaffDataClone = [...this.state.administrativeStaff];
    administrativeStaffDataClone[row][column] = e.target.value;
    this.setState({ administrativeStaff: administrativeStaffDataClone });
  };
  handleQualificationsChange = (row, column, index) => (e) => {
    var administrativeStaffDataClone = [...this.state.administrativeStaff];
    console.log(administrativeStaffDataClone);
    console.log(this.state.administrativeStaff);
    console.log(administrativeStaffDataClone[row][column]);

    if (administrativeStaffDataClone[row][column] === "") {
      administrativeStaffDataClone[row][column] = ["", "", ""];
      administrativeStaffDataClone[row][column][index] = e.target.value;
    } else {
      administrativeStaffDataClone[row][column][index] = e.target.value;
    }

    this.setState({ administrativeStaff: administrativeStaffDataClone });
  };

  initializeTable = (tableHeaderList) => {
    var appointments = this.appointments.map((appointment) => {
      return (
        <MenuItem key={Math.random} value={appointment}>
          {appointment}
        </MenuItem>
      );
    });
    var courses = this.courses.map((course) => {
      return (
        <MenuItem key={Math.random} value={course}>
          {course}
        </MenuItem>
      );
    });

    var qualifications = this.qualifications.map((qualification) => {
      return (
        <MenuItem key={Math.random} value={qualification}>
          {qualification}
        </MenuItem>
      );
    });
    var years = [];
    let currentYear = new Date().getFullYear();
    let earliestYear = 1970;
    for (let i = earliestYear; i <= currentYear; i++) {
      years.push(
        <MenuItem key={Math.random} value={i}>
          {i}
        </MenuItem>
      );
    }
    var rowData = tableHeaderList.reduce(function (result, item) {
      if (item === "id") {
        result[item] = 1;
        return result;
      } else {
        result[item] = "";
        return result;
      }
    }, []);
    var administrativeStaffData = [];

    console.log(rowData);
    administrativeStaffData.push(rowData);
    console.log(administrativeStaffData);
    this.setState({ administrativeStaff: administrativeStaffData }, () => {
      var tableRow = tableHeaderList.map((data) => {
        //var dataIndex = tableHeaderList.findIndex(rank=> rank === data);
        //console.log(dataIndex);
        if (data === "id") {
          return (
            <td key={data}>
              <input value={rowData[data]} size="2" readOnly />
            </td>
          );
        } else if (
          data === "First Qualification" ||
          data === "Second Qualification"
        ) {
          return (
            <td key={data} className="qualificaton">
              {" "}
              <FormControl
                variant="filled"
                sx={{ m: 1, minWidth: 95, maxWidth: 120 }}
                size="small"
              >
                <InputLabel id="demo-simple-select-filled-label">
                  Title
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  // (e) => this.props.handleChange("tags", e)
                  onChange={this.handleQualificationsChange(
                    rowData["id"] - 1,
                    data,
                    0
                  )}
                  // value={stateData[rowData["id"] - 1][data]}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {qualifications}
                </Select>
              </FormControl>
              <FormControl
                variant="filled"
                sx={{ m: 1, minWidth: 95, maxWidth: 200 }}
                size="small"
              >
                <InputLabel id="demo-simple-select-filled-label">
                  Course
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  // (e) => this.props.handleChange("tags", e)
                  onChange={this.handleQualificationsChange(
                    rowData["id"] - 1,
                    data,
                    1
                  )}
                  // value={stateData[rowData["id"] - 1][data]}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {courses}
                </Select>
              </FormControl>
              <FormControl
                variant="filled"
                sx={{ m: 1, minWidth: 95, maxWidth: 120 }}
                size="small"
              >
                <InputLabel id="demo-simple-select-filled-label">
                  Year
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  // (e) => this.props.handleChange("tags", e)
                  onChange={this.handleQualificationsChange(
                    rowData["id"] - 1,
                    data,
                    2
                  )}
                  // value={stateData[rowData["id"] - 1][data]}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {years}
                </Select>
              </FormControl>
            </td>
          );
        } else if (data === "Appointment") {
          return (
            <td key={data}>
              <FormControl
                variant="filled"
                sx={{ m: 1, minWidth: 95, maxWidth: 160 }}
                size="small"
              >
                <InputLabel id="demo-simple-select-filled-label">
                  Appointment
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  // (e) => this.props.handleChange("tags", e)
                  onChange={this.handleChange(rowData["id"] - 1, data)}
                  // value={stateData[rowData["id"] - 1][data]}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {appointments}
                </Select>
              </FormControl>
            </td>
          );
        } else {
          return (
            <td key={data}>
              <input
                onChange={this.handleChange(rowData["id"] - 1, data)}
                row={rowData["id"] - 1}
                column={data}
                type="text"
              />
            </td>
          );
        }
      });
      var administrativeStaffTableRows = [];

      var wrappedTableRow = <tr key={rowData["id"]}>{tableRow}</tr>;
      console.log(this.state.administrativeStaffTableRows);
      administrativeStaffTableRows.push(wrappedTableRow);
      console.log(this.state.administrativeStaffTableRows);
      this.setState({
        administrativeStaffTableRows: administrativeStaffTableRows,
      });

      //  this.selectTableToChangeState(TableNumber,rowData,wrappedTableRow,'INIT');
    });
  };

  componentDidMount() {
    this.initializeTable(this.administrativeStaffHeaderList);
  }
  render() {
    return (
      <div className="container8">
        <h3>Administrative Staff</h3>
        <p>
          List all administratve staff in the department in order of seniority
        </p>
        <Table>
          <tbody>
            <tr>
              {this.renderTableHeaderList(this.administrativeStaffHeaderList)}
            </tr>
            {this.state.administrativeStaffTableRows}
          </tbody>
        </Table>
        <TableControls>
          <button
            style={{ color: "#944317" }}
            onClick={() => this.deleteLastRow()}
          >
            DELETE LAST ROW
          </button>
          <button
            style={{ color: "#5C9210" }}
            onClick={() =>
              this.addRow(
                this.administrativeStaffHeaderList,
                this.state.administrativeStaff
              )
            }
          >
            ADD ROW
          </button>
        </TableControls>
      </div>
    );
  }
}

export default AdministrativeStaff;
