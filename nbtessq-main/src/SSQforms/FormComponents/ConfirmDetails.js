import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Table from "./Table";
import { connect } from "react-redux";
import { compileAndSaveResults } from "../../actions/ssqActions";
import FormControls from "./FormControls";

import "./ConfirmDetails.css";

import FormControl from "@mui/material/FormControl";

class ConfirmDetails extends PureComponent {
  constructor(props) {
    super(props);
    this.classroomsHeaderList = [
      "id",
      "Number",
      "Size in (MeterSquare)",
      "Capacity (No. of Students)",
      "Remarks",
    ];
    this.classroomsModelData = [
      {
        id: "Classrooms",
        Number: "2",
        "Size in (MeterSquare)": "40",
        "Capacity (No. of Students)": "40",
        Remarks: "Good Condition",
      },
      {
        id: "Lecture Theatre/Hall",
        Number: "1",
        "Size in (MeterSquare)": "200",
        "Capacity (No. of Students)": "200",
        Remarks: "Good Condition",
      },
    ];
    this.laboratoriesHeaderList = [
      "id",
      "Item Description and Model",
      "Quantity",
      "Working Condition",
    ];
    this.laboratories = ["Biochemistry Laboratory", "Instrumentation Room"];
    this.laboratoriesModelData = [
      [
        {
          id: "1",
          "Item Description and Model": "Test-tube brush",
          Quantity: "30",
          "Working Condition": "Functional",
        },
        {
          id: "2",
          "Item Description and Model": "Centrifuge",
          Quantity: "2",
          "Working Condition": "Functional",
        },
        {
          id: "3",
          "Item Description and Model": "Buster brush",
          Quantity: "20",
          "Working Condition": "Functional",
        },
        {
          id: "4",
          "Item Description and Model": "Bunsen burners",
          Quantity: "30",
          "Working Condition": "Functional",
        },
        {
          id: "5",
          "Item Description and Model": "First aid cabinet",
          Quantity: "2",
          "Working Condition": "Functional",
        },
      ],
      [
        {
          id: "1",
          "Item Description and Model": "Polarimeter",
          Quantity: "1",
          "Working Condition": "Functional",
        },
        {
          id: "2",
          "Item Description and Model": "Electrophoresis Equipment",
          Quantity: "1",
          "Working Condition": "Functional",
        },
        {
          id: "3",
          "Item Description and Model": "Infra-red Spectrophotometer (IR)",
          Quantity: "1",
          "Working Condition": "Functional",
        },
        {
          id: "4",
          "Item Description and Model": "Gas-Liquid Chromatograph (GLC)",
          Quantity: "1",
          "Working Condition": "Functional",
        },
        {
          id: "5",
          "Item Description and Model": "Bomb Calorimeter",
          Quantity: "1",
          "Working Condition": "Functional",
        },
      ],
    ];
    this.staffOfficesTableHeaderList = [
      "id",
      "Office Description",
      "Size in (MeterSquare)",
      "Capacity (No of Lecturers)",
      "Remarks",
    ];
    this.staffOfficesModelData = [
      {
        id: "1",
        "Office Description": "B03",
        "Size in (MeterSquare)": "60",
        Capacity: "1",
        Remarks: "Good Working Condition",
      },
      {
        id: "2",
        "Office Description": "C03",
        "Size in (MeterSquare)": "70",
        Capacity: "1",
        Remarks: "Good Working Condition",
      },
      {
        id: "3",
        "Office Description": "C02",
        "Size in (MeterSquare)": "65",
        Capacity: "1",
        Remarks: "Good Working Condition",
      },
      {
        id: "4",
        "Office Description": "C09",
        "Size in (MeterSquare)": "66",
        Capacity: "1",
        Remarks: "Good Working Condition",
      },
      {
        id: "5",
        "Office Description": "C08",
        "Size in (MeterSquare)": "55",
        Capacity: "1",
        Remarks: "Good Working Condition",
      },
    ];
    this.LibraryHeaderList = [
      "id",
      "Author's Name and Title",
      "Year of Publication",
      "Area of Specialization",
      "No of Copies",
    ];
    this.booksModelData = [
      {
        id: "1",
        "Author's Name and Title": "Lehninger Principles of Biochemistry",
        "Year of Publication": 2008,
        "Area of Specialization": "General Biochemistry",
        "No of Copies": "12",
      },

      {
        id: "2",
        "Author's Name and Title": "Harpers",
        "Year of Publication": 2018,
        "Area of Specialization": "Clinical Biochemistry",
        "No of Copies": "9",
      },
      {
        id: "3",
        "Author's Name and Title": "Industrial Biochemistry Ghafar",
        "Year of Publication": 2010,
        "Area of Specialization": "Industrial Biochemistry",
        "No of Copies": "7",
      },

      {
        id: "4",
        "Author's Name and Title": "Nutritional Biochemistry by Tom Brody",
        "Year of Publication": 2002,
        "Area of Specialization": "Nutritional Biochemistry",
        "No of Copies": "8",
      },
      {
        id: "5",
        "Author's Name and Title": "A Textbook of Biotechnology by S Chand",
        "Year of Publication": 2011,
        "Area of Specialization": "Biotechnology",
        "No of Copies": "11",
      },
    ];
    this.journalsModelData = [
      {
        id: "1",
        "Author's Name and Title":
          "Ever-expanding NGLY1 biology Tadashi Suzuki and Yukiko Yoshida",
        "Year of Publication": 2021,
        "Area of Specialization": "General Biochemistry",
        "No of Copies": "10",
      },
      {
        id: "2",
        "Author's Name and Title":
          "Expanding NGLY1 biology - multifunctional aspect of a cytosolic de-N-glycosylating enzyme",
        "Year of Publication": 2020,
        "Area of Specialization": "Industrial Biochemistry",
        "No of Copies": "11",
      },
      {
        id: "3",
        "Author's Name and Title":
          "Molecular connections between circadian clock and health/aging",
        "Year of Publication": 2022,
        "Area of Specialization": "Clinical Biochemistry",
        "No of Copies": "12",
      },
      {
        id: "4",
        "Author's Name and Title":
          "Nutritional biochemistry of cellular glutathione",
        "Year of Publication": 2020,
        "Area of Specialization": "Nutritional Biochemistry",
        "No of Copies": "10",
      },
      {
        id: "5",
        "Author's Name and Title": "Biotechnology and the developing world",
        "Year of Publication": 2021,
        "Area of Specialization": "Biotechnology",
        "No of Copies": "6",
      },
    ];
    this.teachingStaffModelData = [
      {
        id: 1,
        "Name of Staff": "Dr Okechukwu Anyawu",
        "First Qualification": ["Bsc", "Biochemistry", "2000"],
        "Second Qualification": ["Msc", "Biochemistry", "2005"],
        "Third Qualification": ["Phd", "Biochemistry", "2010"],
        Rank: "Chief Lecturer",
      },
      {
        id: 2,
        "Name of Staff": "Mr Winnifred Godfrey",
        "First Qualification": ["Bsc", "Biochemistry", "2005"],
        "Second Qualification": ["Msc", "Biochemistry", "2010"],
        "Third Qualification": ["", "", ""],
        Rank: "Lecturer II",
      },
      {
        id: 3,
        "Name of Staff": "Mr John Bassey",
        "First Qualification": ["Bsc", "Biochemistry", "2006"],
        "Second Qualification": ["Msc", "Biochemistry", "2009"],
        "Third Qualification": ["", "", ""],
        Rank: "Lecturer II",
      },
      {
        id: 4,
        "Name of Staff": "Emmanuel Williams",
        "First Qualification": ["Bsc", "Biochemistry", "2002"],
        "Second Qualification": ["Msc", "Biochemistry", "2006"],
        "Third Qualification": ["Phd", "Biochemistry", "2010"],
        Rank: "Lecturer II",
      },
      {
        id: 5,
        "Name of Staff": "Gabriel Johnson",
        "First Qualification": ["Bsc", "Biochemistry", "2001"],
        "Second Qualification": ["Msc", "Biochemistry", "2004"],
        "Third Qualification": ["", "", ""],
        Rank: "Lecturer II",
      },
    ];
    this.serviceStaffModelData = [
      {
        id: 1,
        "Name of Staff": "Dr Musa Balarabe",
        "First Qualification": ["Bsc", "English", "2000"],
        "Second Qualification": ["Msc", "English", "2005"],
        "Third Qualification": ["Phd", "English", "2010"],
        Rank: "Chief Lecturer",
        "Course To Teach": "GNS 401",
      },
      {
        id: 2,
        "Name of Staff": "Mr Onyewu Anya",
        "First Qualification": ["Bsc", "English", "2005"],
        "Second Qualification": ["Msc", "English", "2010"],
        "Third Qualification": ["", "", ""],
        Rank: "Lecturer II",
        "Course To Teach": "GNS 301",
      },
      {
        id: 3,
        "Name of Staff": "Mr Alhassan AliBaba",
        "First Qualification": ["Bsc", "English", "2006"],
        "Second Qualification": ["Msc", "English", "2009"],
        "Third Qualification": ["", "", ""],
        Rank: "Lecturer II",
        "Course To Teach": "GNS 302",
      },
      {
        id: 4,
        "Name of Staff": "Sofia Williams",
        "First Qualification": ["Bsc", "Computer Science", "2002"],
        "Second Qualification": ["Msc", "Computer Science", "2006"],
        "Third Qualification": ["", "", ""],
        Rank: "Lecturer II",
        "Course To Teach": "COM 301",
      },
      {
        id: 5,
        "Name of Staff": "Gabriel Johnson",
        "First Qualification": ["Bsc", "Business Admin", "2001"],
        "Second Qualification": ["Msc", "Business Admin", "2004"],
        "Third Qualification": ["", "", ""],
        Rank: "Lecturer II",
        "Course To Teach": "EDP 413",
      },
    ];
    this.technicalStaffModelData = [
      {
        id: 1,
        "Name of Staff": "Christopher Agbi",
        "First Qualification": ["ND", "SLT", "2000"],
        "Second Qualification": ["HND", "Biochemistry", "2005"],
        Rank: "Technologist I",
        "Laboratory To Mount": "Biochemistry Laboratory",
      },
      {
        id: 2,
        "Name of Staff": "Winnifred Godfrey",
        "First Qualification": ["ND", "SLT", "2005"],
        "Second Qualification": ["HND", "Biochemistry", "2010"],
        Rank: "Technologist I",
        "Laboratory To Mount": "Instrumentation Room",
      },
      {
        id: 3,
        "Name of Staff": "John Joseph",
        "First Qualification": ["ND", "SLT", "2006"],
        "Second Qualification": ["", "", ""],
        Rank: "Technician I",
        "Laboratory To Mount": "Biochemistry Laboratory",
      },
      {
        id: 4,
        "Name of Staff": "Kelvin Williams",
        "First Qualification": ["ND", "SLT", "2002"],
        "Second Qualification": ["", "", ""],
        Rank: "Technician I",
        "Laboratory To Mount": "Instrumentation Room",
      },
    ];
    this.administrativeStaffModelData = [
      {
        id: 1,
        "Name of Staff": "Cynthia Osokogu",
        "First Qualification": ["ND", "Secretariat Studies", "2000"],
        "Second Qualification": ["HND", "Secretariat Studies", "2005"],
        Appointment: "Secretary",
      },
      {
        id: 2,
        "Name of Staff": "Collins Ajimobi",
        "First Qualification": ["ND", "Office Technology Management", "2005"],
        "Second Qualification": ["HND", "Office Technology Management", "2010"],
        Appointment: "Clerical Officer",
      },
      {
        id: 3,
        "Name of Staff": "Jonah Joseph",
        "First Qualification": ["SSCE", "", "2015"],
        "Second Qualification": ["", "", ""],
        Appointment: "Messenger",
      },
    ];
    this.HODModelData = {
      Name: "Dr Okechukwu Anyawu",
      "First Qualification": ["Bsc", "Biochemistry", "2000"],
      "Second Qualification": ["Msc", "Biochemistry", "2005"],
      "Third Qualification": ["Phd", "Biochemistry", "2010"],
      Rank: "Chief Lecturer",
      "Years Of Experience": 20,
      "Proffessional Body Qualification":
        "(NISLT) Nigerian Institute of Science Laboratory Technology",
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
  renderTableHeaderList = (tableHeaderList) => {
    return tableHeaderList.map((key, index) => {
      return <th key={index}>{key}</th>;
    });
  };
  moveToNextStep = () => {
    this.props.nextStep();
  };
  // displayClassroomsData=(tableData)=>{
  // tableRows= {};
  // for (const key of Object.keys(tableData['Classrooms'])) {
  // let row=[];
  // tableData[]=
  // }
  // }
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
    let template = confirm === true ? "" : "do not";
    let report = `You ${template} follow the Goals and Objectives as stated clearly in the curriculum`;
    this.setState({ goalsAndObjectivesReport: report });
  };

  setCurriculumReport = (option) => {
    let report = "";
    switch (option) {
      case 0:
        report = "The Programme does not intend to adopt the NBTE curriculum";
        this.setState({ curriculumReport: report });
        break;
      case 1:
        report =
          "The Programme intends to adopt the NBTE curriculum without modification for local contents";
        this.setState({ curriculumReport: report });
        break;
      case 2:
        report =
          "The Programme intends to adopt the NBTE curriculum with modification for local contents";
        this.setState({ curriculumReport: report });
        break;
    }
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
    let laboratoryKeys = Object.keys(laboratories);
    // laboratories.reduce((laboratory) => {});
    let labString = laboratoryKeys.reduce(
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
      laboratoryKeys.length === 0 ? "no" : laboratoryKeys.length
    } ${
      laboratoryKeys.length < 2 ? "laboratory" : "laboratories"
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
  getResults = async (
    goalsAndObjectives,
    curriculum,
    classrooms,
    labSpecs,
    laboratories,
    staffOffices,
    books,
    ebooks,
    journals,
    ejournals,
    teachingStaff,
    serviceStaff,
    technicalStaff,
    HeadOfDepartment,
    administrativeStaff
  ) => {
    if (
      window.confirm(
        "Are you sure to have confirm the details to be correct? If yes, There is no going back!"
      )
    ) {
      this.props.compileAndSaveResults(
        goalsAndObjectives,
        curriculum,
        classrooms,
        labSpecs,
        laboratories,
        staffOffices,
        books,
        ebooks,
        journals,
        ejournals,
        teachingStaff,
        serviceStaff,
        technicalStaff,
        HeadOfDepartment,
        administrativeStaff
      );
    }
  };
  componentDidMount() {
    this.setGoalsAndObjectivesReport(this.props.goalsAndObjective);
    this.setCurriculumReport(this.props.curriculum);
    this.setClassroomReport(this.props.classroomRawData);
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
  render() {
    // "Test-tube brush" => 30,
    //    "Centrifuge"=> 2,
    //    "Buster brush"=> 20,
    //    "Bunsen burners"=> 30,
    //    "First aid cabinet"=>2,
    // Bomb Calorimeter=>1
    // "Polarimeter"=>1,
    // "Electrophoresis Equipment"=>1,
    // "Infra-red Spectrophotometer (IR)"=>1,
    // "Gas-Liquid Chromatograph (GLC)"=>1,

    var tables = this.props.labKeys.map((lab, index) => {
      return (
        <div className="container10">
          <h2>{lab}</h2>
          <Table>
            <tbody key={index}>
              <tr key={index}>
                {this.renderTableHeaderList(this.laboratoriesHeaderList)}
              </tr>
              {this.displayTableData(this.props.laboratories[lab])}
            </tbody>
          </Table>
        </div>
      );
    });

    return (
      <div className="container10">
        <h1>Please Confirm your Details before Submission</h1>
        <div className="container10">
          <h2> Goals And Objectives</h2>
          <p>
            <strong>{this.state.goalsAndObjectivesReport}</strong>
          </p>
        </div>
        <div className="container10">
          <h2> Curriculum</h2>
          <p>
            <strong>{this.state.curriculumReport}</strong>
          </p>
        </div>
        <div className="container10">
          <h2>Classrooms</h2>
          <p>
            <strong>{this.state.classroomReport}</strong>
          </p>
          <Table>
            <tbody>
              <tr>{this.renderTableHeaderList(this.classroomsHeaderList)}</tr>
              {this.displayTableData(this.classroomsModelData)}
            </tbody>
          </Table>
        </div>
        <div className="container10">
          <h2>Laboratories</h2>
          <p>
            <strong>{this.state.laboratoriesReport}</strong>
          </p>
          {tables}
          {/* <Table> */}
          {/* <tbody> */}
          {/* <tr>{this.laboratoriesHeaderList}</tr> */}
          {/* {this.props.table15Rows} */}
          {/* </tbody> */}
          {/* </Table> */}
        </div>
        <div className="container10">
          <h2>Staff Offices</h2>
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

        <div className="container10">
          <h2>Library</h2>
          <p>
            <strong>{this.props.libraryBooksReport}</strong>
          </p>
          <div className="container10">
            <h3>Books</h3>
            <Table>
              <tbody>
                <tr>{this.renderTableHeaderList(this.LibraryHeaderList)}</tr>
                {this.displayTableData(this.props.books)}
              </tbody>
            </Table>
          </div>
          <div className="container10">
            <h3>E Books</h3>
            <Table>
              <tbody>
                <tr>{this.renderTableHeaderList(this.LibraryHeaderList)}</tr>
                {this.displayTableData(this.props.ebooks)}
              </tbody>
            </Table>
          </div>
          <div className="container10">
            <h3>Journals</h3>
            <Table>
              <tbody>
                <tr>{this.renderTableHeaderList(this.LibraryHeaderList)}</tr>
                {this.displayTableData(this.props.journals)}
              </tbody>
            </Table>
          </div>
          <div className="container10">
            <h3>E-Journals</h3>
            <Table>
              <tbody>
                <tr>{this.renderTableHeaderList(this.LibraryHeaderList)}</tr>
                {this.displayTableData(this.props.ejournals)}
              </tbody>
            </Table>
          </div>

          {/* <Table> */}
          {/* <tbody> */}
          {/* <tr>{this.LibraryHeaderList}</tr> */}
          {/* {this.props.table15Rows} */}
          {/* </tbody> */}
          {/* </Table> */}
        </div>
        <div className="container10">
          <h2>Teaching Staff</h2>
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
        <div className="container10">
          <h2>Service Staff</h2>
          <p>
            <strong>{this.state.serviceStaffReport}</strong>
          </p>
          <Table>
            <tbody>
              <tr>{this.renderTableHeaderList(this.serviceStaffHeaderList)}</tr>
              {this.displayTableData(this.props.serviceStaff)}
            </tbody>
          </Table>
          {/* <Table> */}
          {/* <tbody> */}
          {/* <tr>{this.serviceStaffHeaderList}</tr> */}
          {/* {this.props.table15Rows} */}
          {/* </tbody> */}
          {/* </Table> */}
        </div>
        <div className="container10">
          <h2>Technical Staff</h2>
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
          {/* <Table> */}
          {/* <tbody> */}
          {/* <tr>{this.technicalStaffHeaderList}</tr> */}
          {/* {this.props.table15Rows} */}
          {/* </tbody> */}
          {/* </Table> */}
        </div>
        <div className="container10">
          <h2>Head Of Department</h2>
          <p>
            <strong>{this.state.HeadOfDepartmentReport}</strong>
          </p>
        </div>
        <div className="container10">
          <h2>Administrative Staff</h2>
          <p>
            <strong>{this.state.administrativeStaffReport}</strong>
          </p>
          <Table>
            <tbody>
              <tr>
                {this.renderTableHeaderList(this.administrativeStaffHeaderList)}
              </tr>
              {this.displayTableData(this.props.administrativeStaff)}
            </tbody>
          </Table>
          {/* <Table> */}
          {/* <tbody> */}
          {/* <tr>{this.administrativeStaffHeaderList}</tr> */}
          {/* {this.props.table15Rows} */}
          {/* </tbody> */}
          {/* </Table> */}
        </div>
        <FormControls wide={true}>
          <button
            style={{ color: "#944317" }}
            onClick={this.props.previousStep}
          >
            PREVIOUS STEP
          </button>
          <button
            style={{ color: "#5C9210" }}
            onClick={() =>
              this.getResults(
                this.props.goalsAndObjectives,
                this.props.curriculum,
                this.props.classroom,
                this.props.labSpecs,
                this.props.laboratories,
                this.props.staffOffices,
                this.props.books,
                this.props.ebooks,
                this.props.journals,
                this.props.ejournals,
                this.props.teachingStaff,
                this.props.serviceStaff,
                this.props.technicalStaff,
                this.props.HeadOfDepartment,
                this.props.administrativeStaff
              ).then(this.props.nextStep())
            }
          >
            GO TO RESULTS
          </button>
        </FormControls>
        {/* this.props.goalsAndObjectives={this.state.goalsAndObjectives} */}
        {/* this.props.curriculum={this.state.curriculumGrade} */}
        {/* this.props.classroom={this.state.classroomData} */}
        {/* this.props.laboratories={this.state.laboratories} */}
        {/* labData={this.state.labData} */}
        {/* this.props.staffOffices={this.state.staffOffices} */}
        {/* books={this.state.books} */}
        {/* ebooks={this.state.ebooks} */}
        {/* journals={this.state.journals} */}
        {/* ejournals={this.state.ejournals} */}
        {/* teachingStaff={this.state.teachingStaff} */}
        {/* serviceStaff={this.state.serviceStaff} */}
        {/* technicalStaff={this.state.technicalStaff} */}
        {/* HeadOfDepartment={this.state.HeadOfDepartment} */}
        {/* administrativeStaff={this.state.administrativeStaff} */}
        {/* if(window.confirm("Are you sure? This will delete the project and all the data related to it")){  */}
        {/* await axios.delete(`https://agile-int-ppm-tool.herokuapp.com/api/project/${id}`) */}
        {/* dispatch({ */}
        {/* type:DELETE_PROJECT, */}
        {/* payload:id */}
        {/* }) */}
        {/* } */}
      </div>
    );
  }
}
ConfirmDetails.propTypes = {
  compileAndSaveResults: PropTypes.func.isRequired,
};
export default connect(null, { compileAndSaveResults })(ConfirmDetails);
