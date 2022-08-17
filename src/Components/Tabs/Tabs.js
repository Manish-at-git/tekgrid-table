import * as React from "react";
import { useState } from "react";
import "./Tabs.css";

import { students, students2, students4 } from "../../data";
import BasicTable from "../Table/Table";

import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import Home from "@mui/icons-material/Home";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Tabs(props) {
  const { tabs } = props;
  const [currentTab, setCurrentTab] = useState("Fiscal Year");
  console.log(currentTab);
  const setTab = (item) => {
    setCurrentTab(item);
  };

  const [action, setAction] = React.useState("");

  const handleChange = (event) => {
    setAction(event.target.value);
  };

  return (
    <div className="App">
      <div className="Home-Bar">
        <span className="Home">
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
      <div className="Tabs">
        <div className="Tab">
          {tabs.map((item, id) => (
            <span
              key={id}
              id={currentTab === item ? `tabs-${id}` : null}
              className="SingleTab"
              onClick={() => setTab(item)}
            >
              {item}
            </span>
          ))}
        </div>

        <Box sx={{ minWidth: 120 }}>
          <FormControl sx={{ minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Action</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={action}
              label="Action"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
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

export default Tabs;
