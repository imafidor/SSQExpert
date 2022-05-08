import {
  GET_CORE_SPECIALIZATIONS,
  GET_GOALS_AND_OBJECTIVES,
  GET_LABORATORIES,
  GET_LAB_EQUIPMENTS,
  GET_RELATED_COURSES,
} from "../actions/types";

const initalState = {
  goalsAndObjectives: [],
  laboratories: [],
  labWithEquipments: [],
  specializations: [],
  relatedCourses: [],
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
    default:
      return state;
  }
}
