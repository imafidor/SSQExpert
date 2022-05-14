import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Table from "./Table";
import TableControls from "./TableControls";
import { connect } from "react-redux";
import { getProffessionalBodies } from "../../actions/ssqActions";
import { MenuItem } from "@mui/material";
import "./HeadOfDepartment.css";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
// import MenuItem from '@mui/material/MenuItem';
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import _ from "lodash";

class HeadOfDepartment extends PureComponent {
  constructor(props) {
    super(props);
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
    this.courses = [
      "SLT",
      "Biochemistry",
      "Microbiology",
      "Chemistry",
      "Biotechnology",
    ];

    this.qualifications = ["ND", "HND", "Pgd", "Bsc", "Msc", "Phd"];
    this.state = {
      proffessionalBodies: [],
      HeadOfDepartment: {},
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.proffessionalBodies) {
      this.setState({ proffessionalBodies: nextProps.proffessionalBodies });
    }
  }

  componentDidMount() {
    this.props.getProffessionalBodies();
  }
  handleChange = () => (e) => {
    var HeadOfDepartmentDataClone = { ...this.state.HeadOfDepartment };
    HeadOfDepartmentDataClone[e.target.name] = e.target.value;
    this.setState({ HeadOfDepartment: HeadOfDepartmentDataClone });
  };
  handleQualificationsChange = (index) => (e) => {
    var HeadOfDepartmentDataClone = { ...this.state.HeadOfDepartment };

    if (e.target.name in this.state.HeadOfDepartment) {
      var qualificationsDataClone = [
        ...this.state.HeadOfDepartment[e.target.name],
      ];
      qualificationsDataClone[index] = e.target.value;
      HeadOfDepartmentDataClone[e.target.name] = qualificationsDataClone;
      this.setState({ HeadOfDepartment: HeadOfDepartmentDataClone });
    } else {
      var qualificationsArray = ["", "", ""];
      qualificationsArray[index] = e.target.value;
      HeadOfDepartmentDataClone[e.target.name] = qualificationsArray;
      this.setState({ HeadOfDepartment: HeadOfDepartmentDataClone });
      // teachingStaffDataClone[row][column][index] = e.target.value;
    }

    // this.setState({ teachingStaff: teachingStaffDataClone });
  };

  render() {
    var proffessionalBodies = this.state.proffessionalBodies.map(
      (proffessionalBody) => {
        return (
          <MenuItem key={Math.random} value={proffessionalBody}>
            {proffessionalBody}
          </MenuItem>
        );
      }
    );
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
    console.log(this.state.HeadOfDepartment);
    console.log(this.state.HeadOfDepartment["name"]);
    return (
      <div className="container7">
        <h3>Head Of Department</h3>
        <p>
          Provide the following information and qualifications of the Head of
          Department requested below
        </p>
        <Stack spacing={2}>
          <TextField
            id="filled-basic"
            label="Name"
            variant="filled"
            sx={{
              m: 1,
              minWidth: 95,
              maxWidth: 500,
              marginLeft: 32,
            }}
            name="Name"
            onChange={this.handleChange()}
          />

          <Stack direction="row" spacing={2}>
            <label className="label6">First Qualification: </label>

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
                name="First Qualification"
                onChange={this.handleQualificationsChange(0)}
                // data,
                // 0
                //   )}
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
              sx={{ m: 1, minWidth: 95 }}
              size="small"
            >
              <InputLabel id="demo-simple-select-filled-label">
                Course
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                name="First Qualification"
                onChange={this.handleQualificationsChange(1)}
                // data,
                // 1
                //   )}
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
              <InputLabel id="demo-simple-select-filled-label">Year</InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                name="First Qualification"
                onChange={this.handleQualificationsChange(2)}
                // 2
                //   )}
                // value={stateData[rowData["id"] - 1][data]}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {years}
              </Select>
            </FormControl>
          </Stack>

          <Stack direction="row" spacing={2}>
            <label className="label6">Second Qualification: </label>
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
                name="Second Qualification"
                onChange={this.handleQualificationsChange(0)}
                // data,
                // 0
                //   )}
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
              sx={{ m: 1, minWidth: 95 }}
              size="small"
            >
              <InputLabel id="demo-simple-select-filled-label">
                Course
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                name="Second Qualification"
                onChange={this.handleQualificationsChange(1)}
                // data,
                // 1
                //   )}
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
              <InputLabel id="demo-simple-select-filled-label">Year</InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                name="Second Qualification"
                onChange={this.handleQualificationsChange(2)}
                // 2
                //   )}
                // value={stateData[rowData["id"] - 1][data]}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {years}
              </Select>
            </FormControl>
          </Stack>

          <Stack direction="row" spacing={2}>
            <label className="label6">Third Qualification: </label>
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
                name="Third Qualification"
                onChange={this.handleQualificationsChange(0)}
                // 0
                //   )}
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
              sx={{ m: 1, minWidth: 95 }}
              size="small"
            >
              <InputLabel id="demo-simple-select-filled-label">
                Course
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                name="Third Qualification"
                onChange={this.handleQualificationsChange(1)}
                // 1
                //   )}
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
              <InputLabel id="demo-simple-select-filled-label">Year</InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                name="Third Qualification"
                onChange={this.handleQualificationsChange(2)}
                // 2
                //   )}
                // value={stateData[rowData["id"] - 1][data]}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {years}
              </Select>
            </FormControl>
          </Stack>

          <FormControl
            variant="filled"
            sx={{ m: 1, maxWidth: 500, paddingLeft: 32 }}
            size="small"
          >
            <InputLabel
              id="demo-simple-select-filled-label-2"
              sx={{ paddingLeft: 32 }}
            >
              Rank
            </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label-2"
              id="demo-simple-select-filled"
              // (e) => this.props.handleChange("tags", e)
              //   SelectDisplayProps={{ name: "Rank" }}
              //   onChange={this.handleChange(rowData["id"] - 1, data)}
              // value={stateData[rowData["id"] - 1][data]}
              name="Rank"
              onChange={this.handleChange()}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {ranks}
            </Select>
          </FormControl>
          <TextField
            id="filled-basic"
            label="Years Of Experience"
            variant="filled"
            type="number"
            name="Years Of Experience"
            onChange={this.handleChange()}
            sx={{
              minWidth: 95,
              maxWidth: 500,
              paddingLeft: 32,
              "& label": { marginLeft: 32 },
            }}
          />

          <FormControl
            variant="filled"
            sx={{ m: 1, maxWidth: 500, paddingLeft: 32 }}
            size="small"
          >
            <InputLabel
              id="demo-simple-select-filled-label-1"
              sx={{ paddingLeft: 32 }}
            >
              Proffessional Body Qualification
            </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label-1"
              id="demo-simple-select-filled"
              name="Proffessional Body Qualification"
              onChange={this.handleChange()}
              //   onChange={this.handleChange(rowData["id"] - 1, data)}
              // value={stateData[rowData["id"] - 1][data]}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {proffessionalBodies}
            </Select>
          </FormControl>
        </Stack>
      </div>
    );
  }
}
HeadOfDepartment.propTypes = {
  getProffessionalBodies: PropTypes.func.isRequired,
  proffessionalBodies: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => ({
  proffessionalBodies: state.ssq.proffessionalBodies,
});

export default connect(mapStateToProps, { getProffessionalBodies })(
  HeadOfDepartment
);
