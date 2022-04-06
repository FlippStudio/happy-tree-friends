import {
  Container,
  Grid,
  Box,
  Typography,
  LinearProgress,
} from "@mui/material";

import classes from "../styles/home/NftCollection.module.css";
import SliderNft from "./sliders/SliderNft";

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
                    <Grid item sm={6} key={trait.id} className={classes.progressBox}>
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
    </section>
  );
};

export default NftCollection;
