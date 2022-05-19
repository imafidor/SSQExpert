import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Table from "./Table";

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
    } laboratories${laboratories.length < 2 ? "" : "s"} , ${labString}`;
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

    var tables = this.laboratories.map((lab, index) => {
      return (
        <div className="container10">
          <h2>{lab}</h2>
          <Table>
            <tbody key={index}>
              <tr key={index}>
                {this.renderTableHeaderList(this.laboratoriesHeaderList)}
              </tr>
              {this.displayTableData(this.laboratoriesModelData[index])}
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
            <strong>
              You follow the Goals and Objectives as stated clearly in the
              curriculum
            </strong>
          </p>
        </div>
        <div className="container10">
          <h2> Curriculum</h2>
          <p>
            <strong>
              The Programme intends to adopt the NBTE curriculum without
              modification for local contents
            </strong>
          </p>
        </div>
        <div className="container10">
          <h2>Classrooms</h2>
          <p>
            <strong>You have 2 classrooms and 1 Lecture Theatre</strong>
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
            <strong>
              You have 2 Laboratories Biochemistry Laboratory and
              Instrumentation Room
            </strong>
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
            <strong> You have 4 Staff Offices</strong>
          </p>
          <Table>
            <tbody>
              <tr>
                {this.renderTableHeaderList(this.staffOfficesTableHeaderList)}
              </tr>
              {this.displayTableData(this.staffOfficesModelData)}
            </tbody>
          </Table>
        </div>

        <div className="container10">
          <h2>Library</h2>
          <p>
            <strong>
              You have 5 books, 5 ebooks , 5 journals and 5 e-journals
            </strong>
          </p>
          <div className="container10">
            <h3>Books</h3>
            <Table>
              <tbody>
                <tr>{this.renderTableHeaderList(this.LibraryHeaderList)}</tr>
                {this.displayTableData(this.booksModelData)}
              </tbody>
            </Table>
          </div>
          <div className="container10">
            <h3>E Books</h3>
            <Table>
              <tbody>
                <tr>{this.renderTableHeaderList(this.LibraryHeaderList)}</tr>
                {this.displayTableData(this.booksModelData)}
              </tbody>
            </Table>
          </div>
          <div className="container10">
            <h3>Journals</h3>
            <Table>
              <tbody>
                <tr>{this.renderTableHeaderList(this.LibraryHeaderList)}</tr>
                {this.displayTableData(this.journalsModelData)}
              </tbody>
            </Table>
          </div>
          <div className="container10">
            <h3>E-Journals</h3>
            <Table>
              <tbody>
                <tr>{this.renderTableHeaderList(this.LibraryHeaderList)}</tr>
                {this.displayTableData(this.journalsModelData)}
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
            <strong>You have 4 Teaching Staff</strong>
          </p>
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
            <strong>You have 4 Service Staff</strong>
          </p>
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
            <strong>You have 4 Technical Staff</strong>
          </p>
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
            <strong>
              The name of the Head Of Department is Dr Winnifred Bonny. He has
              Bsc in Biochemistry 1983, Msc in Biochemistry 1989 and Phd in
              Biotechnology 1998. He is an associate of (BSN) Biotechnology
              Society of Nigeria. He has 24 years of experience. He is a Chief
              Lecturer.{" "}
            </strong>
          </p>
        </div>
        <div className="container10">
          <h2>Administrative Staff</h2>
          <p>
            <strong>You have 4 Administrative Staff</strong>
          </p>
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

export default ConfirmDetails;
