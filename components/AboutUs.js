import { Container, Box, Typography } from "@mui/material";
import classes from "../styles/home/About.module.css";
import About from "./about/About";

const AboutUs = () => {
  return (
    <Container maxWidth="xl" className={classes.about} id="about">
      <Typography component="h2" variant="h2" className="title-section">
        About Us
      </Typography>
      <Box className="flex-center">
        <Typography component="div" className={classes.desc}>
          Proin nulla est, gravida non augue nec, iaculis accumsan ex. Etiam sed
          laoreet ligula. Suspendisse mollis bibendum erat, ut dictum nibh
          condimentum sed. Vivamus in lectus augue
        </Typography>
      </Box>
      <About />
    </Container>
  );
};

export default AboutUs;
