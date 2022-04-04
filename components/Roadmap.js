import { Box, Container, Typography, TextField, Button } from "@mui/material";
import classes from "../styles/home/Roadmap.module.css";
import SliderRoadmap from "./sliders/SliderRoadmap";

const Roadmap = () => {
  return (
    <section className={classes.roadmap}>
      <Container maxWidth="xl">
        <Box className={classes.textSec}>
          <Typography component="h2" className="title-section">
            Road map
          </Typography>
          <Typography component="div" className={classes.desc}>
            Proin nulla est, gravida non augue nec, iaculis accumsan ex.
          </Typography>
        </Box>
      </Container>
      <SliderRoadmap />
      <Container maxWidth="xl">
        <Box className={`${classes.newsBox} flex-center`} id="newsletter">
          <Box className={classes.backBox}>
            <Typography component="h2" className="title-section">
              Newsletter
            </Typography>
            <Box className="flex-center">
              <Typography component="div" className={classes.newsDesc}>
                Proin nulla est, gravida non augue nec, iaculis accumsan ex.
                Etiam sed laoreet ligula. Suspendisse mollis bibendum erat, ut
                dictum nibh condimentum sed. Vivamus in lectus augue
              </Typography>
            </Box>

            <Box className={`${classes.emailBox} flex-center`}>
              <TextField
                id="email"
                label="Email"
                className={classes.formInput}
              />
              <Button className={`btn ${classes.newsBtn}`}>Save me</Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default Roadmap;
