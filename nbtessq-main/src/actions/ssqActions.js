import axios from "axios";
import {
  GET_ERRORS,
  GET_PROJECT,
  GET_PROJECTS,
  DELETE_PROJECT,
  GET_LABORATORIES,
  GET_GOALS_AND_OBJECTIVES,
  GET_LAB_EQUIPMENTS,
  GET_CORE_SPECIALIZATIONS,
  GET_RELATED_COURSES,
  GET_SERVICE_COURSES,
  GET_SERVICE_TITLES,
  GET_PROFFESSIONAL_BODIES,
} from "./types";

export const getGoalsAndObjectives = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:8000/api/GoalsAndObjectives");
    dispatch({
      type: GET_GOALS_AND_OBJECTIVES,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getLabEquipments = (labs) => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:8000/api/GetEquipments/", {
      params: {
        labs: labs,
      },
    });

    //    var result={};
    // result[lab]= res.data;
    //  console.log(result);
    dispatch({
      type: GET_LAB_EQUIPMENTS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getCoreSpecializations = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "http://localhost:8000/api/GetCoreSpecializations"
    );
    dispatch({
      type: GET_CORE_SPECIALIZATIONS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getProffessionalBodies = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "http://localhost:8000/api/GetProffessionalBodies"
    );
    dispatch({
      type: GET_PROFFESSIONAL_BODIES,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getRelatedCourses = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:8000/api/GetRelatedCourses");

    dispatch({
      type: GET_RELATED_COURSES,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getServiceCourses = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:8000/api/GetServiceCourses");
    dispatch({
      type: GET_SERVICE_COURSES,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getServiceTitles = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:8000/api/GetServiceTitles");
    dispatch({
      type: GET_SERVICE_TITLES,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getLaboratories = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:8000/api/Laboratories");
    dispatch({
      type: GET_LABORATORIES,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
