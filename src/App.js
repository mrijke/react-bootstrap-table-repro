import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import * as Faker from "faker";
import './App.css';


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';


const generateFakeData = (amount) => {
  const data = [];
  for (let index = 0; index < amount; index += 1) {
    data.push({
      id: index,
      firstName: Faker.name.firstName(),
      lastName: Faker.name.lastName(),
      country: Faker.address.country(),
      dateJoined: Faker.date.past(),
    });
  }
  return data;
};

const fakeData = generateFakeData(10000);


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedRow: -1 };
  }

  render() {
    return (
      <div className="App">
        <BootstrapTable
          data={fakeData}
          striped
          hover
          condensed
          pagination
          options={{
            onRowClick: (row) => this.setState({ selectedRow: row.id }),
            sizePerPage: 17,
            hideSizePerPage: true,
          }}
          selectRow={{
            mode: "radio",
            bgColor: "#82a2cc87",
            hideSelectColumn: true,
            clickToSelect: true
          }}
          keyField="id"
        >
          <TableHeaderColumn dataField="firstName" dataSort>First Name</TableHeaderColumn>
          <TableHeaderColumn dataField="lastName" dataSort>Last Name</TableHeaderColumn>
          <TableHeaderColumn dataField="country" dataSort>Country</TableHeaderColumn>
          <TableHeaderColumn dataField="dateJoined" dataSort>Date joined</TableHeaderColumn>
        </BootstrapTable>

      </div >
    );
  }
}

export default App;
