import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import ClassroomIcon from "./ClassroomIcon";
import CurriculumIcon from "./CurriculumIcon";
import RadarIcon from "@mui/icons-material/Radar";
import ScienceIcon from "@mui/icons-material/Science";
import StaffOfficeIcon from "./StaffOfficeIcon";
import SchoolIcon from "@mui/icons-material/School";
import LecturerIcon from "./LecturerIcon";
import TechnicianIcon from "./TechnicianIcon";
import HeadOfDepartmentIcon from "./HeadOfDepartmentIcon";
import AdministrativeIcon from "./AdministrativeIcon";
import ResultIcon from "./ResultIcon";
import "./Questionnaire.css";
import ConfirmIcon from "./ConfirmIcon";
import IntroDialog from "../../section/StateInformation/IntroDialog";
import QuestionnairePane from "./QuestionnairePane";
import GoalsAndObjectives from "./GoalsAndObjectives";
import Curriculum from "./Curriculum";
import Classrooms from "./Classrooms";
import SelectLabsDialog from "./SelectLabsDialog";
import { Component } from "react";
import Laboratories from "./Laboratories";
import { connect } from "react-redux";
import { getLabEquipments } from "../../actions/ssqActions";
import HeadOfDepartment from "./HeadOfDepartment";
import StaffOffices from "./StaffOffices";
import Library from "./Library";
import TeachingStaff from "./TeachingStaff";
import ServiceStaff from "./ServiceStaff";
import TechnicalStaff from "./TechnicalStaff";
import AdministrativeStaff from "./AdministrativeStaff";
import ConfirmDetails from "./ConfirmDetails";
import { Switch } from "@material-ui/core";
import Results from "./Results";

class Questionnaire extends Component {
  constructor(props) {
    super(props);
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
      }
    ];
    this.classroomsRealModelData = {
      Classrooms: { Number: 2, Size: 50, Capacity: 50, Remarks: "Good" },
      LectureTheatre: { Number: 1, Size: 450, Capacity: 500, Remarks: "Good" },
    };
    this.laboratoriesHeaderList = [
      "id",
      "Item Description and Model",
      "Quantity",
      "Working Condition",
    ];
    this.laboratories = ["Biochemistry Laboratory", "Instrumentation Room"];
    this.laboratoriesModelData = {
      "Biochemistry Laboratory": [
        {
          id: 1,
          "Item Description and Model": "Asbestos sheets",
          Quantity: 50,
          Remarks: "Good",
        },
        {
          id: 2,
          "Item Description and Model": "Barometer",
          Quantity: 50,
          Remarks: "Good",
        },
      ],
      "Instrumentation Room": [
        {
          id: 1,
          "Item Description and Model": "Analytical Balance",
          Quantity: 50,
          Remarks: "Good",
        },
        {
          id: 2,
          "Item Description and Model": "Magnetic Stirrer",
          Quantity: 50,
          Remarks: "Good",
        },
      ],
    };
    this.labSpecs = {
      "Biochemistry Laboratory": { Area: 100, Capacity: 40 },
      "Instrumentation Room": { Area: 100, Capacity: 40 },
    };
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
        "Third Qualification": ["", "", ""],
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
      step: 11,
      confirmGoalsAndObjectives: false,
      curriculumGrade: -1,
      classroomRawData: [],
      classroomData: {
        Classrooms: { Number: 0, Size: 0, Capacity: 0 },
        LectureTheatre: { Number: 0, Size: 0, Capacity: 0 },
      },
      selectedLabs: [],
      showSelectedLabs: false,
      laboratories: [],
      labSpecs: [],
      staffOffices: [],
      books: [],
      ebooks: [],
      journals: [],
      ejournals: [],
      teachingStaff: [],
      serviceStaff: [],
      technicalStaff: [],
      administrativeStaff: [],
      HeadOfDepartment: [],
      laboratoryRows: [],
      laboratoriesData: [],
      openLabs: false,
    };
  }
  nextStep = () => {
    this.setState((prevState, props) => ({
      step: prevState.step + 1,
    }));
  };

  previousStep = () => {
    this.setState((prevState, props) => ({
      step: prevState.step - 1,
    }));
  };

  getActiveComponent = (step) => {
    switch (step) {
      case 0:
        return (
          <GoalsAndObjectives
            setGoalsAndObjectives={this.setGoalsAndObjectives}
            nextStep={this.nextStep}
            previousStep={this.previousStep}
          />
        );
      case 1:
        return (
          <Curriculum
            setCurriculumData={this.setCurriculumData}
            nextStep={this.nextStep}
            previousStep={this.previousStep}
          />
        );
      case 2:
        return (
          <Classrooms
            showSelectLabs={this.goToSelectLabs}
            transformClassroomData={this.transformClassroomData}
            nextStep={this.nextStep}
            previousStep={this.previousStep}
          />
        );
      case 3:
        return (
          this.state.openLabs && (
            <Laboratories
              initializeTable={this.initializeTable}
              laboratoryRows={this.state.laboratoryRows}
              handleChange={this.handleChange}
              addRow={this.addRow}
              deleteLastRow={this.deleteLastRow}
              laboratoryData={this.state.laboratoriesData}
              setLaboratoriesData={this.setLaboratoriesData}
              nextStep={this.nextStep}
              previousStep={this.previousStep}
              selectedLabs={this.state.selectedLabs}
            />
          )
        );
      case 4:
        return (
          <StaffOffices
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            setStaffOfficesData={this.setStaffOfficesData}
          />
        );
      case 5:
        return (
          <Library
            setLibraryData={this.setLibraryData}
            nextStep={this.nextStep}
            previousStep={this.previousStep}
          />
        );
      case 6:
        return (
          <TeachingStaff
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            setTeachingStaffData={this.setTeachingStaffData}
          />
        );
      case 7:
        return (
          <ServiceStaff
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            setServiceStaffData={this.setServiceStaffData}
          />
        );
      case 8:
        return (
          <TechnicalStaff
            TechnicalStaff
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            setTechnicalStaffData={this.setTechnicalStaffData}
          />
        );
      case 9:
        return (
          <HeadOfDepartment
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            setHeadOfDepartmentData={this.setHeadOfDepartmentData}
          />
        );
      case 10:
        return (
          <AdministrativeStaff
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            setAdministrativeStaffData={this.setAdministrativeStaffData}
          />
        );
      case 11:
        return (
          <ConfirmDetails
            goalsAndObjectives={true}
            curriculum={2}
            classroom={this.classroomsModelData}
            classroomRawData={this.state.classroomRawData}
            laboratories={this.laboratoriesModelData}
            labKeys={Object.keys(this.laboratoriesModelData)}
            labSpecs={this.labSpecs}
            staffOffices={this.staffOfficesModelData}
            books={this.booksModelData}
            ebooks={this.booksModelData}
            journals={this.journalsModelData}
            ejournals={this.journalsModelData}
            teachingStaff={this.teachingStaffModelData}
            serviceStaff={this.serviceStaffModelData}
            technicalStaff={this.teachingStaffModelData}
            HeadOfDepartment={this.HODModelData}
            administrativeStaff={this.administrativeStaffModelData}
            nextStep={this.nextStep}
            previousStep={this.previousStep}
          />
        );
      case 12:
        return (
          <Results
            goalsAndObjectives={true}
            curriculum={2}
            classroom={this.classroomsModelData}
            classroomRawData={this.state.classroomRawData}
            laboratories={this.laboratoriesModelData}
            labKeys={Object.keys(this.laboratoriesModelData)}
            labSpecs={this.labSpecs}
            staffOffices={this.staffOfficesModelData}
            books={this.booksModelData}
            ebooks={this.booksModelData}
            journals={this.journalsModelData}
            ejournals={this.journalsModelData}
            teachingStaff={this.teachingStaffModelData}
            serviceStaff={this.serviceStaffModelData}
            technicalStaff={this.teachingStaffModelData}
            HeadOfDepartment={this.HODModelData}
            administrativeStaff={this.administrativeStaffModelData}
            institutionName={this.props.institutionName}
            programme="HND SLT Biochemistry"
          />
        );
      default:
        break;
    }
  };

  setSelectedLabs = (selectedLabs) => {
    this.setState({ selectedLabs: selectedLabs });
  };
  transformClassroomData = (classroomData) => {
    var initialData = {
      Classrooms: { Number: 0, Size: 0, Capacity: 0, Remarks: "" },
      LectureTheatre: { Number: 0, Size: 0, Capacity: 0, Remarks: "" },
    };
    initialData.Classrooms.Number = classroomData[0]["Number"];
    initialData.Classrooms.Size = classroomData[0]["Size in (MeterSquare)"];
    initialData.Classrooms.Capacity =
      classroomData[0]["Capacity (No. of Students)"];
    initialData.Classrooms.Remarks = classroomData[0]["Remarks"];

    initialData.LectureTheatre.Number = classroomData[1]["Number"];
    initialData.LectureTheatre.Size = classroomData[1]["Size in (MeterSquare)"];
    initialData.LectureTheatre.Capacity =
      classroomData[1]["Capacity (No. of Students)"];
    initialData.Classrooms.Remarks = classroomData[1]["Remarks"];

    this.setState({ classroomData: initialData });
    this.setState({ classroomRawData: classroomData });
  };

  setLaboratoriesData = (labSpecs, laboratories) => {
    this.setState({ labSpecs: labSpecs });
    this.setState({ laboratories: laboratories });
  };

  setStaffOfficesData = (staffOffices) => {
    this.setState({ staffOffices: staffOffices });
  };
  setLibraryData = (books, ebooks, journals, ejournals) => {
    this.setState((prevState) => ({
      books: books,
      ebooks: ebooks,
      journals: journals,
      ejournals: ejournals,
    }));
  };
  setCurriculumData = (grade) => {
    this.setState({ curriculumGrade: grade });
  };

  setTeachingStaffData = (teachingStaff) => {
    this.setState({ teachingStaff: teachingStaff });
  };
  setServiceStaffData = (serviceStaff) => {
    this.setState({ serviceStaff: serviceStaff });
  };
  setTechnicalStaffData = (technicalStaff) => {
    this.setState({ technicalStaff: technicalStaff });
  };
  setAdministrativeStaffData = (administrativeStaff) => {
    this.setState({ administrativeStaff: administrativeStaff });
  };
  setHeadOfDepartmentData = (HeadOfDepartment) => {
    this.setState({ HeadOfDepartment: HeadOfDepartment });
  };

  setGoalsAndObjectives = (confirm) => {
    this.setState({ confirmGoalsAndObjectives: confirm });
  };

  goToSelectLabs = (e) => {
    // e.preventDefault();
    this.setState({ showSelectedLabs: true });
    // console.log(this.state.showSelectedLabs);
  };

  closeSelectLabs = (labs) => {
    // e.preventDefault();
    this.setSelectedLabs(labs);
    this.setState({ showSelectedLabs: false });

    this.props.getLabEquipments(labs);
    // console.log(this.state.labWithEquipments)
    console.log(this.state.showSelectedLabs);
    this.setState({ openLabs: true });

    //this.props.getSelectedLabs

    // console.log(this.props);
  };
  render() {
    console.log(this.state.confirmGoalsAndObjectives);
    console.log(this.state.step);
    console.log(this.state.showSelectedLabs);
    console.log(this.state.curriculumGrade);
    console.log(this.state.classroomData);
    console.log(this.state.classroomRawData);
    console.log(Object.keys(this.state.laboratories));
    console.log(this.classroomsRealModelData);
    const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
      backgroundColor:
        theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
      zIndex: 1,
      color: "#fff",
      width: 50,
      height: 50,
      display: "flex",
      borderRadius: "50%",
      justifyContent: "center",
      alignItems: "center",
      ...(ownerState.active && {
        backgroundImage:
          "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
        boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
      }),
      ...(ownerState.completed && {
        backgroundImage:
          "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
      }),
    }));

    const ColorlibStepIcon = (props) => {
      const { active, completed, className } = props;

      const icons = {
        1: <RadarIcon />,
        2: <CurriculumIcon />,
        3: <ClassroomIcon />,
        4: <ScienceIcon />,
        5: <StaffOfficeIcon />,
        6: <LocalLibraryIcon />,
        7: <LecturerIcon />,
        8: <SchoolIcon />,
        9: <TechnicianIcon />,
        10: <HeadOfDepartmentIcon />,
        11: <AdministrativeIcon />,
        12: <ConfirmIcon />,
        13: <ResultIcon />,
      };

      return (
        <ColorlibStepIconRoot
          ownerState={{ completed, active }}
          className={className}
        >
          {icons[String(props.icon)]}
        </ColorlibStepIconRoot>
      );
    };

    ColorlibStepIcon.propTypes = {
      /**
       * Whether this step is active.
       * @default false
       */
      active: PropTypes.bool,
      className: PropTypes.string,
      /**
       * Mark the step as completed. Is passed to child components.
       * @default false
       */
      completed: PropTypes.bool,
      /**
       * The label displayed in the step icon.
       */
      icon: PropTypes.node,
    };

    const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
      [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 22,
      },
      [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
          backgroundImage:
            "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
        },
      },
      [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
          backgroundImage:
            "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
        },
      },
      [`& .${stepConnectorClasses.line}`]: {
        height: 3,
        border: 0,
        backgroundColor:
          theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
        borderRadius: 1,
      },
    }));

    const steps = [
      "Goals and Objectives",
      "Curriculum",
      "Classrooms",
      "Laboratories",
      "Staff Offices",
      "Library",
      "Teaching Staff",
      "Service Staff",
      "Technical Staff",
      "HOD",
      "Administrative Staff",
      "Confirm Details",
      "Results",
    ];

    return (
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ width: "100%" }}
        spacing={4}
        mt={10}
      >
        {/* <IntroDialog institutionName={this.props.institutionName} /> */}
        <strong className="formTitle">
          {" "}
          <i>Please fill or tick the SSQ details below as required</i>
        </strong>

        <Stepper
          alternativeLabel
          activeStep={this.state.step}
          connector={<ColorlibConnector />}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>

        <QuestionnairePane>
           {/* <IntroDialog  */}
           {/* institutionName={this.props.institutionName}  */}
           {/* nextStep={this.nextStep}  */}
         {/* />  */}
          <SelectLabsDialog
            open={this.state.showSelectedLabs}
            closeLabs={this.closeSelectLabs}
            setSelectedLabs={this.setSelectedLabs}
            nextStep={this.nextStep}
          />
          {this.getActiveComponent(this.state.step)}
        </QuestionnairePane>
      </Stack>
    );
  }
}
Questionnaire.propTypes = {
  getLabEquipments: PropTypes.func.isRequired,
};

export default connect(null, { getLabEquipments })(Questionnaire);

// const QontoStepIcon=(props)=> {
// const { active, completed, className } = props;

// return (
// <QontoStepIconRoot ownerState={{ active }} className={className}>
// {completed ? (
// <Check className="QontoStepIcon-completedIcon" />
// ) : (
// <div className="QontoStepIcon-circle" />
// )}
// </QontoStepIconRoot>
// );
// }

// const QontoConnector = styled(StepConnector)(({ theme }) => ({
// [`&.${stepConnectorClasses.alternativeLabel}`]: {
// top: 10,
// left: 'calc(-50% + 16px)',
// right: 'calc(50% + 16px)',
// },
// [`&.${stepConnectorClasses.active}`]: {
// [`& .${stepConnectorClasses.line}`]: {
// borderColor: '#784af4',
// },
// },
// [`&.${stepConnectorClasses.completed}`]: {
// [`& .${stepConnectorClasses.line}`]: {
// borderColor: '#784af4',
// },
// },
// [`& .${stepConnectorClasses.line}`]: {
// borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
// borderTopWidth: 3,
// borderRadius: 1,
// },
// }));
// {/* <GoalsAndObjectives  setGoalsAndObjectives={this.setGoalsAndObjectives} nextStep={this.nextStep} previousStep={this.previousStep}/> */}
// {/* <Curriculum     setCurriculumData={this.setCurriculumData}  nextStep={this.nextStep} previousStep={this.previousStep}  /> */}
// {/* {}  */}
{
  /* <Classrooms */
}
{
  /* transformClassroomData={this.transformClassroomData} */
}
{
  /*   nextStep={this.nextStep} previousStep={this.previousStep}  */
}
{
  /*  />  */
}
{
  /* {this.state.openLabs && ( */
}
{
  /* <Laboratories */
}
{
  /* initializeTable={this.initializeTable} */
}
{
  /* laboratoryRows={this.state.laboratoryRows} */
}
{
  /* handleChange={this.handleChange} */
}
{
  /* addRow={this.addRow} */
}
{
  /* deleteLastRow={this.deleteLastRow} */
}
{
  /* laboratoryData={this.state.laboratoriesData} */
}
{
  /* setLaboratoriesData={this.setLaboratoriesData} */
}
{
  /* nextStep={this.nextStep} */
}
{
  /* previousStep={this.previousStep} */
}
// {/* selectedLabs={this.state.selectedLabs} */}
// {/* /> */}
// {/* )} */}
// {/*  */}
// {/* <StaffOffices  nextStep={this.nextStep} previousStep={this.previousStep} setStaffOfficesData={this.setStaffOfficesData} /> */}
// {/* <Library setLibraryData={this.setLibraryData} nextStep={this.nextStep} previousStep={this.previousStep} /> */}
// {/* <TeachingStaff nextStep={this.nextStep} previousStep={this.previousStep}  setTeachingStaffData= {this.setTeachingStaffData} /> */}
// {/* <ServiceStaff nextStep={this.nextStep} previousStep={this.previousStep} setServiceStaffData={this.setServiceStaffData} /> */}
// {/* <TechnicalStaff nextStep={this.nextStep} previousStep={this.previousStep} setTechnicalStaffData={this.setTechnicalStaffData} /> */}
// {/* <HeadOfDepartment nextStep={this.nextStep} previousStep={this.previousStep} setHeadOfDepartmentData={this.setHeadOfDepartmentData} /> */}
// {/* <AdministrativeStaff nextStep={this.nextStep} previousStep={this.previousStep} setAdministrativeStaffData={this.setAdministrativeStaffData} /> */}
// {/* <ConfirmDetails */}
// {/* goalsAndObjectives={this.state.goalsAndObjectives} */}
// {/* curriculum={this.state.curriculumGrade} */}
// {/* classroom={this.state.classroomData} */}
// {/* laboratories={this.state.laboratories} */}
// {/* labData={this.state.labData} */}
// {/* staffOffices={this.state.staffOffices} */}
// {/* books={this.state.books} */}
// {/* ebooks={this.state.ebooks} */}
// {/* journals={this.state.journals} */}
// {/* ejournals={this.state.ejournals} */}
// {/* teachingStaff={this.state.teachingStaff} */}
// {/* serviceStaff={this.state.serviceStaff} */}
// {/* technicalStaff={this.state.technicalStaff} */}
// {/* HeadOfDepartment={this.state.HeadOfDepartment} */}
// {/* administrativeStaff={this.state.administrativeStaff} */}
// {/* /> */}
