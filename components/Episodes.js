import { Container, Grid, Box, Stack, Typography, Button } from "@mui/material";
import classes from "../styles/home/NftCollection.module.css";
import video from "../public/images/episode/video.jpg";
import arrow from "../public/images/arrow.svg";
import Image from "next/image";
import Video from "./episode/Video";


const videos = [
  {
    id: 1,
    title: "Episode #1 - Lorem ipsum",
    desc: "Morbi neque nulla, consequat eget efficitur vel, eleifend ullamcorper nisi. \
        Integer semper imperdiet eros, placerat cursus eros volutpat vitae.",
    duration: "12:56",
    url: video,
  },
  {
    id: 2,
    title: "Episode #2 - Lorem ipsum",
    desc: "Morbi neque nulla, consequat eget efficitur vel, eleifend ullamcorper nisi. \
        Integer semper imperdiet eros, placerat cursus eros volutpat vitae.",
    duration: "12:56",
    url: video,
  },
  {
    id: 3,
    title: "Episode #3 - Lorem ipsum",
    desc: "Morbi neque nulla, consequat eget efficitur vel, eleifend ullamcorper nisi. \
        Integer semper imperdiet eros, placerat cursus eros volutpat vitae.",
    duration: "12:56",
    url: video,
  },
  {
    id: 4,
    title: "Episode #4 - Lorem ipsum",
    desc: "Morbi neque nulla, consequat eget efficitur vel, eleifend ullamcorper nisi. \
        Integer semper imperdiet eros, placerat cursus eros volutpat vitae.",
    duration: "12:56",
    url: video,
  },
];

const Episodes = () => {
  return (
    <section className={classes.episodes}>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item sm={6}>
            <Box className="flex-start">
              <Typography className="title-section" component="h2">
                Episodes
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={6}>
            <Box className="flex-end">
              <Stack direction="row" spacing={0}>
                <Button className={`${classes.nftBtn} ${classes.active}`}>
                  Season 1
                </Button>
                <Button className={classes.nftBtn}>Season 2</Button>
                <Button className={classes.nftBtn}>Season 3</Button>
              </Stack>
            </Box>
          </Grid>
          {videos.map((video) => (
            <Grid item sm={6} key={video.id}>
              <Video video={video} />
            </Grid>
          ))}
        </Grid>
        <Grid item xs={12}>
          <Box className="flex-center mt-4">
            <Stack direction="row" spacing={0}>
              <Button className={classes.loadMore}>
                <Image src={arrow} alt="Play video" />
              </Button>
              <Box className="flex-center">
                <Typography component="div" className={classes.loadMoreText}>Load more episodes</Typography>
              </Box>
            </Stack>
          </Box>
        </Grid>
      </Container>
    </section>
  );
};

export default Episodes;
