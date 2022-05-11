import React, { PureComponent } from "react";

import { getServiceCourses, getServiceTitles } from "../../actions/ssqActions";
import PropTypes from "prop-types";
import Table from "./Table";
import TableControls from "./TableControls";
import { connect } from "react-redux";
import { getRelatedCourses } from "../../actions/ssqActions";
import { MenuItem } from "@mui/material";
import "./TechnicalStaff.css";
import InputLabel from "@mui/material/InputLabel";
// import MenuItem from '@mui/material/MenuItem';
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import _ from "lodash";

class TechnicalStaff extends PureComponent {
  constructor(props) {
    super(props);
    this.laboratories = ["Biochemistry Laboratory", "Instrumentation Room"];
    this.ranks = [
      "Chief Technologist",
      "Asst Chief Technologist",
      "Principal Technologist",
      "Senior Technologist",
      "Technologist I",
      "Technologist II",
      "Chief Technician",
      "Asst Chief Technician",
      "Principal Technician",
      "Senior Technician",
      "Technician I",
      "Technician II",
    ];
    this.courses = ["SLT", "Biochemistry", "Microbiology", "Chemistry"];
    this.technicalStaffHeaderList = [
      "id",
      "Name of Staff",
      "First Qualification",
      "Second Qualification",
      "Rank",
      "Laboratory To Mount",
    ];
    this.qualifications = ["ND", "HND", "Pgd", "Bsc", "Msc", "Phd"];
    this.state = {
      technicalStaff: [],
      technicalStaffTableRows: [],
    };
  }

  renderTableHeaderList = (tableHeaderList) => {
    return tableHeaderList.map((key, index) => {
      return <th key={index}>{key}</th>;
    });
  };
  deleteLastRow = () => {
    // e.preventDefault();

    if (this.state.technicalStaffTableRows.length > 1) {
      let technicalStaffTableRowsClone = [
        ...this.state.technicalStaffTableRows,
      ];
      technicalStaffTableRowsClone.pop();
      this.setState({ technicalStaffTableRows: technicalStaffTableRowsClone });

      var technicalStaffDataClone = [...this.state.technicalStaff];
      technicalStaffDataClone.pop();
      this.setState({ technicalStaff: technicalStaffDataClone });
    }
  };
  addRow = (tableHeaderList, stateData) => {
    var laboratories = this.laboratories.map((laboratory) => {
      return (
        <MenuItem key={Math.random} value={laboratory}>
          {laboratory}
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
    var ranks = this.ranks.map((rank) => {
      return (
        <MenuItem key={Math.random} value={rank}>
          {rank}
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
    let technicalStaffDataClone = [...this.state.technicalStaff];
    technicalStaffDataClone.push(rowData);
    console.log(rowData);
    //   serviceStaffData.push(rowData);
    console.log(technicalStaffDataClone);
    this.setState({ technicalStaff: technicalStaffDataClone }, () => {
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
                sx={{ m: 1, minWidth: 95, maxWidth: 140 }}
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
        } else if (data === "Rank") {
          return (
            <td key={data}>
              <FormControl
                variant="filled"
                sx={{ m: 1, minWidth: 95, maxWidth: 150 }}
                size="small"
              >
                <InputLabel id="demo-simple-select-filled-label">
                  Rank
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
                  {ranks}
                </Select>
              </FormControl>
            </td>
          );
        } else if (data === "Laboratory To Mount") {
          return (
            <td key={data}>
              <FormControl
                variant="filled"
                sx={{ m: 1, minWidth: 95, maxWidth: 150 }}
                size="small"
              >
                <InputLabel id="demo-simple-select-filled-label">
                  Laboratory To Mount
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
                  {laboratories}
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
      var technicalStaffTableRowsClone = [
        ...this.state.technicalStaffTableRows,
      ];
      var wrappedTableRow = <tr key={rowData["id"]}>{tableRow}</tr>;
      technicalStaffTableRowsClone.push(wrappedTableRow);

      this.setState({ technicalStaffTableRows: technicalStaffTableRowsClone });

      console.log(this.state.technicalStaffTableRows);
      // serviceStaffTableRows.push(wrappedTableRow);
      // console.log(this.state.serviceStaffTableRows);
      // this.setState({ serviceStaffTableRows: serviceStaffTableRows });

      //  this.selectTableToChangeState(TableNumber,rowData,wrappedTableRow,'INIT');
    });
  };
  handleChange = (row, column) => (e) => {
    var technicalStaffDataClone = [...this.state.technicalStaff];
    technicalStaffDataClone[row][column] = e.target.value;
    this.setState({ technicalStaff: technicalStaffDataClone });
  };
  handleQualificationsChange = (row, column, index) => (e) => {
    var technicalStaffDataClone = [...this.state.technicalStaff];
    console.log(technicalStaffDataClone);
    console.log(this.state.technicalStaff);
    console.log(technicalStaffDataClone[row][column]);

    if (technicalStaffDataClone[row][column] === "") {
      technicalStaffDataClone[row][column] = ["", "", ""];
      technicalStaffDataClone[row][column][index] = e.target.value;
    } else {
      technicalStaffDataClone[row][column][index] = e.target.value;
    }

    this.setState({ technicalStaff: technicalStaffDataClone });
  };

  initializeTable = (tableHeaderList) => {
    var laboratories = this.laboratories.map((laboratory) => {
      return (
        <MenuItem key={Math.random} value={laboratory}>
          {laboratory}
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
    var ranks = this.ranks.map((rank) => {
      return (
        <MenuItem key={Math.random} value={rank}>
          {rank}
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
    var technicalStaffData = [];

    console.log(rowData);
    technicalStaffData.push(rowData);
    console.log(technicalStaffData);
    this.setState({ technicalStaff: technicalStaffData }, () => {
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
                sx={{ m: 1, minWidth: 95, maxWidth: 140 }}
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
        } else if (data === "Rank") {
          return (
            <td key={data}>
              <FormControl
                variant="filled"
                sx={{ m: 1, minWidth: 95, maxWidth: 150 }}
                size="small"
              >
                <InputLabel id="demo-simple-select-filled-label">
                  Rank
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
                  {ranks}
                </Select>
              </FormControl>
            </td>
          );
        } else if (data === "Laboratory To Mount") {
          return (
            <td key={data}>
              <FormControl
                variant="filled"
                sx={{ m: 1, minWidth: 95, maxWidth: 160 }}
                size="small"
              >
                <InputLabel id="demo-simple-select-filled-label">
                  Laboratory To Mount
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
                  {laboratories}
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
      var technicalStaffTableRows = [];

      var wrappedTableRow = <tr key={rowData["id"]}>{tableRow}</tr>;
      console.log(this.state.technicalStaffTableRows);
      technicalStaffTableRows.push(wrappedTableRow);
      console.log(this.state.technicalStaffTableRows);
      this.setState({ technicalStaffTableRows: technicalStaffTableRows });

      //  this.selectTableToChangeState(TableNumber,rowData,wrappedTableRow,'INIT');
    });
  };
  componentDidMount() {
    this.initializeTable(this.technicalStaffHeaderList);
  }
  render() {
    return (
      <div className="container7">
        <h3>Technologist/Technicians</h3>
        <p>
          List all full time Technologicians/Technicians available exclusively
          for the Programme.
        </p>
        <Table>
          <tbody>
            <tr>{this.renderTableHeaderList(this.technicalStaffHeaderList)}</tr>
            {this.state.technicalStaffTableRows}
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
                this.technicalStaffHeaderList,
                this.state.technicalStaff
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
TechnicalStaff.propTypes = {
  relatedCourses: PropTypes.array.isRequired,
  laboratories: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => ({
  relatedCourses: state.ssq.relatedCourses,
  laboratories: state.ssq.laboratories,
});
export default connect(mapStateToProps)(TechnicalStaff);
