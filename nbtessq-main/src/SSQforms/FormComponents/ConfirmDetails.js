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
    this.LibraryHeaderList = [
      "id",
      "Author's Name and Title",
      "Year of Publication",
      "Area of Specialization",
      "No of Copies",
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
    this.state = {};
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
        row.push(<td> {tableData[i][key]}</td>);
      }
      let wrappedRow = <tr>{row}</tr>;
      tableRows.push(wrappedRow);
    }
    return tableRows;
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
          {/* <Table> */}
          {/* <tbody> */}
          {/* <tr>{this.staffOfficesTableHeaderList}</tr> */}
          {/* {this.props.table15Rows} */}
          {/* </tbody> */}
          {/* </Table> */}
        </div>

        <div className="container10">
          <h2>Library</h2>
          <p>
            <strong>
              You have 5 books, 5 ebooks , 5 journals and 5 e-journals
            </strong>
          </p>
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
