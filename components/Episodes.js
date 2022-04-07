import { Container, Grid, Box, Stack, Typography, Button } from "@mui/material";
import classes from "../styles/home/Movies.module.css";
import play from "../public/images/episode/play.svg";
import epi from "../public/images/episode/epi.svg";
import Image from "next/image";

const Episodes = () => {
  return (
    <section className={classes.episodes} id="movies">
      <Container maxWidth="xl" className={classes.movieContainer}>
        <Grid container spacing={3}>
          <Grid item md={5} xs={12}>
            <Box className="flex-center" height="100%">
              <Box className={classes.episodeBox}>
                <Typography className="title-section" component="h2">
                  Episodes
                </Typography>
                <Typography component="div" className={classes.movieDesc}>
                  Proin nulla est, gravida non augue nec, iaculis accumsan ex.
                  Etiam sed laoreet ligula. Suspendisse mollis bibendum erat, ut
                  dictum nibh condimentum sed. Vivamus in lectus augue
                </Typography>
                <Button className={classes.movieBtn}>
                  <Image src={play} alt="Play trailer" /> Play Trailer
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item md={7} sx={{display: {xs: 'none', md: 'block'}}}>
            <Box className="flex-center">
              <Image src={epi} alt="Coming soon" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Episodes;
