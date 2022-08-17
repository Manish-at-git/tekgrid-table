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
import Pagination from "../Table/Pagination";

function Tabs(props) {
  const { tabs } = props;
  const [currentTab, setCurrentTab] = useState("Fiscal Year");
  const [posts, setPosts] = useState(students);
  const [currentPage, setCurrentPage] = useState(1);

  const [postsPerPage] = useState(2);

  const setTab = (item) => {
    setCurrentTab(item);
    let FiscalYear = students;
    let Currency = students4;
    let ARSetup = students2;

    if (item === "Fiscal Year") {
      setPosts(FiscalYear);
    }
    if (item === "Currency") {
      setPosts(Currency);
    }
    if (item === "AR Setup") {
      setPosts(ARSetup);
    }
    // setPosts();
  };

  const [action, setAction] = useState("");

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
      {/* {currentTab === "Fiscal Year" ? (
        <BasicTable data={students} black="id" icons={["email"]} />
      ) : currentTab === "Currency" ? (
        <BasicTable data={students4} black="id" icons={["gg", "hh"]} />
      ) : currentTab === "AR Setup" ? (
        <BasicTable data={students2} black="id" icons={["name"]} />
      ) : (
        <BasicTable data={students2} black="name" icons={["id"]} />
      )} */}
      <BasicTable data={currentPosts} black="id" icons={["email"]} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
}

export default Tabs;
