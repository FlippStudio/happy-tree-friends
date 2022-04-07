import {
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import classes from "../styles/home/Voting.module.css";
import Vote from "./voting/Vote";

const votes = [
  {
    id: 1,
    title: 'Consequat eget efficitur vel',
    desc: 'Proin nulla est, gravida non augue nec, iaculis accumsan ex. Etiam sed \
    laoreet ligula. Suspendisse mollis bibendum erat, ut dictum nibh \
    condimentum sed. Vivamus in lectus augue',
    percentY: 70,
    percentN: 59,
  },
  {
    id: 2,
    title: 'Consequat eget efficitur vel',
    desc: 'Proin nulla est, gravida non augue nec, iaculis accumsan ex. Etiam sed \
    laoreet ligula. Suspendisse mollis bibendum erat, ut dictum nibh \
    condimentum sed. Vivamus in lectus augue',
    percentY: 70,
    percentN: 59,
  },
  {
    id: 3,
    title: 'Consequat eget efficitur vel',
    desc: 'Proin nulla est, gravida non augue nec, iaculis accumsan ex. Etiam sed \
    laoreet ligula. Suspendisse mollis bibendum erat, ut dictum nibh \
    condimentum sed. Vivamus in lectus augue',
    percentY: 70,
    percentN: 59,
  },
  {
    id: 4,
    title: 'Consequat eget efficitur vel',
    desc: 'Proin nulla est, gravida non augue nec, iaculis accumsan ex. Etiam sed \
    laoreet ligula. Suspendisse mollis bibendum erat, ut dictum nibh \
    condimentum sed. Vivamus in lectus augue',
    percentY: 70,
    percentN: 59,
  },
]

const Voting = () => {

  return (
    <section className={classes.voting}>
      <Container maxWidth="xl">
        <Typography component="h2" className="title-section" textAlign="center">
          Live Voting
        </Typography>
        <Box className="flex-center">
          <Typography
            component="div"
            className={classes.desc}
            textAlign="center"
          >
            Proin nulla est, gravida non augue nec, iaculis accumsan ex. Etiam
            sed laoreet ligula. Suspendisse mollis bibendum erat.
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {votes.map((vote) => (
            <Vote vote={vote} key={vote.id} />
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default Voting;
