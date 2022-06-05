import React, { PureComponent } from "react";

import { getServiceCourses, getServiceTitles } from "../../actions/ssqActions";
import PropTypes from "prop-types";
import Table from "./Table";
import TableControls from "./TableControls";
import { connect } from "react-redux";
import { getRelatedCourses } from "../../actions/ssqActions";
import { MenuItem } from "@mui/material";
import "./ServiceStaff.css";
import InputLabel from "@mui/material/InputLabel";
// import MenuItem from '@mui/material/MenuItem';
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import _ from "lodash";
import FormControls from "./FormControls";

class ServiceStaff extends PureComponent {
  constructor(props) {
    super(props);
    this.serviceStaffHeaderList = [
      "id",
      "Name of Staff",
      "First Qualification",
      "Second Qualification",
      "Third Qualification",
      "Rank",
      "Course To Teach",
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
      serviceTitles: [],
      serviceCourses: [],
      serviceStaff: [],
      serviceStaffTableRows: [],
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.serviceTitles && nextProps.serviceCourses) {
      this.setState({ serviceTitles: nextProps.serviceTitles }, () => {
        this.setState({ serviceCourses: nextProps.serviceCourses }, () => {
          this.initializeTable(this.serviceStaffHeaderList);
        });
      });
    }
  }
  moveToNextStep = (serviceStaff) => {
    this.props.setServiceStaffData(serviceStaff);
    this.props.nextStep();
  };
  handleChange = (row, column) => (e) => {
    var serviceStaffDataClone = [...this.state.serviceStaff];
    serviceStaffDataClone[row][column] = e.target.value;
    this.setState({ serviceStaff: serviceStaffDataClone });
  };

  addRow = (tableHeaderList, stateData) => {
    var serviceTitles = this.state.serviceTitles.map((serviceTitle) => {
      return (
        <MenuItem key={Math.random} value={serviceTitle}>
          {serviceTitle}
        </MenuItem>
      );
    });
    var serviceCourses = this.state.serviceCourses.map((serviceCourse) => {
      return (
        <MenuItem key={Math.random} value={serviceCourse}>
          {serviceCourse}
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
    let serviceStaffDataClone = [...this.state.serviceStaff];
    serviceStaffDataClone.push(rowData);
    console.log(rowData);
    //   serviceStaffData.push(rowData);
    console.log(serviceStaffDataClone);
    this.setState({ serviceStaff: serviceStaffDataClone }, () => {
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
                sx={{ m: 1, minWidth: 95, maxWidth: 120 }}
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
                  {serviceTitles}
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
                sx={{ m: 1, minWidth: 95, maxWidth: 120 }}
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
        } else if (data === "Course To Teach") {
          return (
            <td key={data}>
              <FormControl
                variant="filled"
                sx={{ m: 1, minWidth: 95, maxWidth: 120 }}
                size="small"
              >
                <InputLabel id="demo-simple-select-filled-label">
                  Course To Teach
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
                  {serviceCourses}
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
      var serviceStaffTableRowsClone = [...this.state.serviceStaffTableRows];
      var wrappedTableRow = <tr key={rowData["id"]}>{tableRow}</tr>;
      serviceStaffTableRowsClone.push(wrappedTableRow);

      this.setState({ serviceStaffTableRows: serviceStaffTableRowsClone });

      console.log(this.state.serviceStaffTableRows);
      // serviceStaffTableRows.push(wrappedTableRow);
      // console.log(this.state.serviceStaffTableRows);
      // this.setState({ serviceStaffTableRows: serviceStaffTableRows });

      //  this.selectTableToChangeState(TableNumber,rowData,wrappedTableRow,'INIT');
    });
  };
  deleteLastRow = () => {
    // e.preventDefault();

    if (this.state.serviceStaffTableRows.length > 1) {
      let serviceStaffTableRowsClone = [...this.state.serviceStaffTableRows];
      serviceStaffTableRowsClone.pop();
      this.setState({ serviceStaffTableRows: serviceStaffTableRowsClone });

      var serviceStaffDataClone = [...this.state.serviceStaff];
      serviceStaffDataClone.pop();
      this.setState({ serviceStaff: serviceStaffDataClone });
    }
  };
  handleQualificationsChange = (row, column, index) => (e) => {
    var serviceStaffDataClone = [...this.state.serviceStaff];
    console.log(serviceStaffDataClone);
    console.log(this.state.serviceStaff);
    console.log(serviceStaffDataClone[row][column]);

    if (serviceStaffDataClone[row][column] === "") {
      serviceStaffDataClone[row][column] = ["", "", ""];
      serviceStaffDataClone[row][column][index] = e.target.value;
    } else {
      serviceStaffDataClone[row][column][index] = e.target.value;
    }

    this.setState({ serviceStaff: serviceStaffDataClone });
  };

  initializeTable = (tableHeaderList) => {
    var serviceTitles = this.state.serviceTitles.map((serviceTitle) => {
      return (
        <MenuItem key={Math.random} value={serviceTitle}>
          {serviceTitle}
        </MenuItem>
      );
    });
    var serviceCourses = this.state.serviceCourses.map((serviceCourse) => {
      return (
        <MenuItem key={Math.random} value={serviceCourse}>
          {serviceCourse}
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
    var serviceStaffData = [];

    console.log(rowData);
    serviceStaffData.push(rowData);
    console.log(serviceStaffData);
    this.setState({ serviceStaff: serviceStaffData }, () => {
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
                sx={{ m: 1, minWidth: 95, maxWidth: 120 }}
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
                  {serviceTitles}
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
                sx={{ m: 1, minWidth: 95, maxWidth: 120 }}
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
        } else if (data === "Course To Teach") {
          return (
            <td key={data}>
              <FormControl
                variant="filled"
                sx={{ m: 1, minWidth: 95, maxWidth: 120 }}
                size="small"
              >
                <InputLabel id="demo-simple-select-filled-label">
                  Course To Teach
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
                  {serviceCourses}
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
      var serviceStaffTableRows = [];

      var wrappedTableRow = <tr key={rowData["id"]}>{tableRow}</tr>;
      console.log(this.state.serviceStaffTableRows);
      serviceStaffTableRows.push(wrappedTableRow);
      console.log(this.state.serviceStaffTableRows);
      this.setState({ serviceStaffTableRows: serviceStaffTableRows });

      //  this.selectTableToChangeState(TableNumber,rowData,wrappedTableRow,'INIT');
    });
  };

  renderTableHeaderList = (tableHeaderList) => {
    return tableHeaderList.map((key, index) => {
      return <th key={index}>{key}</th>;
    });
  };
  componentDidMount() {
    this.props.getServiceTitles();
    this.props.getServiceCourses();
  }
  render() {
    return (
      <div className="container6">
        <h3>Service Staff</h3>
        <p>
          List Service staff not exclusive to the department but whose service
          will be utilized by the department.{" "}
        </p>
        <Table>
          <tbody>
            <tr>{this.renderTableHeaderList(this.serviceStaffHeaderList)}</tr>
            {this.state.serviceStaffTableRows}
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
              this.addRow(this.serviceStaffHeaderList, this.state.serviceStaff)
            }
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
            onClick={() => this.moveToNextStep(this.state.serviceStaff)}
          >
            NEXT STEP
          </button>
        </FormControls>
      </div>
    );
  }
}

ServiceStaff.propTypes = {
  getServiceTitles: PropTypes.func.isRequired,
  getServiceCourses: PropTypes.func.isRequired,
  serviceCourses: PropTypes.array.isRequired,
  serviceTitles: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => ({
  serviceCourses: state.ssq.serviceCourses,
  serviceTitles: state.ssq.serviceTitles,
});
export default connect(mapStateToProps, {
  getServiceCourses,
  getServiceTitles,
})(ServiceStaff);
