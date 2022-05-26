import React, { PureComponent } from "react";
import "./Result.css";
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

    this.state = {
      result: [],
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.result) {
      this.setState({ result: nextProps.result });
    }
  }
  render() {
    return <div className="container11"></div>;
  }
}
Results.propTypes = {
  result: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  result: state.ssq.result,
});

export default connect(mapStateToProps)(Results);
