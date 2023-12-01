import { IconButton, TableCell, TableRow } from "@mui/material";
import EditCustomerIcon from "@mui/icons-material/ModeEditOutline";
import DeleteCustomerIcon from "@mui/icons-material/Delete";
import React, { useEffect, useState } from "react";
import EditCustomer from "./edit/EditCustomer";
import DeleteCustomer from "./delete/DeleteCustomer";
import useListContent from "./hook/useListContent";

const ListContent = ({ header, addedCustomer }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedRow, setSelectedRow] = useState();
  const { rowContent, loading, fetch } = useListContent(header);

  useEffect(() => {
    if (addedCustomer || !openEdit || !openDelete) {
      fetch();
    }
  }, [openEdit, openDelete, addedCustomer]);

  const handleOpenEdit = () => {
    setOpenEdit(true);
  };

  const handleOpenDelete = () => {
    setOpenDelete(true);
  };

  const handleDelete = (id) => {
    updateSelectedRow(id);
    handleOpenDelete();
  };

  const updateSelectedRow = (id) => {
    const rowCondition = (row) => row.id === id;
    const row = rowContent.filter(rowCondition);
    setSelectedRow(row[0]);
  };

  const handleEdit = (id) => {
    updateSelectedRow(id);
    handleOpenEdit();
  };

  return (
    <>
      {
        loading
          ? null
          : /* rowContent? */ rowContent.map((row, k) => (
              <TableRow key={row.id}>
                <TableCell>{row.first_name}</TableCell>
                <TableCell>{row.last_name}</TableCell>
                <TableCell>{row.address}</TableCell>
                <TableCell>{row.street}</TableCell>
                <TableCell>{row.city}</TableCell>
                <TableCell>{row.state}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>
                  <IconButton
                    color="secondary"
                    onClick={() => {
                      handleEdit(row.id, row);
                    }}
                  >
                    <EditCustomerIcon />
                  </IconButton>
                  <IconButton
                    color="secondary"
                    onClick={() => {
                      handleDelete(row.id);
                    }}
                  >
                    <DeleteCustomerIcon />
                  </IconButton>
                </TableCell>
                <EditCustomer
                  openEdit={openEdit}
                  setOpenEdit={setOpenEdit}
                  row={selectedRow}
                  header={header}
                />
                <DeleteCustomer
                  openDelete={openDelete}
                  setOpenDelete={setOpenDelete}
                  row={selectedRow}
                  header={header}
                />
              </TableRow>
            )) /* : null */
      }
    </>
  );
};

export default ListContent;
