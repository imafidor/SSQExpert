import React, { PureComponent } from "react";
import "./Results.css";
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

class Results extends PureComponent {
  constructor(props) {
    super(props);
    this.laboratoriesDeficienciesHeaderList = [
      "id",
      "Item Description and Model",
      "Number Required",
    ];
    this.classroomsHeaderList = [
      "id",
      "Number",
      "Size in (MeterSquare)",
      "Capacity (No. of Students)",
      "Remarks",
    ];
    this.LibraryHeaderList = [
      "id",
      "Author's Name and Title",
      "Year of Publication",
      "Area of Specialization",
      "No of Copies",
    ];
    this.staffOfficesTableHeaderList = [
      "id",
      "Office Description",
      "Size in (MeterSquare)",
      "Capacity (No of Lecturers)",
      "Remarks",
    ];
    this.state = {
      result: [],
    };
    this.teachingStaffHeaderList = [
      "id",
      "Name of Staff",
      "First Qualification",
      "Second Qualification",
      "Third Qualification",
      "Rank",
    ];
    this.serviceStaffHeaderList = [
      "id",
      "Name of Staff",
      "First Qualification",
      "Second Qualification",
      "Third Qualification",
      "Rank",
      "Course To Teach",
    ];
    this.technicalStaffHeaderList = [
      "id",
      "Name of Staff",
      "First Qualification",
      "Second Qualification",
      "Rank",
      "Laboratory To Mount",
    ];
    this.administrativeStaffHeaderList = [
      "id",
      "Name of Staff",
      "First Qualification",
      "Second Qualification",
      "Appointment",
    ];
    this.laboratoriesHeaderList = [
      "id",
      "Item Description and Model",
      "Quantity",
      "Working Condition",
    ];
    this.state = {
      goalsAndObjectivesReport: "",
      curriculumReport: "",
      classroomReport: "",
      laboratoriesReport: "",
      staffOfficesReport: "",
      libraryBooksReport: "",
      teachingStaffReport: "",
      serviceStaffReport: "",
      technicalStaffReport: "",
      administrativeStaffReport: "",
      HeadOfDepartmentReport: "",
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.result) {
      this.setState({ result: nextProps.result });
    }
  }
  moveToNextStep = () => {
    this.props.nextStep();
  };
  displayTableData = (tableData) => {
    var tableRows = [];
    for (let i = 0; i < tableData.length; i++) {
      let row = [];
      for (const key of Object.keys(tableData[i])) {
        // console.log(`${key}: ${value}`);
        if (typeof tableData[i][key] === "Array") {
          row.push(
            <td>
              {" "}
              {""
                .concat(tableData[i][key][0])
                .concat(", ")
                .concat(tableData[i][key][1])
                .concat(` ${tableData[i][key][2]}.`)}
            </td>
          );
        } else {
          row.push(<td> {tableData[i][key]}</td>);
        }
      }
      let wrappedRow = <tr>{row}</tr>;
      tableRows.push(wrappedRow);
    }
    return tableRows;
  };

  setGoalsAndObjectivesReport = (confirm) => {
    let template = confirm ? "" : "do not";
    let report = `You ${template} follow the Goals and Objectives as stated clearly in the curriculum`;
    this.setState({ goalsAndObjectivesReport: report });
  };

  setCurriculumReport = (option) => {
    let report = "";
    switch (option) {
      case 0:
        report = "The Programme does not intend to adopt the NBTE curriculum";
        break;
      case 1:
        report =
          "The Programme intends to adopt the NBTE curriculum without modification for local contents";
        break;
      case 2:
        report =
          "The Programme intends to adopt the NBTE curriculum with modification for local contents";
        break;
      default:
        report = "No comprehensive report on the curriculum";
    }
    this.setState({ curriculumReport: report });
  };
  setClassroomReport = (classroomData) => {
    let classroomReport = "";
    let noOfClassrooms = 0;
    let noOfLectureTheatre = 0;
    for (let i = 0; i < classroomData.length; i++) {
      if (classroomData[i]["id"] === "Classrooms") {
        noOfClassrooms = classroomData[i]["Number"];
      }
      if (classroomData[i]["id"] === "Lecture Theatre/Hall") {
        noOfLectureTheatre = classroomData[i]["Number"];
      }
    }
    classroomReport = `You have ${
      noOfClassrooms === 0 ? "no" : noOfClassrooms
    } classroom${noOfClassrooms < 2 ? "" : "s"} and ${
      noOfLectureTheatre === 0 ? "no" : noOfLectureTheatre
    } Lecture Theatre${noOfLectureTheatre < 2 ? "" : "s"}`;
    this.setState({ classroomReport: classroomReport });
  };

  setLaboratoriesReport = (laboratories) => {
    let laboratoriesReport = "";
    let allLaboratories = "";
    // laboratories.reduce((laboratory) => {});
    let labString = laboratories.reduce(
      (previousValue, currentValue, currentIndex, array) => {
        let template = ", ";
        if (currentIndex === 0) {
          return `${previousValue}${currentValue}`;
        } else if (currentIndex === laboratories.length - 1) {
          return `and ${currentValue}`;
        } else {
          return `, ${currentValue}`;
        }
      },
      ""
    );

    laboratoriesReport = `You have ${
      laboratories.length === 0 ? "no" : laboratories.length
    } ${
      laboratories.length < 2 ? "laboratory" : "laboratories"
    } , ${labString}`;
    this.setState({ laboratoriesReport: laboratoriesReport });
  };

  setStaffOfficesReport = (staffOffices) => {
    let staffOfficesReport = "";
    staffOfficesReport = `You have ${
      staffOffices.length === 0 ? "no" : staffOffices.length
    } Staff Office${staffOffices.length < 2 ? "" : "s"}`;
    this.setState({ staffOfficesReport: staffOfficesReport });
  };

  setLibraryBooksReport = (books, ebooks, journals, ejournals) => {
    let libraryBooksReport = "";
    libraryBooksReport = `You have ${
      books.length === 0 ? "no" : books.length
    } Book${books.length < 2 ? "" : "s"}, ${
      ebooks.length === 0 ? "no" : ebooks.length
    } E-Book${ebooks.length < 2 ? "" : "s"}, 
    ${journals.length === 0 ? "no" : journals.length} journal${
      journals.length < 2 ? "" : "s"
    }, 
    ${ejournals.length === 0 ? "no" : ejournals.length} journal${
      ejournals.length < 2 ? "" : "s"
    }, 
    `;
    this.setState({ libraryBooksReport: libraryBooksReport });
  };
  setTeachingStaffReport = (teachingStaff) => {
    let teachingStaffReport = "";
    teachingStaffReport = `You have ${
      teachingStaff.length === 0 ? "no" : teachingStaff.length
    } Teaching Staff${teachingStaff.length < 2 ? "" : "s"}`;
    this.setState({ teachingStaffReport: teachingStaffReport });
  };

  setServiceStaffReport = (serviceStaff) => {
    let serviceStaffReport = "";
    serviceStaffReport = `You have ${
      serviceStaff.length === 0 ? "no" : serviceStaff.length
    } Service Staff${serviceStaff.length < 2 ? "" : "s"}`;
    this.setState({ serviceStaffReport: serviceStaffReport });
  };
  setTechnicalStaffReport = (technicalStaff) => {
    let technicalStaffReport = "";
    technicalStaffReport = `You have ${
      technicalStaff.length === 0 ? "no" : technicalStaff.length
    } Technical Staff${technicalStaff.length < 2 ? "" : "s"}`;
    this.setState({ technicalStaffReport: technicalStaffReport });
  };

  setAdministrativeStaffReport = (administrativeStaff) => {
    let administrativeStaffReport = "";
    administrativeStaffReport = `You have ${
      administrativeStaff.length === 0 ? "no" : administrativeStaff.length
    } Administrative Staff${administrativeStaff.length < 2 ? "" : "s"}`;
    this.setState({ administrativeStaffReport: administrativeStaffReport });
  };

  buildQualificationsString = (HeadOfDepartment, qualification) => {
    let qualificationStr = "";
    for (let i = 0; i < HeadOfDepartment[qualification][i]; i++) {
      if (HeadOfDepartment[qualification][i] === "") {
        qualificationStr = "";
        break;
      } else {
        let temp = "";
        if (i === 0 || i === 3) {
          temp = temp.concat(HeadOfDepartment[qualification][i]);
        } else {
          let course = ` in ${HeadOfDepartment[qualification][i]}, `;
          temp = temp.concat(course);
        }
        qualificationStr = temp;
      }
    }
    return qualificationStr;
  };
  setHeadOfDepartmentReport = (HeadOfDepartment) => {
    let HeadOfDepartmentReport = "";
    let firstQualifications = this.buildQualificationsString(
      HeadOfDepartment,
      "First Qualification"
    );
    let secondQualifications = this.buildQualificationsString(
      HeadOfDepartment,
      "Second Qualification"
    );
    let thirdQualifications = this.buildQualificationsString(
      HeadOfDepartment,
      "Third Qualification"
    );
    let allQualificationsStr = "";
    let yearsOfExperienceStr = "";
    let proffessionalBodyStr = "";
    let rankStr = "";
    if (HeadOfDepartment["Proffessional Body Qualification"] === "") {
      proffessionalBodyStr = "with no proffessional body qualification";
    } else {
      proffessionalBodyStr = `an associate of ${HeadOfDepartment["Proffessional Body Qualification"]} `;
    }

    if (HeadOfDepartment["Rank"] === "") {
      rankStr = "with no rank";
    } else {
      rankStr = `Is a ${HeadOfDepartment["Rank"]}`;
    }

    if (HeadOfDepartment["Years Of Experience"] === "") {
      yearsOfExperienceStr = "No experience ";
    } else {
      yearsOfExperienceStr = `with ${HeadOfDepartment["Years Of Experience"]} years of experience`;
    }

    let allQualifications = [
      firstQualifications,
      secondQualifications,
      thirdQualifications,
    ];

    for (let i = 0; i < allQualifications.length; i++) {
      if (i === 0) {
        allQualificationsStr.concat(`${allQualifications[i]}`);
      } else if (i === 2) {
        allQualificationsStr.concat(`, ${allQualificationsStr[i]} `);
      } else {
        allQualificationsStr.concat(`and ${allQualificationsStr[i]}`);
      }
    }

    HeadOfDepartmentReport = `The name of the Head Of Department is ${HeadOfDepartment["Name"]} ${rankStr} 
    ${yearsOfExperienceStr}, has ${allQualificationsStr} , and  ${proffessionalBodyStr}`;
    this.setState({ HeadOfDepartmentReport: HeadOfDepartmentReport });
  };
  componentDidMount() {
    this.setGoalsAndObjectivesReport(this.props.goalsAndObjective);
    this.setCurriculumReport(this.props.curriculum);
    this.setClassroomReport(this.props.classroom);
    this.setLaboratoriesReport(this.props.laboratories);
    this.setLibraryBooksReport(
      this.props.books,
      this.props.ebooks,
      this.props.journals,
      this.props.ejournals
    );
    this.setStaffOfficesReport(this.props.staffOffices);
    this.setTeachingStaffReport(this.props.teachingStaff);
    this.setServiceStaffReport(this.props.serviceStaff);
    this.setTechnicalStaffReport(this.props.technicalStaff);
    this.setAdministrativeStaffReport(this.props.administrativeStaff);
    this.setHeadOfDepartmentReport(this.props.HeadOfDepartment);
  }
  transformDeficienciesData = (data) => {
    var labDeficienciesDataArray = [];
    var id = 1;
    for (let i = 0; i < data.length; i++) {
      let row = {};

      for (const key of Object.keys(data)) {
        row["id"] = id;
        row["Item Description and Model"] = key;
        row["Number Required"] = data[key];
      }
      id++;
      labDeficienciesDataArray.push(row);
    }

    return labDeficienciesDataArray;
  };
  render() {
    // $result['labDeficiencies']=$labDeficiencies;
    // $result['hasLabDeficiency']= $hasLabDeficiency;
    var tables = this.props.laboratories.map((lab, index) => {
      return (
        <div className="container11">
          <h2>{lab}</h2>
          <Table>
            <tbody key={index}>
              <tr key={index}>
                {this.renderTableHeaderList(this.laboratoriesHeaderList)}
              </tr>
              {this.displayTableData(this.props.laboratories[lab])}
            </tbody>
          </Table>
          {this.state.result["Laboratories"]["hasLabDeficiency"][lab] && (
            <div className="container11">
              <h2>{lab}</h2>
              <Table>
                <tbody key={index}>
                  <tr key={index}>
                    {this.renderTableHeaderList(
                      this.laboratoriesDeficienciesHeaderList
                    )}
                  </tr>
                  {this.displayTableData(
                    this.transformDeficienciesData(
                      this.state.result["Laboratories"]["labDeficiencies"][lab]
                    )
                  )}
                </tbody>
              </Table>
            </div>
          )}
        </div>
      );
    });
    // <p style={{textAlign:'left'}}>
    // <ol type='i' >
    // <li>Estimate the size and capacity of the present library</li>
    // <li>List all books, journals, periodicals and e-resources available for the programme to be mounted</li>
    //  <li>Appraise the adequacy of the library resources for the programme taking into account the number of students
    //  to be served (use additional sheets if necessary)  </li>
    // </ol>
    // </p>
    // let listOfDeficiencies = this.state.result["GoalsAndObjectives"][
    // 'majorDeficiencyGoals'
    // ].map((majorDeficiency) => {
    //   return <li>majorDeficiency</li>;
    // });

    let goalsAndObjectiveDeficiency =
      this.state.result["GoalsAndObjectives"]["majorDeficiencyGoals"];
    let deficiencyMessageGoals = "";
    if (goalsAndObjectiveDeficiency === "") {
      deficiencyMessageGoals = "There are no deficiencies in this section";
    } else {
      deficiencyMessageGoals = goalsAndObjectiveDeficiency;
    }

    let curriculumDeficiency =
      this.state.result["Curriculum"]["majorDeficienciesCurriculum"];

    var deficiencyMessageCurriculum = "";
    if (curriculumDeficiency === "") {
      deficiencyMessageCurriculum = "There are no deficiencies in this section";
    } else {
      deficiencyMessageCurriculum = curriculumDeficiency;
    }

    let classroomMajorDeficiencies = this.state.result["Classrooms"][
      "majorDeficienciesClassrooms"
    ].map((majorDeficiency) => {
      return <li>{majorDeficiency}</li>;
    });

    let classroomMinorDeficiencies = this.state.result["Classrooms"][
      "minorDeficienciesClassrooms"
    ].map((minorDeficiency) => {
      return <li>{minorDeficiency}</li>;
    });
    let deficienciesClassroom = classroomMajorDeficiencies.concat(
      classroomMinorDeficiencies
    );

    var deficiencyMessageClassroom = "";
    if (
      this.state.result["Classrooms"]["majorDeficienciesClassrooms"].length ===
        0 &&
      this.state.result["Classrooms"]["minorDeficienciesClassrooms"].length ===
        0
    ) {
      deficiencyMessageClassroom = "There are no deficiencies in this section";
    } else {
      deficiencyMessageClassroom = <ol type="i">{deficienciesClassroom}</ol>;
    }

    var deficiencyMessageLaboratories = "";
    let laboratoriesMinorDeficiencies = this.state.result["Laboratories"][
      "minorDeficienciesLaboratories"
    ].map((minorDeficiency) => {
      return <li>{minorDeficiency}</li>;
    });
    let laboratoriesMajorDeficiencies = this.state.result["Laboratories"][
      "majorDeficienciesLaboratories"
    ].map((majorDeficiency) => {
      return <li>{majorDeficiency}</li>;
    });

    let deficienciesLaboratories = laboratoriesMajorDeficiencies.concat(
      laboratoriesMinorDeficiencies
    );

    if (
      this.state.result["Laboratories"]["majorDeficienciesLaboratories"]
        .length === 0 &&
      this.state.result["Laboratories"]["minorDeficienciesLaboratories"]
        .length === 0
    ) {
      deficiencyMessageLaboratories =
        "There are no deficiencies in this section";
    } else {
      deficiencyMessageLaboratories = (
        <ol type="i">{deficienciesLaboratories}</ol>
      );
    }

    var deficiencyMessageStaffOffices = "";
    let staffOfficesMinorDeficiencies = this.state.result["StaffOffices"][
      "minorDeficienciesStaffOffices"
    ].map((minorDeficiency) => {
      return <li>{minorDeficiency}</li>;
    });
    let staffOfficesMajorDeficiencies = this.state.result["StaffOffices"][
      "majorDeficienciesStaffOffices"
    ].map((majorDeficiency) => {
      return <li>{majorDeficiency}</li>;
    });
    var deficienciesStaffOffices = staffOfficesMajorDeficiencies.concat(
      staffOfficesMinorDeficiencies
    );

    if (
      this.state.result["StaffOffices"]["majorDeficienciesStaffOffices"]
        .length === 0 &&
      this.state.result["StaffOffices"]["minorDeficienciesStaffOffices"]
        .length === 0
    ) {
      deficiencyMessageStaffOffices =
        "There are no deficiencies in this section";
    } else {
      deficiencyMessageStaffOffices = (
        <ol type="i">{deficienciesStaffOffices}</ol>
      );
    }
    var deficiencyMessageLibrary = "";
    let libraryMinorDeficiencies = this.state.result["Library"][
      "minorDeficienciesLibrary"
    ].map((minorDeficiency) => {
      return <li>{minorDeficiency}</li>;
    });
    let libraryMajorDeficiencies = this.state.result["Library"][
      "majorDeficienciesLibrary"
    ].map((majorDeficiency) => {
      return <li>{majorDeficiency}</li>;
    });
    var deficienciesLibrary = libraryMajorDeficiencies.concat(
      libraryMinorDeficiencies
    );

    if (
      this.state.result["Library"]["majorDeficienciesLibrary"].length === 0 &&
      this.state.result["Library"]["minorDeficienciesLibrary"].length === 0
    ) {
      deficiencyMessageLibrary = "There are no deficiencies in this section";
    } else {
      deficiencyMessageLibrary = <ol type="i">{deficienciesLibrary}</ol>;
    }

    var deficiencyMessageTeachingStaff = "";
    let teachingStaffMinorDeficiencies = this.state.result["TeachingStaff"][
      "minorDeficienciesTeachingStaff"
    ].map((minorDeficiency) => {
      return <li>{minorDeficiency}</li>;
    });
    let teachingStaffMajorDeficiencies = this.state.result["TeachingStaff"][
      "majorDeficienciesTeachingStaff"
    ].map((majorDeficiency) => {
      return <li>{majorDeficiency}</li>;
    });
    var deficienciesTeachingStaff = teachingStaffMajorDeficiencies.concat(
      teachingStaffMinorDeficiencies
    );

    if (
      this.state.result["TeachingStaff"]["majorDeficienciesTeachingStaff"]
        .length === 0 &&
      this.state.result["TeachingStaff"]["minorDeficienciesTeachingStaff"]
        .length === 0
    ) {
      deficiencyMessageTeachingStaff =
        "There are no deficiencies in this section";
    } else {
      deficiencyMessageTeachingStaff = (
        <ol type="i">{deficienciesTeachingStaff}</ol>
      );
    }
    var deficiencyMessageServiceStaff = "";
    let serviceStaffMinorDeficiencies = this.state.result["ServiceStaff"][
      "minorDeficienciesServiceStaff"
    ].map((minorDeficiency) => {
      return <li>{minorDeficiency}</li>;
    });
    let serviceStaffMajorDeficiencies = this.state.result["ServiceStaff"][
      "majorDeficienciesServiceStaff"
    ].map((majorDeficiency) => {
      return <li>{majorDeficiency}</li>;
    });
    var deficienciesServiceStaff = serviceStaffMajorDeficiencies.concat(
      serviceStaffMinorDeficiencies
    );

    if (
      this.state.result["ServiceStaff"]["majorDeficienciesServiceStaff"]
        .length === 0 &&
      this.state.result["ServiceStaff"]["minorDeficienciesServiceStaff"]
        .length === 0
    ) {
      deficiencyMessageServiceStaff =
        "There are no deficiencies in this section";
    } else {
      deficiencyMessageServiceStaff = (
        <ol type="i">{deficienciesServiceStaff}</ol>
      );
    }

    var deficiencyMessageTechnicalStaff = "";
    let technicalStaffMinorDeficiencies = this.state.result["TechnicalStaff"][
      "minorDeficienciesTechnicalStaff"
    ].map((minorDeficiency) => {
      return <li>{minorDeficiency}</li>;
    });
    let technicalStaffMajorDeficiencies = this.state.result["TechnicalStaff"][
      "majorDeficienciesTechnicalStaff"
    ].map((majorDeficiency) => {
      return <li>{majorDeficiency}</li>;
    });
    var deficienciesTechnicalStaff = technicalStaffMajorDeficiencies.concat(
      technicalStaffMinorDeficiencies
    );

    if (
      this.state.result["TechnicalStaff"]["majorDeficienciesTechnicalStaff"]
        .length === 0 &&
      this.state.result["TechnicalStaff"]["minorDeficienciesTechnicalStaff"]
        .length === 0
    ) {
      deficiencyMessageTechnicalStaff =
        "There are no deficiencies in this section";
    } else {
      deficiencyMessageTechnicalStaff = (
        <ol type="i">{deficienciesTechnicalStaff}</ol>
      );
    }
    var deficiencyMessageHOD = "";
    let HODMinorDeficiencies = this.state.result["HOD"][
      "minorDeficienciesHOD"
    ].map((minorDeficiency) => {
      return <li>{minorDeficiency}</li>;
    });
    let HODMajorDeficiencies = this.state.result["HOD"][
      "majorDeficienciesHOD"
    ].map((majorDeficiency) => {
      return <li>{majorDeficiency}</li>;
    });
    var deficienciesHOD = HODMajorDeficiencies.concat(HODMinorDeficiencies);

    if (
      this.state.result["HOD"]["majorDeficienciesHOD"].length === 0 &&
      this.state.result["HOD"]["minorDeficienciesHOD"].length === 0
    ) {
      deficiencyMessageHOD = "There are no deficiencies in this section";
    } else {
      deficiencyMessageHOD = <ol type="i">{deficienciesHOD}</ol>;
    }
    var deficiencyMessageAdministrativeStaff = "";
    let administrativeStaffMinorDeficiencies = this.state.result[
      "AdministrativeStaff"
    ]["minorDeficienciesAdministrativeStaff"].map((minorDeficiency) => {
      return <li>{minorDeficiency}</li>;
    });
    let administrativeStaffMajorDeficiencies = this.state.result[
      "AdministrativeStaff"
    ]["majorDeficienciesAdministrativeStaff"].map((majorDeficiency) => {
      return <li>{majorDeficiency}</li>;
    });
    var deficienciesAdministrativeStaff =
      administrativeStaffMajorDeficiencies.concat(
        administrativeStaffMinorDeficiencies
      );

    if (
      this.state.result["AdministrativeStaff"][
        "majorDeficienciesAdministrativeStaff"
      ].length === 0 &&
      this.state.result["AdministrativeStaff"][
        "minorDeficienciesAdministrativeStaff"
      ].length === 0
    ) {
      deficiencyMessageAdministrativeStaff =
        "There are no deficiencies in this section";
    } else {
      deficiencyMessageAdministrativeStaff = (
        <ol type="i">{deficienciesAdministrativeStaff}</ol>
      );
    }

    return (
      <div className="container11">
        <h1>Here are your results </h1>
        <div className="container11">
          <h2> Goals And Objectives</h2>
          <div className="container11">
            <p>
              <strong>{this.state.goalsAndObjectivesReport}</strong>
            </p>
          </div>
          <div className="container11">
            <h2> Deficiencies</h2>
            <p style={{ textAlign: "center" }}>
              <ol type="i">
                <li>{deficiencyMessageGoals}</li>
              </ol>
            </p>
          </div>
          <div className="container11">
            <h2> Assessment</h2>
            <strong
              style={
                this.state.result["GoalsAndObjectives"]["assessment"] === "POOR"
                  ? { color: "red" }
                  : this.state.result["GoalsAndObjectives"]["assessment"] ===
                    "FAIR"
                  ? { color: "yellow" }
                  : { color: "green" }
              }
            >
              {this.state.result["GoalsAndObjectives"]["assessment"]}
            </strong>
          </div>
        </div>
        <div className="container11">
          <h2> Curriculum</h2>
          <div className="container11">
            <p>
              <strong>{this.state.curriculumReport}</strong>
            </p>
          </div>
          <div className="container11">
            <h2> Deficiencies</h2>
            <p style={{ textAlign: "center" }}>
              <ol type="i">
                <li>{deficiencyMessageCurriculum}</li>
              </ol>
            </p>
          </div>
          <div className="container11">
            <h2> Assessment</h2>
            <strong
              style={
                this.state.result["Curriculum"]["assessment"] === "POOR"
                  ? { color: "red" }
                  : this.state.result["Curriculum"]["assessment"] === "FAIR"
                  ? { color: "yellow" }
                  : { color: "green" }
              }
            >
              {this.state.result["Curriculum"]["assessment"]}
            </strong>
          </div>
        </div>

        <div className="container11">
          <h2>Classrooms</h2>
          <div className="container11">
            <p>
              <strong>{this.state.classroomReport}</strong>
            </p>
            <Table>
              <tbody>
                <tr>{this.renderTableHeaderList(this.classroomsHeaderList)}</tr>
                {this.displayTableData(this.props.classroom)}
              </tbody>
            </Table>
          </div>
          <div className="container11">
            <h2> Deficiencies</h2>
            <p style={{ textAlign: "center" }}>{deficiencyMessageClassroom}</p>
          </div>
          <div className="container11">
            <h2> Assessment</h2>
            <strong
              style={
                this.state.result["Classrooms"]["assessment"] === "POOR"
                  ? { color: "red" }
                  : this.state.result["Classrooms"]["assessment"] === "FAIR"
                  ? { color: "yellow" }
                  : { color: "green" }
              }
            >
              {this.state.result["Classrooms"]["assessment"]}
            </strong>
          </div>
        </div>
        <div className="container11">
          <h2>Laboratories</h2>
          <div className="container11">
            <p>
              <strong>{this.state.laboratoriesReport}</strong>
            </p>
          </div>
          {tables}
          <div className="container11">
            <h2> Deficiencies</h2>
            <p style={{ textAlign: "center" }}>
              {deficiencyMessageLaboratories}
            </p>
          </div>
          <div className="container11">
            <h2> Assessment</h2>
            <strong
              style={
                this.state.result["Laboratories"]["assessment"] === "POOR"
                  ? { color: "red" }
                  : this.state.result["Laboratories"]["assessment"] === "FAIR"
                  ? { color: "yellow" }
                  : { color: "green" }
              }
            >
              {this.state.result["Laboratories"]["assessment"]}
            </strong>
          </div>
          {/* {tables} */}
          {/* <Table> */}
          {/* <tbody> */}
          {/* <tr>{this.laboratoriesHeaderList}</tr> */}
          {/* {this.props.table15Rows} */}
          {/* </tbody> */}
          {/* </Table> */}
        </div>
        <div className="container11">
          <h2>Staff Offices</h2>
          <div className="container11">
            <p>
              <strong> {this.state.staffOfficesReport}</strong>
            </p>
            <Table>
              <tbody>
                <tr>
                  {this.renderTableHeaderList(this.staffOfficesTableHeaderList)}
                </tr>
                {this.displayTableData(this.props.staffOffices)}
              </tbody>
            </Table>
          </div>
          <div className="container11">
            <h2> Deficiencies</h2>
            <p style={{ textAlign: "center" }}>
              {deficiencyMessageStaffOffices}
            </p>
          </div>
          <div className="container11">
            <h2> Assessment</h2>
            <strong
              style={
                this.state.result["StaffOffices"]["assessment"] === "POOR"
                  ? { color: "red" }
                  : this.state.result["StaffOffices"]["assessment"] === "FAIR"
                  ? { color: "yellow" }
                  : { color: "green" }
              }
            >
              {this.state.result["StaffOffices"]["assessment"]}
            </strong>
          </div>
        </div>

        <div className="container11">
          <h2>Library</h2>
          <div className="container11">
            <p>
              <strong>{this.state.libraryBooksReport}</strong>
            </p>
          </div>

          <div className="container11">
            <h3>Books</h3>
            <Table>
              <tbody>
                <tr>{this.renderTableHeaderList(this.LibraryHeaderList)}</tr>
                {this.displayTableData(this.props.books)}
              </tbody>
            </Table>
          </div>
          <div className="container11">
            <h3>E Books</h3>
            <Table>
              <tbody>
                <tr>{this.renderTableHeaderList(this.LibraryHeaderList)}</tr>
                {this.displayTableData(this.props.ebooks)}
              </tbody>
            </Table>
          </div>
          <div className="container11">
            <h3>Journals</h3>
            <Table>
              <tbody>
                <tr>{this.renderTableHeaderList(this.LibraryHeaderList)}</tr>
                {this.displayTableData(this.props.journals)}
              </tbody>
            </Table>
          </div>
          <div className="container11">
            <h3>E-Journals</h3>
            <Table>
              <tbody>
                <tr>{this.renderTableHeaderList(this.LibraryHeaderList)}</tr>
                {this.displayTableData(this.props.ejournals)}
              </tbody>
            </Table>
          </div>
          <div className="container11">
            <h2> Deficiencies</h2>
            <p style={{ textAlign: "center" }}>{deficiencyMessageLibrary}</p>
          </div>
          <div className="container11">
            <h2> Assessment</h2>
            <strong
              style={
                this.state.result["Library"]["assessment"] === "POOR"
                  ? { color: "red" }
                  : this.state.result["Library"]["assessment"] === "FAIR"
                  ? { color: "yellow" }
                  : { color: "green" }
              }
            >
              {this.state.result["Library"]["assessment"]}
            </strong>
          </div>
          {/* <Table> */}
          {/* <tbody> */}
          {/* <tr>{this.LibraryHeaderList}</tr> */}
          {/* {this.props.table15Rows} */}
          {/* </tbody> */}
          {/* </Table> */}
        </div>
        <div className="container11">
          <h2>Teaching Staff</h2>
          <div className="container11">
            <p>
              <strong>{this.state.teachingStaffReport}</strong>
            </p>
            <Table>
              <tbody>
                <tr>
                  {this.renderTableHeaderList(this.teachingStaffHeaderList)}
                </tr>
                {this.displayTableData(this.props.teachingStaff)}
              </tbody>
            </Table>
            {/* <Table> */}
            {/* <tbody> */}
            {/* <tr>{this.teachingStaffHeaderList}</tr> */}
            {/* {this.props.table15Rows} */}
            {/* </tbody> */}
            {/* </Table> */}
          </div>
          <div className="container11">
            <h2> Deficiencies</h2>
            <p style={{ textAlign: "center" }}>
              {deficiencyMessageTeachingStaff}
            </p>
          </div>
          <div className="container11">
            <h2> Assessment</h2>
            <strong
              style={
                this.state.result["TeachingStaff"]["assessment"] === "POOR"
                  ? { color: "red" }
                  : this.state.result["TeachingStaff"]["assessment"] === "FAIR"
                  ? { color: "yellow" }
                  : { color: "green" }
              }
            >
              {this.state.result["TeachingStaff"]["assessment"]}
            </strong>
          </div>
        </div>
        <div className="container11">
          <h2>Service Staff</h2>
          <div className="container11">
            <p>
              <strong>{this.state.serviceStaffReport}</strong>
            </p>
            <Table>
              <tbody>
                <tr>
                  {this.renderTableHeaderList(this.serviceStaffHeaderList)}
                </tr>
                {this.displayTableData(this.props.serviceStaff)}
              </tbody>
            </Table>
          </div>
          <div className="container11">
            <h2> Deficiencies</h2>
            <p style={{ textAlign: "center" }}>
              {deficiencyMessageServiceStaff}
            </p>
          </div>
          <div className="container11">
            <h2> Assessment</h2>
            <strong
              style={
                this.state.result["ServiceStaff"]["assessment"] === "POOR"
                  ? { color: "red" }
                  : this.state.result["ServiceStaff"]["assessment"] === "FAIR"
                  ? { color: "yellow" }
                  : { color: "green" }
              }
            >
              {this.state.result["ServiceStaff"]["assessment"]}
            </strong>
          </div>
          {/* <Table> */}
          {/* <tbody> */}
          {/* <tr>{this.serviceStaffHeaderList}</tr> */}
          {/* {this.props.table15Rows} */}
          {/* </tbody> */}
          {/* </Table> */}
        </div>
        <div className="container11">
          <h2>Technical Staff</h2>
          <div className="container11">
            <p>
              <strong>{this.state.technicalStaffReport}</strong>
            </p>
            <Table>
              <tbody>
                <tr>
                  {this.renderTableHeaderList(this.technicalStaffHeaderList)}
                </tr>
                {this.displayTableData(this.props.technicalStaff)}
              </tbody>
            </Table>
          </div>
          <div className="container11">
            <h2> Deficiencies</h2>
            <p style={{ textAlign: "center" }}>
              {deficiencyMessageTechnicalStaff}
            </p>
          </div>
          <div className="container11">
            <h2> Assessment</h2>
            <strong
              style={
                this.state.result["TechnicalStaff"]["assessment"] === "POOR"
                  ? { color: "red" }
                  : this.state.result["TechnicalStaff"]["assessment"] === "FAIR"
                  ? { color: "yellow" }
                  : { color: "green" }
              }
            >
              {this.state.result["TechnicalStaff"]["assessment"]}
            </strong>
          </div>
          {/* <Table> */}
          {/* <tbody> */}
          {/* <tr>{this.technicalStaffHeaderList}</tr> */}
          {/* {this.props.table15Rows} */}
          {/* </tbody> */}
          {/* </Table> */}
        </div>
        <div className="container11">
          <h2>Head Of Department</h2>
          <div className="container11">
            {" "}
            <p>
              <strong>{this.state.HeadOfDepartmentReport}</strong>
            </p>
          </div>

          <div className="container11">
            <h2> Deficiencies</h2>
            <p style={{ textAlign: "center" }}>{deficiencyMessageHOD}</p>
          </div>
          <div className="container11">
            <h2> Assessment</h2>
            <strong
              style={
                this.state.result["HOD"]["assessment"] === "POOR"
                  ? { color: "red" }
                  : this.state.result["HOD"]["assessment"] === "FAIR"
                  ? { color: "yellow" }
                  : { color: "green" }
              }
            >
              {this.state.result["HOD"]["assessment"]}
            </strong>
          </div>
        </div>

        <div className="container11">
          <h2>Administrative Staff</h2>
          <div className="container11">
            <p>
              <strong>{this.state.administrativeStaffReport}</strong>
            </p>

            <Table>
              <tbody>
                <tr>
                  {this.renderTableHeaderList(
                    this.administrativeStaffHeaderList
                  )}
                </tr>
                {this.displayTableData(this.props.administrativeStaff)}
              </tbody>
            </Table>
          </div>
          <div className="container11">
            <h2> Deficiencies</h2>
            <p style={{ textAlign: "center" }}>
              {deficiencyMessageAdministrativeStaff}
            </p>
          </div>
          <div className="container11">
            <h2> Assessment</h2>
            <strong
              style={
                this.state.result["AdministrativeStaff"]["assessment"] ===
                "POOR"
                  ? { color: "red" }
                  : this.state.result["AdministrativeStaff"]["assessment"] ===
                    "FAIR"
                  ? { color: "yellow" }
                  : { color: "green" }
              }
            >
              {this.state.result["AdministrativeStaff"]["assessment"]}
            </strong>
          </div>
          <div className="container11">
            <h2>Final Results</h2>
            <p style={{ textAlign: "center" }}>
              {deficiencyMessageAdministrativeStaff}
            </p>
          </div>
          <div className="container11">
            <h2> Results</h2>
            <p style={{ textAlign: "center" }}>
              {`In view of the above analysis, the institution ${
                this.props.institutionName
              }${this.state.result["Recommendation"]["Approval"]}${
                this.state.result["Recommendation"]["Approval"] ===
                "SHOULD BE VISITED"
                  ? ` to confirm if the available human and physical facilities are adequate for the proposed ${this.props.programme} programme`
                  : ` until the following deficiencies are remedied for the proposed ${this.props.programme} programme`
              }`}
              {this.state.result["Recommendation"]["Approval"] !==
                "SHOULD BE VISITED" && (
                <div className="container11">
                  <p style={{ textAlign: "center" }}>
                    <ol type="i">
                      {this.state.result["MajorDeficiencies"].map(
                        (majorDeficiency) => {
                          return <li>{majorDeficiency}</li>;
                        }
                      )}
                    </ol>
                  </p>
                </div>
              )}
            </p>
            <div className="container11">
              <h2>Assessment</h2>
              <strong
                style={
                  this.state.result["Recommendation"]["assessment"] === "POOR"
                    ? { color: "red" }
                    : this.state.result["Recommendation"]["assessment"] ===
                      "FAIR"
                    ? { color: "yellow" }
                    : { color: "green" }
                }
              >
                {this.state.result["Recommendation"]["assessment"]}
              </strong>
            </div>
          </div>
          {/* <Table> */}
          {/* <tbody> */}
          {/* <tr>{this.administrativeStaffHeaderList}</tr> */}
          {/* {this.props.table15Rows} */}
          {/* </tbody> */}
          {/* </Table> */}
        </div>
      </div>
    );
  }
}
Results.propTypes = {
  result: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  result: state.ssq.result,
});

export default connect(mapStateToProps)(Results);
