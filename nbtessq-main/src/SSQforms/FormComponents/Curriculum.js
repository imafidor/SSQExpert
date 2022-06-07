import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import React, { PureComponent } from "react";
import FormControls from "./FormControls";
import "./Curriculum.css";
class Curriculum extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      grade: -1,
    };
  }
  onCheckChanged = (e) => {
    this.setState({ grade: e.target.value });
  };
  moveToNextStep = (grade) => {
    this.props.setCurriculumData(grade);
    this.props.nextStep();
  };

  render() {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, transition: { duration: 0.3 } }}
          exit={{ scale: 0, transition: { delay: 0.9 } }}
          className="container1"
        >
          <h2>Please choose one of the following options below:</h2>
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0, transition: { delay: 0.3 } }}
            className="form1"
          >
            <div className="inputGroup">
              <input
                className="input"
                id="radio1"
                name="radio"
                type="radio"
                value={2}
              />
              <motion.label
                initial={{ x: 500, opacity: 0 }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: { delay: 0.3, duration: 0.3 },
                }}
                exit={{ x: -500, opacity: 0, transition: { delay: 0.3 } }}
                className="label3"
                for="radio1"
              >
                The Programme intends to adopt the NBTE curriculum with
                modification for local contents
              </motion.label>
            </div>
            <div className="inputGroup">
              <input
                className="input"
                id="radio2"
                name="radio"
                type="radio"
                value={1}
              />
              <motion.label
                initial={{ x: 500, opacity: 0 }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: { delay: 0.6, duration: 0.3 },
                }}
                exit={{ x: -500, opacity: 0, transition: { delay: 0.6 } }}
                className="label3"
                for="radio2"
              >
                The Programme intends to adopt the NBTE curriculum without
                modification for local contents
              </motion.label>
            </div>
            <div className="inputGroup">
              <input
                className="input"
                id="radio3"
                name="radio"
                type="radio"
                value={0}
              />
              <motion.label
                initial={{ x: 500, opacity: 0 }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: { delay: 0.9, duration: 0.3 },
                }}
                exit={{ x: -500, opacity: 0, transition: { delay: 0.9 } }}
                className="label3"
                for="radio3"
              >
                The Programme does not intend to adopt the NBTE curriculum{" "}
              </motion.label>
            </div>
          </motion.form>
          <FormControls wide={true}>
            <button
              style={{ color: "#944317" }}
              onClick={this.props.previousStep}
            >
              PREVIOUS STEP
            </button>
            <button
              style={{ color: "#5C9210" }}
              onClick={() => this.moveToNextStep(this.state.grade)}
            >
              NEXT STEP
            </button>
          </FormControls>
        </motion.div>
      </AnimatePresence>
    );
  }
}

export default Curriculum;
