import classes from "../../styles/home/About.module.css";
import Image from "next/dist/client/image";
import a1 from "../../public/images/about/1.svg";
import a2 from "../../public/images/about/2.svg";
import a3 from "../../public/images/about/3.svg";
import { Grid, Box, Typography } from "@mui/material";

const abouts = [
  {
    id: 1,
    url: a1,
    title: "Eget efficitur vel",
    desc: "Morbi neque nulla, consequat eget efficitur vel, eleifend ullamcorper nisi.",
  },
  {
    id: 2,
    url: a2,
    title: "Eget efficitur vel",
    desc: "Morbi neque nulla, consequat eget efficitur vel, eleifend ullamcorper nisi.",
  },
  {
    id: 3,
    url: a3,
    title: "Eget efficitur vel",
    desc: "Morbi neque nulla, consequat eget efficitur vel, eleifend ullamcorper nisi.",
  },
];

const About = () => {
  return (
    <Grid container spacing={4} className={classes.imageContainer}>
      {abouts.map((about) => (
        <Grid item lg={4} key={about.id}>
          <Box className="flex-center">
            <Box className={`${classes.imageBox} flex-center`}>
              <Box className={classes.imageBack}>
                <Box className={classes.image}>
                  <Image src={about.url} alt={about.title} />
                </Box>
              </Box>
            </Box>
            <Typography component="div" className={classes.title}>
              {about.title}
            </Typography>
            <Box className="flex-center">
              <Typography component="div" className={classes.imageDesc}>
                {about.desc}
              </Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default About;
