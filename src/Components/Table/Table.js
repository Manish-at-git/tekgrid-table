import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "./Table.css";

const useSortableData = (
  items,
  config = { key: "id", direction: "ascending" }
) => {
  let direction;
  const [sortConfig, setSortConfig] = React.useState(config);

  const requestSort = (key) => {
    direction = "ascending";
    if (sortConfig && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);
  return { items: sortedItems, requestSort };
};

export default function BasicTable(props) {
  let { black, icons } = props;
  const { items, requestSort } = useSortableData(props.data);

  const renderTableHeader = () => {
    let header = Object.keys(props.data[0]);
    return header.map((key, index) => {
      if (key === black) {
        black = index;
      }
      if (key === "id") {
        key = "hello";
      }
      return (
        <TableCell align="center" key={index} className="TableHeadCell">
          {
            <div className="Cell">
              {key.toUpperCase()}
              {"  "}
              {icons.includes(key.toLowerCase().trim()) ? null : (
                <ArrowDropDownIcon onClick={() => requestSort(key)} />
              )}
            </div>
          }
        </TableCell>
      );
    });
  };

  return (
    <>
      <div className="Table">
        <TableContainer className="TableContainer">
          <Table className="TableT" aria-label="simple table">
            <TableHead className="TableHead">
              <TableRow>{renderTableHeader()}</TableRow>
            </TableHead>
            <TableBody>
              {items.map((_, id) => {
                let col = Object.values(items[id]);

                return (
                  <TableRow key={id}>
                    {col.map((value, index) => {
                      return (
                        <TableCell
                          align="left"
                          key={index}
                          className={
                            index !== black
                              ? "TableDataCell"
                              : "TableDataCellBlack"
                          }
                        >
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
