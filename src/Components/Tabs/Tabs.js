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
  const [icons, setIcons] = useState([]);
  const [hideCol, setHideCol] = useState(["name", "email"]);
  const [changedName, setChangedName] = useState(["id", "ff"]);
  const [newName, setNewName] = useState(["iddddd", "fffff"]);
  const [black, setBlack] = useState("id");

  const [action, setAction] = useState("");
  const [itemPerPage, setItemPerPage] = useState(2);

  const setTab = (item) => {
    setCurrentTab(item);
    let FiscalYear = students;
    let Currency = students4;
    let ARSetup = students2;

    if (item === "Fiscal Year") {
      setPosts(FiscalYear);
      setIcons(["email"]);
      setHideCol(["name", "email"]);
      setBlack("id");
      setChangedName(["id", "ff"]);
      setNewName(["iddddd", "fffff"]);
      setItemPerPage(2);
      setCurrentPage(1);
    }
    if (item === "Currency") {
      setPosts(Currency);
      setIcons(["aa"]);
      setHideCol(["cc", "ff"]);
      setBlack("dd");
      setChangedName(["dd", "gg"]);
      setNewName(["dddddd", "fffff"]);
      setItemPerPage(2);
      setCurrentPage(1);
    }
    if (item === "AR Setup") {
      setPosts(ARSetup);
      setIcons(["id"]);
      setHideCol(["name"]);
      setBlack("email");
      setChangedName(["age"]);
      setNewName(["ageeeeee"]);
      setItemPerPage(2);
      setCurrentPage(1);
    }
  };

  const indexOfLastPost = currentPage * itemPerPage;
  const indexOfFirstPost = indexOfLastPost - itemPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  console.log(itemPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleChange = (event) => {
    setAction(event.target.value);
  };

  const handleItemChange = (event) => {
    setItemPerPage(event.target.value);
    setCurrentPage(1);
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

      <BasicTable
        data={currentPosts}
        black={black}
        icons={icons}
        hide={hideCol}
        name={changedName}
        newName={newName}
      />
      <Pagination
        postsPerPage={itemPerPage}
        totalPosts={posts.length}
        currentPage={currentPage}
        paginate={paginate}
      />
      <Box sx={{ margin: "10px", minWidth: 120 }}>
        <FormControl sx={{ minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small">ItemPerPage</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={itemPerPage}
            label="ItemPerPage"
            onChange={handleItemChange}
          >
            <MenuItem value={1}>One</MenuItem>
            <MenuItem value={2}>Two</MenuItem>
            <MenuItem value={3}>Three</MenuItem>
            <MenuItem value={4}>Four</MenuItem>
            <MenuItem value={5}>Five</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

export default Tabs;
