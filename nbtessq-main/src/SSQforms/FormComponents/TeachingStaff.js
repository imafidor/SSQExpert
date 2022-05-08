import React, { PureComponent } from "react";
import { getCoreSpecializations } from "../../actions/ssqActions";
import PropTypes from "prop-types";
import Table from "./Table";
import TableControls from "./TableControls";
import { connect } from "react-redux";
import { getRelatedCourses } from "../../actions/ssqActions";
import { MenuItem } from "@mui/material";
import "./TeachingStaff.css";
import InputLabel from "@mui/material/InputLabel";
// import MenuItem from '@mui/material/MenuItem';
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import _ from "lodash";

class TeachingStaff extends PureComponent {
  constructor(props) {
    super(props);
    this.teachingStaffHeaderList = [
      "id",
      "Name of Staff",
      "First Qualification",
      "Second Qualification",
      "Third Qualification",
      "Rank",
    ];
    this.ranks = [
      "Higher Instructor",
      "Principal Instructor II",
      "Principal Instructor",
      "Asst Chief Instructor",
      "Chief Instructor",
      "Asst Lecturer",
      "Lecturer III",
      "Lecturer II",
      "Lecturer I",
      "Senior Lecturer",
      "Principal Lecturer",
      "Chief Lecturer",
    ];
    this.qualifications = ["ND", "HND", "Pgd", "Bsc", "Msc", "Phd"];
    this.state = {
      courses: [],
      teachingStaff: [],
      teachingStaffTableRows: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.relatedCourses) {
      this.setState({ courses: nextProps.relatedCourses }, () => {
        this.initializeTable(this.teachingStaffHeaderList);
      });
    }
  }
  renderTableHeaderList = (tableHeaderList) => {
    return tableHeaderList.map((key, index) => {
      return <th key={index}>{key}</th>;
    });
  };
  deleteLastRow = (e) => {
    // e.preventDefault();

    if (this.state.teachingStaffTableRows.length > 1) {
      let teachingStaffTableRowsClone = [...this.state.teachingStaffTableRows];
      teachingStaffTableRowsClone.pop();
      this.setState({ teachingStaffTableRows: teachingStaffTableRowsClone });

      var teachingStaffDataClone = [...this.state.teachingStaff];
      teachingStaffDataClone.pop();
      this.setState({ teachingStaff: teachingStaffDataClone });
    }
  };

  handleChange = (row, column) => (e) => {
    var teachingStaffDataClone = [...this.state.teachingStaff];
    teachingStaffDataClone[row][column] = e.target.value;
    this.setState({ teachingStaff: teachingStaffDataClone });
  };
  handleQualificationsChange = (row, column, index) => (e) => {
    var teachingStaffDataClone = [...this.state.teachingStaff];
    console.log(teachingStaffDataClone);
    console.log(this.state.teachingStaff);
    console.log(teachingStaffDataClone[row][column]);

    if (teachingStaffDataClone[row][column] === "") {
      teachingStaffDataClone[row][column] = ["", "", ""];
      teachingStaffDataClone[row][column][index] = e.target.value;
    } else {
      teachingStaffDataClone[row][column][index] = e.target.value;
    }

    this.setState({ teachingStaff: teachingStaffDataClone });
  };
  addRow = (tableHeaderList, stateData) => {
    var courses = this.state.courses.map((course) => {
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
    var teachingStaffData = [];
    let teachingStaffDataClone = [...this.state.teachingStaff];
    teachingStaffDataClone.push(rowData);
    console.log(rowData);

    this.setState({ teachingStaff: teachingStaffDataClone }, () => {
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
          data === "Second Qualification" ||
          data === "Third Qualification"
        ) {
          return (
            <td key={data} className="qualificaton">
              {" "}
              <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
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
              <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
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
              <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
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
              <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
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
      // var teachingStaffTableRows = [];

      var wrappedTableRow = <tr key={rowData["id"]}>{tableRow}</tr>;
      console.log(this.state.teachingStaffTableRows);
      // teachingStaffTableRows.push(wrappedTableRow);
      console.log(this.state.teachingStaffTableRows);
      var teachingStaffTableRowsClone = [...this.state.teachingStaffTableRows];
      teachingStaffTableRowsClone.push(wrappedTableRow);
      this.setState({ teachingStaffTableRows: teachingStaffTableRowsClone });

      //  this.selectTableToChangeState(TableNumber,rowData,wrappedTableRow,'INIT');
    });
  };
  initializeTable = (tableHeaderList) => {
    var courses = this.state.courses.map((course) => {
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
    var teachingStaffData = [];

    console.log(rowData);
    teachingStaffData.push(rowData);
    console.log(teachingStaffData);
    this.setState({ teachingStaff: teachingStaffData }, () => {
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
          data === "Second Qualification" ||
          data === "Third Qualification"
        ) {
          return (
            <td key={data} className="qualificaton">
              {" "}
              <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
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
              <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
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
              <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
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
              <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
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
      var teachingStaffTableRows = [];

      var wrappedTableRow = <tr key={rowData["id"]}>{tableRow}</tr>;
      console.log(this.state.teachingStaffTableRows);
      teachingStaffTableRows.push(wrappedTableRow);
      console.log(this.state.teachingStaffTableRows);
      this.setState({ teachingStaffTableRows: teachingStaffTableRows });

      //  this.selectTableToChangeState(TableNumber,rowData,wrappedTableRow,'INIT');
    });
  };

  componentDidMount() {
    this.props.getRelatedCourses();
  }
  render() {
    console.log(this.state.teachingStaffTableRows);
    console.log(this.props);
    console.log(this.state.teachingStaff);
    return (
      <div className="container5">
        <h3>Teaching Staff</h3>
        <p>
          List all full-time teaching staff with qualifications and rank
          available exclusively for the programme.
        </p>
        <Table>
          <tbody>
            <tr>{this.renderTableHeaderList(this.teachingStaffHeaderList)}</tr>
            {this.state.teachingStaffTableRows}
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
                this.teachingStaffHeaderList,
                this.state.teachingStaff
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

TeachingStaff.propTypes = {
  getRelatedCourses: PropTypes.func.isRequired,
  relatedCourses: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => ({
  relatedCourses: state.ssq.relatedCourses,
});

export default connect(mapStateToProps, { getRelatedCourses })(TeachingStaff);
