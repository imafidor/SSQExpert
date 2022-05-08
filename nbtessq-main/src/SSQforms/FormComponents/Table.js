import React from "react";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import "./Table.css";

const Table = (props) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.9 } }}
    exit={{ opacity: 0, transition: { delay: 0.6 } }}
  >
    <table className="Table">{props.children}</table>
  </motion.div>
);
export default Table;
