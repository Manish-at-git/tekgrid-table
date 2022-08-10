import BasicTable from "./Components/Table/Table";

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
  // const students2 = [
  //   { id: 1, name: "Wasif", age: 21, email: "wasif@email.com" },
  //   { id: 2, name: "Ali", age: 19, email: "ali@email.com" },
  //   { id: 3, name: "Saad", age: 16, email: "saad@email.com" },
  //   { id: 4, name: "Asad", age: 25, email: "asad@email.com" },
  //   { id: 4, name: "Asad", age: 25, email: "asad@email.com" },
  // ];

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

  return (
    <div className="App">
      <BasicTable
        data={students}
        black="id"
        icons={["email", "gg", "hh", "ff"]}
      />
      <BasicTable data={students4} black="aa" icons={["gg", "hh", "ff"]} />
    </div>
  );
}

export default App;
