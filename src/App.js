import { useState } from "react";
import BasicTable from "./Components/Table/Table";
import Home from "@mui/icons-material/Home";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import "./App.css";
import { Button } from "@mui/material";

import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function App() {
  // const students3 = [
  //   { id: 1, name: "Wasif", age: 21 },
  //   { id: 2, name: "Ali", age: 19 },
  //   { id: 3, name: "Saad", age: 16 },
  //   { id: 4, name: "Asad", age: 25 },
  //   { id: 4, name: "Asad", age: 25 },
  // ];
  const students4 = [
    {
      aa: "1",
      bb: "bb",
      cc: "cc",
      dd: "dd",
      ee: "ee",
      ff: "ff",
      gg: "gg",
      hh: "hh",
    },
    {
      aa: "2",
      bb: "bb",
      cc: "cc",
      dd: "dd",
      ee: "ee",
      ff: "ff",
      gg: "gg",
      hh: "hh",
    },
    {
      aa: "3",
      bb: "bb",
      cc: "cc",
      dd: "dd",
      ee: "ee",
      ff: "ff",
      gg: "gg",
      hh: "hh",
    },
    {
      aa: "4",
      bb: "bb",
      cc: "cc",
      dd: "dd",
      ee: "ee",
      ff: "ff",
      gg: "gg",
      hh: "hh",
    },
    {
      aa: "5",
      bb: "bb",
      cc: "cc",
      dd: "dd",
      ee: "ee",
      ff: "ff",
      gg: "gg",
      hh: "hh",
    },
  ];
  const students2 = [
    { id: 1, name: "Wasif", age: 21, email: "wasif@email.com" },
    { id: 2, name: "Ali", age: 19, email: "ali@email.com" },
    { id: 3, name: "Saad", age: 16, email: "saad@email.com" },
    { id: 4, name: "Asad", age: 25, email: "asad@email.com" },
    { id: 4, name: "Asad", age: 25, email: "asad@email.com" },
  ];

  const students = [
    {
      id: 1,
      name: "Wasif",
      age: 21,
      email: "wasif@email.com",
      address: "address",
      ff: "ff",
      gg: "gg",
      hh: "hh",
    },
    {
      id: 2,
      name: "Ali",
      age: 19,
      email: "ali@email.com",
      address: "addressss",
      ff: "ff",
      gg: "gg",
      hh: "hh",
    },
    {
      id: 3,
      name: "Saad",
      age: 16,
      email: "saad@email.com",
      address: "address",
      ff: "ff",
      gg: "gg",
      hh: "hh",
    },
    {
      id: 4,
      name: "Asad",
      age: 25,
      email: "asad@email.com",
      address: "address",
      ff: "ff",
      gg: "gg",
      hh: "hh",
    },
    {
      id: 5,
      name: "Asad",
      age: 25,
      email: "asad@email.com",
      address: "address",
      ff: "ff",
      gg: "gg",
      hh: "hh",
    },
  ];

  const tabs = ["Fiscal Year", "Currency", "AR Setup", "AP Setup"];

  const [currentTab, setCurrentTab] = useState("Fiscal Year");
  console.log(currentTab);
  const setTab = (item) => {
    setCurrentTab(item);
  };

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="App" style={{ border: "1px solid red" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        <span style={{ display: "flex", alignItems: "center", color: "grey" }}>
          <Home />{" "}
          <ArrowForwardIos
            style={{
              fontSize: "15px",
              marginLeft: "20px",
              marginRight: "20px",
            }}
          />
          Setup
        </span>
        <Button variant="contained" style={{ backgroundColor: "grey" }}>
          Add New
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        <div
          className="Tabs"
          style={{
            width: "400px",
            margin: "30px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {tabs.map((item, id) => (
            <span
              key={id}
              id={currentTab === item ? `tabs-${id}` : null}
              style={{
                marginRight: "10px",
                color: "grey",
                fontWeight: "500",
                cursor: "pointer",
              }}
              onClick={() => setTab(item)}
            >
              {item}
            </span>
          ))}
        </div>
        <div>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>

      {currentTab === "Fiscal Year" ? (
        <BasicTable data={students} black="id" icons={["email"]} />
      ) : currentTab === "Currency" ? (
        <BasicTable data={students4} black="id" icons={["gg", "hh"]} />
      ) : currentTab === "AR Setup" ? (
        <BasicTable data={students2} black="id" icons={["name"]} />
      ) : (
        <BasicTable data={students2} black="name" icons={["id"]} />
      )}
    </div>
  );
}

export default App;
