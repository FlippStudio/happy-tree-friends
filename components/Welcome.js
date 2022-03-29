import { Container, Typography, Box, Button } from "@mui/material";
import classes from "../styles/home/Welcome.module.css";
import ResponsiveApp from "./MainNav";
import Image from "next/dist/client/image";
import play from "../public/images/play.svg";
import arrow from "../public/images/arrow.svg";
import AvatarGr from "./welcome/Avatar";
import Stats from "./welcome/Stats";

const scrollTo = (e) => {
  let utilities = document.getElementById("uti");
  e.preventDefault(); // Stop Page Reloading
  utilities && utilities.scrollIntoView({ behavior: "smooth" });
};

const Welcome = () => {
  return (
    <section className={classes.welcome}>
      <ResponsiveApp />
      <Container maxWidth="xl">
        <Box className="flex-center">
          <div>
            <Typography component="div" variant="h1" className={classes.title}>
              Happy Friends
            </Typography>
            <Box className="flex-end">
              <Typography component="div" className={classes.subtitle}>
                Lorem ipsum dolor sit
              </Typography>
            </Box>
            <Box className="flex-center">
              <Button className={classes.play}>
                <Image src={play} alt="Play video" />
                Play video
              </Button>
            </Box>
          </div>
        </Box>
        <Box className={`${classes.mt} flex-space-end`}>
          <Box>
            <Typography component="div" className={classes.subcontent}>
              Nulla vitae convallis lacus
            </Typography>
            <Typography component="div" className={classes.content}>
              Morbi neque nulla, <span>consequat eget efficitur vel</span>
            </Typography>
            <Box className={classes.arrowSpace}>
              <Button
                variant="contained"
                className={classes.nextSection}
                onClick={scrollTo}
              >
                <Image src={arrow} alt="Scroll to next section" height={30} />
              </Button>
              <Typography component="span" className={classes.learn}>
                Learn more
              </Typography>
            </Box>
          </Box>
          <Box>
            <Stats />
            <AvatarGr />
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default Welcome;
