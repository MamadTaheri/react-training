import React from "react";
import TourCard from "./components/TourCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MyAppBar from "./components/MyAppBar";
import cities from "./data/data.json";
import { Typography } from "@mui/material";

const App = () => {
  
    console.log(cities);

  return (
    <>
      <MyAppBar />
      <Container sx={{ marginY: 5 }}>
        {
          cities.map(city => (
            <>
              <Typography variant="h4" component="h2" marginTop={5} marginBottom={3}>
                  Top {city.name} Tours
              </Typography>
              <Grid container spacing={5}>
                {
                  city.tours.map((tour, index) => <TourCard key={index} tour={tour} />)
                }
              </Grid>
            </>
          ))
        }
      </Container>
    </>
  );
};

export default App;
