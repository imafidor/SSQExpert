import React, { PureComponent } from "react";
import "./Library.css";
import { getCoreSpecializations } from "../../actions/ssqActions";
import PropTypes from "prop-types";
import Table from "./Table";
import TableControls from "./TableControls";
import { connect } from "react-redux";
import { getLabEquipments } from "../../actions/ssqActions";
import { MenuItem } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
// import MenuItem from '@mui/material/MenuItem';
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import _ from "lodash";

import FormControls from "./FormControls";

class Library extends PureComponent {
  constructor(props) {
    super(props);
    this.LibraryHeaderList = [
      "id",
      "Author's Name and Title",
      "Year of Publication",
      "Area of Specialization",
      "No of Copies",
    ];
    this.state = {
      specializations: [],
      books: [],
      booksTableRow: [],
      ebooks: [],
      ebooksTableRow: [],
      journals: [],
      journalsTableRow: [],
      ejournals: [],
      ejournalsTableRow: [],
    };
  }
  // switch(type){
  // case("books"):return {table1Data:data,table1Rows:row}

  //  })}
  selectTableRowToChangeState = (row, type, operation) => {
    this.setState((state) => {
      switch (type) {
        case "books":
          if (operation === "ADD") {
            var booksTableRowClone = [...this.state.booksTableRow];
            booksTableRowClone.push(row);
            return { booksTableRow: booksTableRowClone };
          } else {
            var booksTableRow = [];
            booksTableRow.push(row);
            return { booksTableRow: booksTableRow };
          }
        case "ebooks":
          if (operation === "ADD") {
            var ebooksTableRowClone = [...this.state.ebooksTableRow];
            ebooksTableRowClone.push(row);
            return { ebooksTableRow: ebooksTableRowClone };
          } else {
            var ebooksTableRow = [];
            ebooksTableRow.push(row);
            return { ebooksTableRow: ebooksTableRow };
          }
        case "journals":
          if (operation === "ADD") {
            var journalsTableRowClone = [...this.state.journalsTableRow];
            journalsTableRowClone.push(row);
            return { journalsTableRow: journalsTableRowClone };
          } else {
            var journalsTableRow = [];
            journalsTableRow.push(row);
            return { journalsTableRow: journalsTableRow };
          }
        case "ejournals":
          if (operation === "ADD") {
            var ejournalsTableRowClone = [...this.state.ejournalsTableRow];
            ejournalsTableRowClone.push(row);
            return { ejournalsTableRow: ejournalsTableRowClone };
          } else {
            var ejournalsTableRow = [];
            ejournalsTableRow.push(row);
            return { ejournalsTableRow: ejournalsTableRow };
          }
      }
    });
  };
  addTableRow = (tableHeaderList, rowData, targetData) => {
    var specializations = this.state.specializations.map((specialization) => {
      return (
        <MenuItem key={Math.random} value={specialization}>
          {specialization}
        </MenuItem>
      );
    });
    var years = [];
    let currentYear = new Date().getFullYear();
    let earliestYear = 1970;
    for (let i = earliestYear; i <= currentYear; i++) {
      years.push(
        <MenuItem key={Math.random} value={i}>
          {i}
        </MenuItem>
      );
    }

    var tableRow = tableHeaderList.map((data) => {
      //var dataIndex = tableHeaderList.findIndex(rank=> rank === data);
      //console.log(dataIndex);
      if (data === "id") {
        return (
          <td key={data}>
            <input value={rowData[data]} readOnly />
          </td>
        );
      } else if (data === "Area of Specialization") {
        // console.log(this.state.laboratoriesData.length);
        return (
          <td key={data}>
            {" "}
            <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-filled-label">
                Specialization
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                onChange={(e) =>
                  this.handleChange(rowData["id"] - 1, data, targetData, e)
                }
                // value={this.state.books[rowData["id"] - 1][data]}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {specializations}
              </Select>
            </FormControl>
          </td>
        );
      } else if (data === "Year of Publication") {
        // console.log(this.state.laboratoriesData.length);
        return (
          <td key={data}>
            {" "}
            <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-filled-label">Year</InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                // (e) => this.props.handleChange("tags", e)
                onChange={(e) =>
                  this.handleChange(rowData["id"] - 1, data, targetData, e)
                }
                // value={stateData[rowData["id"] - 1][data]}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {years}
              </Select>
            </FormControl>
          </td>
        );
      } else {
        return (
          <td key={data}>
            <input
              onChange={(e) =>
                this.handleChange(rowData["id"] - 1, data, targetData, e)
              }
              row={rowData["id"] - 1}
              column={data}
              type={data === "No of Copies" ? "number" : "text"}
            />
          </td>
        );
      }
    });
    //  var officeTableRows=[];

    var wrappedTableRow = <tr key={rowData["id"]}>{tableRow}</tr>;

    this.selectTableRowToChangeState(wrappedTableRow, targetData, "ADD");
  };

  deleteLastRow = (type) => {
    if (type === "books") {
      if (this.state.books.length > 1) {
        let booksDataClone = [...this.state.books];
        booksDataClone.splice(-1, 1);
        //this.setState({table1Rows:newArray})
        let booksTableDataClone = [...this.state.booksTableRow];
        booksTableDataClone.splice(-1, 1);
        //   this.setState({table1Data:newTableDataArray})
        this.setState({ books: booksDataClone });
        this.setState({ booksTableRow: booksTableDataClone });
      }
    }
    if (type === "ebooks") {
      if (this.state.ebooks.length > 1) {
        let ebooksDataClone = [...this.state.ebooks];
        ebooksDataClone.splice(-1, 1);
        //this.setState({table1Rows:newArray})
        let ebooksTableDataClone = [...this.state.ebooksTableRow];
        ebooksTableDataClone.splice(-1, 1);
        //   this.setState({table1Data:newTableDataArray})
        this.setState({ ebooks: ebooksDataClone });
        this.setState({ ebooksTableRow: ebooksTableDataClone });
      }
      // ebooksDataClone[row][column] = e.target.value;
    }
    if (type === "journals") {
      if (this.state.journals.length > 1) {
        let journalsDataClone = [...this.state.journals];
        journalsDataClone.splice(-1, 1);
        //this.setState({table1Rows:newArray})
        let journalsTableDataClone = [...this.state.journalsTableRow];
        journalsTableDataClone.splice(-1, 1);
        //   this.setState({table1Data:newTableDataArray})
        this.setState({ journals: journalsDataClone });
        this.setState({ journalsTableRow: journalsTableDataClone });
      }
    }
    if (type === "ejournals") {
      if (this.state.ejournals.length > 1) {
        let ejournalsDataClone = [...this.state.ejournals];
        ejournalsDataClone.splice(-1, 1);
        //this.setState({table1Rows:newArray})
        let ejournalsTableDataClone = [...this.state.ejournalsTableRow];
        ejournalsTableDataClone.splice(-1, 1);
        //   this.setState({table1Data:newTableDataArray})
        this.setState({ ejournals: ejournalsDataClone });
        this.setState({ ejournalsTableRow: ejournalsTableDataClone });
      }
    }
  };

  selectTableToChangeState = (tableHeaderList, data, type, operation) => {
    this.setState(
      (state) => {
        switch (type) {
          case "books":
            if (operation === "ADD") {
              var booksDataClone = [...this.state.books];
              booksDataClone.push(data);
              return { books: booksDataClone };
            } else {
              var books = [];
              books.push(data);
              return { books: books };
            }
          case "ebooks":
            if (operation === "ADD") {
              var ebooksDataClone = [...this.state.ebooks];
              ebooksDataClone.push(data);
              return { ebooks: ebooksDataClone };
            } else {
              var ebooks = [];
              ebooks.push(data);
              return { ebooks: ebooks };
            }
          case "journals":
            if (operation === "ADD") {
              var journalsDataClone = [...this.state.journals];
              journalsDataClone.push(data);
              return { journals: journalsDataClone };
            } else {
              var journals = [];
              journals.push(data);
              return { journals: journals };
            }
          case "ejournals":
            if (operation === "ADD") {
              var ejournalsDataClone = [...this.state.ejournals];
              ejournalsDataClone.push(data);
              return { ejournals: ejournalsDataClone };
            } else {
              var ejournals = [];
              ejournals.push(data);
              return { ejournals: ejournals };
            }
        }
      },
      () => {
        if (operation === "ADD") {
          this.addTableRow(tableHeaderList, data, type);
        } else {
          this.initializeTableRows(tableHeaderList, data, type);
        }
      }
    );
  };
  handleChange = (row, column, type, e) => {
    if (type === "books") {
      var booksDataClone = [...this.state.books];
      console.log(booksDataClone);
      //   var pair = { [column]: e.target.value };
      //   _.merge(booksDataClone[row], pair);
      booksDataClone[row][column] = e.target.value;
      this.setState({ books: booksDataClone });
      console.log(this.state.books);
    }
    if (type === "ebooks") {
      var ebooksDataClone = [...this.state.ebooks];
      //   var pair = { [column]: e.target.value };
      //   _.merge(ebooksDataClone[row], pair);
      ebooksDataClone[row][column] = e.target.value;
      this.setState({ ebooks: ebooksDataClone });
      // ebooksDataClone[row][column] = e.target.value;
    }
    if (type === "journals") {
      var journalsDataClone = [...this.state.journals];
      journalsDataClone[row][column] = e.target.value;
      //   var pair = { [column]: e.target.value };
      //   _.merge(journalsDataClone[row], pair);
      this.setState({ journals: journalsDataClone });
    }
    if (type === "ejournals") {
      var ejournalsDataClone = _.cloneDeep(this.state.ejournals);
      ejournalsDataClone[row][column] = e.target.value;
      //   var pair = { [column]: e.target.value };
      //   _.merge(ejournalsDataClone[row], pair);
      this.setState({ ejournals: ejournalsDataClone });
    }
  };
  renderTableHeaderList = (tableHeaderList) => {
    return tableHeaderList.map((key, index) => {
      return <th key={index}>{key}</th>;
    });
  };

  initializeTableRows = (tableHeaderList, rowData, targetData) => {
    var specializations = this.state.specializations.map((specialization) => {
      return (
        <MenuItem key={Math.random} value={specialization}>
          {specialization}
        </MenuItem>
      );
    });
    var years = [];
    let currentYear = new Date().getFullYear();
    let earliestYear = 1970;
    for (let i = earliestYear; i <= currentYear; i++) {
      years.push(
        <MenuItem key={Math.random} value={i}>
          {i}
        </MenuItem>
      );
    }

    var tableRow = tableHeaderList.map((data) => {
      //var dataIndex = tableHeaderList.findIndex(rank=> rank === data);
      //console.log(dataIndex);
      if (data === "id") {
        return (
          <td key={data}>
            <input value={rowData[data]} readOnly />
          </td>
        );
      } else if (data === "Area of Specialization") {
        // console.log(this.state.laboratoriesData.length);
        return (
          <td key={data}>
            {" "}
            <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-filled-label">
                Specialization
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                onChange={(e) =>
                  this.handleChange(rowData["id"] - 1, data, targetData, e)
                }
                // value={this.state.books[rowData["id"] - 1][data]}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {specializations}
              </Select>
            </FormControl>
          </td>
        );
      } else if (data === "Year of Publication") {
        // console.log(this.state.laboratoriesData.length);
        return (
          <td key={data}>
            {" "}
            <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-filled-label">Year</InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                // (e) => this.props.handleChange("tags", e)
                onChange={(e) =>
                  this.handleChange(rowData["id"] - 1, data, targetData, e)
                }
                // value={stateData[rowData["id"] - 1][data]}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {years}
              </Select>
            </FormControl>
          </td>
        );
      } else {
        return (
          <td key={data}>
            <input
              onChange={(e) =>
                this.handleChange(rowData["id"] - 1, data, targetData, e)
              }
              row={rowData["id"] - 1}
              column={data}
              type={data === "No of Copies" ? "number" : "text"}
            />
          </td>
        );
      }
    });
    //  var officeTableRows=[];

    var wrappedTableRow = <tr key={rowData["id"]}>{tableRow}</tr>;

    this.selectTableRowToChangeState(wrappedTableRow, targetData, "INIT");
    //  officeTableRows.push(wrappedTableRow);

    //  this.setState({officeTableRows:officeTableRows});
  };

  initializeTableData = (tableHeaderList, targetData) => {
    var rowData = tableHeaderList.reduce(function (result, item) {
      if (item === "id") {
        result[item] = 1;
        return result;
      } else {
        result[item] = "";
        return result;
      }
    }, {});
    //   var officeData=[];

    console.log(rowData);
    //   officeData.push(rowData);

    this.selectTableToChangeState(tableHeaderList, rowData, targetData, "INIT");
    //   this.setState({officeData:officeData},()=>{
    //  this.selectTableToChangeState(TableNumber,rowData,wrappedTableRow,'INIT');

    // });
  };
  addRow = (tableHeaderList, targetData, stateData) => {
    var rowData = tableHeaderList.reduce(function (result, item) {
      //   console.log(this.state);
      if (item === "id") {
        //   console.log(this.state.books);
        // console.log(stateData);
        // console.log(stateData.length);
        result[item] = stateData[stateData.length - 1][item] + 1;
        // result[item] =
        // this.state.officeData[this.state.officeData.length - 1][item] + 1;
        return result;
      } else {
        result[item] = "";
        return result;
      }
    }, {});
    //   var officeData=[];

    console.log(rowData);
    //   officeData.push(rowData);

    this.selectTableToChangeState(tableHeaderList, rowData, targetData, "ADD");
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.specializations) {
      this.setState({ specializations: nextProps.specializations }, () => {
        this.initializeTableData(this.LibraryHeaderList, "books");
        this.initializeTableData(this.LibraryHeaderList, "ebooks");
        this.initializeTableData(this.LibraryHeaderList, "journals");
        this.initializeTableData(this.LibraryHeaderList, "ejournals");
      });
    }
  }
  componentDidMount() {
    this.props.getCoreSpecializations();
  }
  render() {
    console.log(this.state.books);
    console.log(this.state.booksTableRow);
    return (
      <div className="container5">
        <h2>Library</h2>
        <p style={{ textAlign: "center" }}>
          <ol type="i">
            <li>
              List all books, journals, periodicals and e-resources available
              for the programme to be mounted
            </li>
            <li>
              When stating the library resources for the programme take into
              account the number of students to be served{" "}
            </li>
          </ol>
        </p>
        <div className="container5">
          <h3>Books</h3>
          <Table>
            <tbody key={Math.random}>
              <tr key={Math.random}>
                {this.renderTableHeaderList(this.LibraryHeaderList)}
              </tr>
              {this.state.booksTableRow}
            </tbody>
          </Table>
          <TableControls>
            <button
              style={{ color: "#944317" }}
              onClick={() => this.deleteLastRow("books")}
            >
              DELETE LAST ROW
            </button>
            <button
              style={{ color: "#5C9210" }}
              onClick={() =>
                this.addRow(this.LibraryHeaderList, "books", this.state.books)
              }
            >
              ADD ROW
            </button>
          </TableControls>
        </div>
        <div className="container5">
          <h3>E Books</h3>
          <Table>
            <tbody key={Math.random}>
              <tr key={Math.random}>
                {this.renderTableHeaderList(this.LibraryHeaderList)}
              </tr>
              {this.state.ebooksTableRow}
            </tbody>
          </Table>
          <TableControls>
            <button
              style={{ color: "#944317" }}
              onClick={() => this.deleteLastRow("ebooks")}
            >
              DELETE LAST ROW
            </button>
            <button
              style={{ color: "#5C9210" }}
              onClick={() =>
                this.addRow(this.LibraryHeaderList, "ebooks", this.state.ebooks)
              }
            >
              ADD ROW
            </button>
          </TableControls>
        </div>
        <div className="container5">
          <h3>Journals</h3>
          <Table>
            <tbody key={Math.random}>
              <tr key={Math.random}>
                {this.renderTableHeaderList(this.LibraryHeaderList)}
              </tr>
              {this.state.journalsTableRow}
            </tbody>
          </Table>
          <TableControls>
            <button
              style={{ color: "#944317" }}
              onClick={() => this.deleteLastRow("journals")}
            >
              DELETE LAST ROW
            </button>
            <button
              style={{ color: "#5C9210" }}
              onClick={() =>
                this.addRow(
                  this.LibraryHeaderList,
                  "journals",
                  this.state.journals
                )
              }
            >
              ADD ROW
            </button>
          </TableControls>
        </div>
        <div className="container5">
          <h3>E Journals</h3>
          <Table>
            <tbody key={Math.random}>
              <tr key={Math.random}>
                {this.renderTableHeaderList(this.LibraryHeaderList)}
              </tr>
              {this.state.ejournalsTableRow}
            </tbody>
          </Table>
          <TableControls>
            <button
              style={{ color: "#944317" }}
              onClick={() => this.deleteLastRow("ejournals")}
            >
              DELETE LAST ROW
            </button>
            <button
              style={{ color: "#5C9210" }}
              onClick={() =>
                this.addRow(
                  this.LibraryHeaderList,
                  "ejournals",
                  this.state.ejournals
                )
              }
            >
              ADD ROW
            </button>
          </TableControls>
        </div>
        <FormControls wide={true}>
          <button style={{ color: "#944317" }}>PREVIOUS STEP</button>
          <button style={{ color: "#5C9210" }}>NEXT STEP</button>
        </FormControls>
      </div>
    );
  }
}
Library.propTypes = {
  getCoreSpecializations: PropTypes.func.isRequired,
  specializations: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => ({
  specializations: state.ssq.specializations,
});

export default connect(mapStateToProps, { getCoreSpecializations })(Library);
