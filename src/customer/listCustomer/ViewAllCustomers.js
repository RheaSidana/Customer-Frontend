import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Typography, Paper } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ListTable from "./ListTable";

const ViewAllCustomers = ({ header, addedCustomer }) => {
  return (
    <>
      <Grid lg={11}>
        <Paper
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "vh*.8",
            padding: "2em 2em",
            margin: "5em 5em 5em 5em",
            backgroundColor: "inherit",
            // backgroundColor: "#3f403f",
            color: "wheat",
          }}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            minHeight={"100%"}
            minWidth={"100%"}
            padding={"0.3em 0.3em"}
          >
            <Card
              variant="outlined"
              sx={{
                backgroundColor: "#f0b64a",
                // backgroundColor: "#edcd91",
                color: "black",
                height: "100%",
                minWidth: "90%",
                borderRadius: 15,
                boxShadow: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "1em 1em",
              }}
            >
              <CardContent
                sx={{
                  minWidth: "90%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h3"
                  style={{
                    fontFamily: '"Lucida Handwriting", cursive',
                    fontWeight: 800,
                  }}
                >
                  Customer List
                </Typography>
                <ListTable header={header} addedCustomer={addedCustomer}/>
              </CardContent>
            </Card>
          </Box>
        </Paper>
      </Grid>
    </>
  );
};

export default ViewAllCustomers;
