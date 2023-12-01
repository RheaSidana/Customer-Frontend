import React, { useState } from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Login from "../login/Login";
import Customer from "./../customer/Customer";
import useMAin from "./useMain";

const Main = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { header, setHeader, isLoading } = useMAin();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={4}
        direction="row"
        justifyContent="center"
        alignItems="top"
      >
        {isLoggedIn === false ? (
          <Login setIsLoggedIn={setIsLoggedIn} setHeader={setHeader} />
        ) : (
          <Customer header={header} isLoading={isLoading} />
        )}
      </Grid>
    </Box>
  );
};

export default Main;
