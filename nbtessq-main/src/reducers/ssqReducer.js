import {
  GET_CORE_SPECIALIZATIONS,
  GET_GOALS_AND_OBJECTIVES,
  GET_LABORATORIES,
  GET_LAB_EQUIPMENTS,
  GET_PROFFESSIONAL_BODIES,
  GET_RELATED_COURSES,
  GET_SERVICE_COURSES,
  GET_SERVICE_TITLES,
} from "../actions/types";

const initalState = {
  goalsAndObjectives: [],
  laboratories: [],
  labWithEquipments: [],
  specializations: [],
  relatedCourses: [],
  serviceCourses: [],
  serviceTitles: [],
  proffessionalBodies: [],
};

export default function (state = initalState, action) {
  switch (action.type) {
    case GET_GOALS_AND_OBJECTIVES:
      return {
        ...state,
        goalsAndObjectives: action.payload,
      };
    case GET_LABORATORIES:
      return {
        ...state,
        laboratories: action.payload,
      };
    case GET_LAB_EQUIPMENTS:
      return {
        ...state,
        labWithEquipments: action.payload,
      };
    case GET_CORE_SPECIALIZATIONS:
      return {
        ...state,
        specializations: action.payload,
      };
    case GET_RELATED_COURSES:
      return {
        ...state,
        relatedCourses: action.payload,
      };
    case GET_SERVICE_COURSES:
      return {
        ...state,
        serviceCourses: action.payload,
      };
    case GET_SERVICE_TITLES:
      return {
        ...state,
        serviceTitles: action.payload,
      };
    case GET_PROFFESSIONAL_BODIES:
      return {
        ...state,
        proffessionalBodies: action.payload,
      };
    default:
      return state;
  }
}
