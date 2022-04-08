import {
  Container,
  Grid,
  Box,
  Typography,
  LinearProgress,
} from "@mui/material";

import classes from "../styles/home/NftCollection.module.css";
import SliderNft from "./sliders/SliderNft";
import icon from "../public/images/voting/voteIcons.svg";
import voting from "../public/images/voting/voting.svg";
import Image from "next/image";
const traits = [
  {
    id: 1,
    title: "Items",
    percent: 65,
    desc: "Lorem ipsum dolor sit amet",
  },
  {
    id: 2,
    title: "Something",
    percent: 70,
    desc: "Lorem ipsum dolor sit amet",
  },
  {
    id: 3,
    title: "Something",
    percent: 70,
    desc: "Lorem ipsum dolor sit amet",
  },
  {
    id: 4,
    title: "First collection",
    percent: 59,
    desc: "Lorem ipsum dolor sit amet",
  },
];

const NftCollection = () => {
  return (
    <section className={classes.collection} id="collection">
      <Container maxWidth="xl">
        <Grid container spacing={10}>
          <Grid item lg={6} xs={12}>
            <Box className={`${classes.nftBoxContent} flex-center`}>
              <Box>
                <Typography className="title-section" component="h2">
                  NFTs Collection
                </Typography>
                <Typography className={classes.nftDesc} component="div">
                  Proin nulla est, gravida non augue nec, iaculis accumsan ex.
                  Etiam sed laoreet ligula. Suspendisse mollis bibendum erat, ut
                  dictum nibh condimentum sed. Vivamus in lectus augue
                </Typography>
                <Grid container rowSpacing={4}>
                  {traits.map((trait) => (
                    <Grid
                      item
                      sm={6}
                      key={trait.id}
                      className={classes.progressBox}
                    >
                      <Typography
                        className={classes.progressTitle}
                        component="div"
                      >
                        {trait.title} <span>{trait.percent}%</span>
                      </Typography>
                      <Typography
                        component="div"
                        className={classes.progressDesc}
                      >
                        {trait.desc}
                      </Typography>
                      <LinearProgress
                        variant="determinate"
                        value={trait.percent}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={6} xs={12}>
            <SliderNft />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="xl">
        <Grid container columnSpacing={10}>
          <Grid item lg={7} xs={12} order={{ lg: 1, xs: 2 }}>
            <Box className="flex-start">
              <Image src={voting} alt="Vote icons" />
            </Box>
          </Grid>
          <Grid item lg={5} xs={12} order={{ lg: 2, xs: 1 }}>
            <Box className="flex-start" sx={{ height: "100%" }}>
              <Box>
                <Typography component="h2" className="title-section">
                  Live Voting
                </Typography>
                <Typography component="div" className={classes.voteDesc}>
                  Proin nulla est, gravida non augue nec, iaculis accumsan
                  mollis bibendum erat.
                </Typography>
                <Typography component="div" className={classes.voteDescSmaller}>
                  Proin nulla est, gravida non augue nec, iaculis accumsan ex.
                  Etiam sed laoreet ligula. Suspendisse mollis bibendum erat.
                </Typography>
                <Box>
                  <Box className={classes.voteBox}>
                    <Box className="flex-start" sx={{ height: "100%" }}>
                      <Image src={icon} alt="Vote icons" />
                      <Typography component="div" className={classes.attr}>
                        Morbi neque nulla, consequat eget efficitur vel,
                        eleifend ullamcorper nisi.
                      </Typography>
                    </Box>
                  </Box>
                  <Box className={classes.voteBox}>
                    <Box className="flex-start" sx={{ height: "100%" }}>
                      <Image src={icon} alt="Vote icons" />
                      <Typography component="div" className={classes.attr}>
                        Morbi neque nulla, consequat eget efficitur vel,
                        eleifend ullamcorper nisi.
                      </Typography>
                    </Box>
                  </Box>
                  <Box className={classes.voteBox}>
                    <Box className="flex-start" sx={{ height: "100%" }}>
                      <Image src={icon} alt="Vote icons" />
                      <Typography component="div" className={classes.attr}>
                        Morbi neque nulla, consequat eget efficitur vel,
                        eleifend ullamcorper nisi.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default NftCollection;
