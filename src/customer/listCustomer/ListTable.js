import React from "react";
import { TableBody, TableContainer, TableHead, Table } from "@mui/material";
import ListHeading from "./ListHeading";
import ListContent from "./ListContent";

const ListTable = ({ header, addedCustomer }) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <ListHeading />
        </TableHead>
        <TableBody>
          <ListContent header={header} addedCustomer={addedCustomer} />
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListTable;
