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

class Questionnaire extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 0,
      confirmGoalsAndObjectives: false,
      curriculumGrade: -1,
      classroomData: {
        Classrooms: { Number: 0, Size: 0, Capacity: 0 },
        LectureTheatre: { Number: 0, Size: 0, Capacity: 0 },
      },
      selectedLabs: [],
      showSelectedLabs: true,
      laboratories: [],
      labData,
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
            goalsAndObjectives={this.state.goalsAndObjectives}
            curriculum={this.state.curriculumGrade}
            classroom={this.state.classroomData}
            laboratories={this.state.laboratories}
            labData={this.state.labData}
            staffOffices={this.state.staffOffices}
            books={this.state.books}
            ebooks={this.state.ebooks}
            journals={this.state.journals}
            ejournals={this.state.ejournals}
            teachingStaff={this.state.teachingStaff}
            serviceStaff={this.state.serviceStaff}
            technicalStaff={this.state.technicalStaff}
            HeadOfDepartment={this.state.HeadOfDepartment}
            administrativeStaff={this.state.administrativeStaff}
          />
        );
      case 12:
        return (
          <Results
            goalsAndObjectives={this.state.goalsAndObjectives}
            curriculum={this.state.curriculumGrade}
            classroom={this.state.classroomData}
            laboratories={this.state.laboratories}
            labData={this.state.labData}
            staffOffices={this.state.staffOffices}
            books={this.state.books}
            ebooks={this.state.ebooks}
            journals={this.state.journals}
            ejournals={this.state.ejournals}
            teachingStaff={this.state.teachingStaff}
            serviceStaff={this.state.serviceStaff}
            technicalStaff={this.state.technicalStaff}
            HeadOfDepartment={this.state.HeadOfDepartment}
            administrativeStaff={this.state.administrativeStaff}
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
      Classrooms: { Number: 0, Size: 0, Capacity: 0 },
      LectureTheatre: { Number: 0, Size: 0, Capacity: 0 },
    };
    initialData.Classrooms.Number = classroomData[0]["Number"];
    initialData.Classrooms.Size = classroomData[0]["Size in (MeterSquare)"];
    initialData.Classrooms.Capacity =
      classroomData[0]["Capacity (No. of Students)"];

    initialData.LectureTheatre.Number = classroomData[1]["Number"];
    initialData.LectureTheatre.Size = classroomData[1]["Size in (MeterSquare)"];
    initialData.LectureTheatre.Capacity =
      classroomData[1]["Capacity (No. of Students)"];

    this.setState({ classroomData: initialData });
  };

  setLaboratoriesData = (labData, laboratories) => {
    this.setState({ labData: labData });
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

  goToSelectLabs = (e) => {
    e.preventDefault();
    this.setState({ showSelectedLabs: true });
    // console.log(this.state.showSelectedLabs);
  };

  closeSelectLabs = (labs) => (e) => {
    e.preventDefault();

    this.setState({ showSelectedLabs: false });
    //this.props.getSelectedLabs

    // console.log(this.props);
    this.props.getLabEquipments(labs);
    // console.log(this.state.labWithEquipments)

    this.setState({ openLabs: true });
  };
  render() {
    console.log(this.state.showSelectedLabs);
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
        {/* <IntroDialog institutionName={this.props.institutionName}/> */}
        <strong className="formTitle">
          {" "}
          <i>Please fill or tick the SSQ details below as required</i>
        </strong>

        <Stepper
          alternativeLabel
          activeStep={1}
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
          {/* <GoalsAndObjectives  setGoalsAndObjectives={this.setGoalsAndObjectives} nextStep={this.nextStep} previousStep={this.previousStep}/> */}
          {/* <Curriculum     setCurriculumData={this.setCurriculumData}  nextStep={this.nextStep} previousStep={this.previousStep}  /> */}
          {/* {}  */}
          <SelectLabsDialog
            open={this.state.showSelectedLabs}
            closeLabs={this.closeSelectLabs}
            setSelectedLabs={this.setSelectedLabs}
            nextStep={this.nextStep}
          />
          {/* <Classrooms */}
          {/* transformClassroomData={this.transformClassroomData} */}
          {/* showSelectLabs={this.goToSelectLabs}  nextStep={this.nextStep} previousStep={this.previousStep}  */}
          {/*  />  */}
          {this.state.openLabs && (
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
          )}
          {/* <IntroDialog    institutionName={this.props.institutionName}  nextStep={this.nextStep}   /> */}
          {/* <StaffOffices  nextStep={this.nextStep} previousStep={this.previousStep} setStaffOfficesData={this.setStaffOfficesData} /> */}
          {/* <Library setLibraryData={this.setLibraryData} nextStep={this.nextStep} previousStep={this.previousStep} /> */}
          {/* <TeachingStaff nextStep={this.nextStep} previousStep={this.previousStep}  setTeachingStaffData= {this.setTeachingStaffData} /> */}
          {/* <ServiceStaff nextStep={this.nextStep} previousStep={this.previousStep} setServiceStaffData={this.setServiceStaffData} /> */}
          {/* <TechnicalStaff nextStep={this.nextStep} previousStep={this.previousStep} setTechnicalStaffData={this.setTechnicalStaffData} /> */}
          {/* <HeadOfDepartment nextStep={this.nextStep} previousStep={this.previousStep} setHeadOfDepartmentData={this.setHeadOfDepartmentData} /> */}
          {/* <AdministrativeStaff nextStep={this.nextStep} previousStep={this.previousStep} setAdministrativeStaffData={this.setAdministrativeStaffData} /> */}
          <ConfirmDetails
            goalsAndObjectives={this.state.goalsAndObjectives}
            curriculum={this.state.curriculumGrade}
            classroom={this.state.classroomData}
            laboratories={this.state.laboratories}
            labData={this.state.labData}
            staffOffices={this.state.staffOffices}
            books={this.state.books}
            ebooks={this.state.ebooks}
            journals={this.state.journals}
            ejournals={this.state.ejournals}
            teachingStaff={this.state.teachingStaff}
            serviceStaff={this.state.serviceStaff}
            technicalStaff={this.state.technicalStaff}
            HeadOfDepartment={this.state.HeadOfDepartment}
            administrativeStaff={this.state.administrativeStaff}
          />
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
