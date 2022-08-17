import { useState } from "react";
import BasicTable from "./Components/Table/Table";
import BasicTabs from "./Components/Tabs/Tabs";
import Tabs from "./Components/Tabs/Tabs";

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

  const tabs = ["Fiscal Year", "Currency", "AR Setup", "Conclusion"];

  const [currentTab, setCurrentTab] = useState("");
  console.log(currentTab);
  const setTab = (item) => {
    setCurrentTab(item);
  };

  return (
    <div className="App">
      <div
        className="Tabs"
        style={{
          width: "400px",
          margin: "30px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {tabs.map((item) => (
          <span
            key={item}
            style={{ marginRight: "10px", color: "grey" }}
            onClick={() => setTab(item)}
          >
            {item}
          </span>
        ))}
      </div>

      {currentTab === "Fiscal Year" || currentTab === "" ? (
        <BasicTable data={students} black="id" icons={["email"]} />
      ) : currentTab === "Currency" ? (
        <BasicTable data={students4} black="id" icons={["gg", "hh"]} />
      ) : currentTab === "AR Setup" ? (
        <BasicTable data={students2} black="id" icons={["name"]} />
      ) : (
        <BasicTable data={students2} black="name" icons={["id"]} />
      )}
      <BasicTabs />
    </div>
  );
}

export default App;
