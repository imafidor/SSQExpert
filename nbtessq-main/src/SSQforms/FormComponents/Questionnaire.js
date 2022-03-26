import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import ClassroomIcon from './ClassroomIcon';
import CurriculumIcon from './CurriculumIcon';
import RadarIcon from "@mui/icons-material/Radar";
import ScienceIcon from '@mui/icons-material/Science';
import StaffOfficeIcon from './StaffOfficeIcon';
import SchoolIcon from '@mui/icons-material/School';
import LecturerIcon from './LecturerIcon';
import TechnicianIcon from './TechnicianIcon';
import HeadOfDepartmentIcon from './HeadOfDepartmentIcon';
import AdministrativeIcon from './AdministrativeIcon';
import ResultIcon from './ResultIcon';
import './Questionnaire.css'
import IntroDialog from '../../section/StateInformation/IntroDialog';


import { Component } from 'react'

class Questionnaire extends Component {
  constructor(props) {
    super(props)

    this.state = {
      step:0
      
    }
  }
getActiveComponent=(step)=>{

}

nextStep=()=>{
  this.setState((prevState, props) => ({
    step: prevState.step + 1
})); 
}
previousStep=()=>{
  this.setState((prevState, props) => ({
    step: prevState.step - 1
})); 
}
  render() {
    const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
      zIndex: 1,
      color: '#fff',
      width: 50,
      height: 50,
      display: 'flex',
      borderRadius: '50%',
      justifyContent: 'center',
      alignItems: 'center',
      ...(ownerState.active && {
        backgroundImage:
          'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
      }),
      ...(ownerState.completed && {
        backgroundImage:
          'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
      }),
    }));
    const ColorlibStepIcon=(props)=> {
      const { active, completed, className } = props;
    
      const icons = {
        1: <RadarIcon/>,
        2: <CurriculumIcon/>,
        3: <ClassroomIcon />,
        4:<ScienceIcon/>,
        5: <StaffOfficeIcon/>,
        6: <LocalLibraryIcon/>,
        7: <LecturerIcon/>,
        8: <SchoolIcon/>,
        9:<TechnicianIcon/>,
        10: <HeadOfDepartmentIcon/>,
        11: <AdministrativeIcon />,
        12:<ResultIcon/>
      };
    
      return (
        <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
          {icons[String(props.icon)]}
        </ColorlibStepIconRoot>
      );
    }
    
    const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
      color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
      display: 'flex',
      height: 22,
      alignItems: 'center',
      ...(ownerState.active && {
        color: '#784af4',
      }),
      '& .QontoStepIcon-completedIcon': {
        color: '#784af4',
        zIndex: 1,
        fontSize: 18,
      },
      '& .QontoStepIcon-circle': {
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'currentColor',
      },
    }));
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
            'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
      },
      [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
          backgroundImage:
            'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
      },
      [`& .${stepConnectorClasses.line}`]: {
        height: 3,
        border: 0,
        backgroundColor:
          theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
        borderRadius: 1,
      },
    }));
    
    const QontoStepIcon=(props)=> {
      const { active, completed, className } = props;
    
      return (
        <QontoStepIconRoot ownerState={{ active }} className={className}>
          {completed ? (
            <Check className="QontoStepIcon-completedIcon" />
          ) : (
            <div className="QontoStepIcon-circle" />
          )}
        </QontoStepIconRoot>
      );
    }
    
    const QontoConnector = styled(StepConnector)(({ theme }) => ({
      [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
      },
      [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
          borderColor: '#784af4',
        },
      },
      [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
          borderColor: '#784af4',
        },
      },
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
        borderTopWidth: 3,
        borderRadius: 1,
      },
    }));
  
    const steps = ['Goals and Objectives', 'Curriculum', 'Classrooms', 'Laboratories', 'Staff Offices', 'Library',
'Teaching Staff','Service Staff' , 'Technical Staff',
'HOD' ,'Administrative Staff','Results'];
    
return (

      <Stack sx={{ width: '100%' }} spacing={4} mt={10}>
        <IntroDialog institutionName={this.props.institutionName}/>
     <strong className = 'formTitle' > <i>Please fill or tick the SSQ details below as required</i></strong>
      <Stepper alternativeLabel activeStep={1} connector={<ColorlibConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
    
    )
  }
}

export default Questionnaire



















