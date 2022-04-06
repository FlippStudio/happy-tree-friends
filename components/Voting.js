import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  LinearProgress
} from "@mui/material";
import classes from "../styles/home/Voting.module.css";

const yes = 70;
const no = 59;

const styles = theme => ({
    radio: {
      '&$checked': {
        color: '#4B8DF8'
      }
    },
    checked: {}
  })

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
          <Grid item md={6} xs={12}>
            <Box className={classes.votingBox}>
              <Typography component="div" className={classes.votingTitle}>
                Consequat eget efficitur vel
              </Typography>
              <Typography component="div" className={classes.votingDesc}>
                Proin nulla est, gravida non augue nec, iaculis accumsan ex.
                Etiam sed laoreet ligula. Suspendisse mollis bibendum erat, ut
                dictum nibh condimentum sed. Vivamus in lectus augue
              </Typography>
              <Grid container spacing={3}>
                  <Grid item xs={6} className={classes.radio}>
                    <Radio /> Yes <span>{yes}%</span>
                    <LinearProgress
                        variant="determinate"
                        value={yes}
                      />
                  </Grid>
                  <Grid item xs={6} className={classes.radio}>
                    <Radio /> No <span>{no}%</span>
                    <LinearProgress
                        variant="determinate"
                        value={no}
                      />
                  </Grid>
              </Grid>
              <Button className={classes.votingBtn}>Connect Wallet</Button>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box className={classes.votingBox}>
              <Typography component="div" className={classes.votingTitle}>
                Consequat eget efficitur vel
              </Typography>
              <Typography component="div" className={classes.votingDesc}>
                Proin nulla est, gravida non augue nec, iaculis accumsan ex.
                Etiam sed laoreet ligula. Suspendisse mollis bibendum erat, ut
                dictum nibh condimentum sed. Vivamus in lectus augue
              </Typography>
              <Grid container spacing={3}>
                  <Grid item xs={6} className={classes.radio}>
                    <Radio /> Yes <span>{yes}%</span>
                    <LinearProgress
                        variant="determinate"
                        value={yes}
                      />
                  </Grid>
                  <Grid item xs={6} className={classes.radio}>
                    <Radio /> No <span>{no}%</span>
                    <LinearProgress
                        variant="determinate"
                        value={no}
                      />
                  </Grid>
              </Grid>
              <Button className={classes.votingBtn}>Connect Wallet</Button>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box className={classes.votingBox}>
              <Typography component="div" className={classes.votingTitle}>
                Consequat eget efficitur vel
              </Typography>
              <Typography component="div" className={classes.votingDesc}>
                Proin nulla est, gravida non augue nec, iaculis accumsan ex.
                Etiam sed laoreet ligula. Suspendisse mollis bibendum erat, ut
                dictum nibh condimentum sed. Vivamus in lectus augue
              </Typography>
              <Grid container spacing={3}>
                  <Grid item xs={6} className={classes.radio}>
                    <Radio /> Yes <span>{yes}%</span>
                    <LinearProgress
                        variant="determinate"
                        value={yes}
                      />
                  </Grid>
                  <Grid item xs={6} className={classes.radio}>
                    <Radio /> No <span>{no}%</span>
                    <LinearProgress
                        variant="determinate"
                        value={no}
                      />
                  </Grid>
              </Grid>
              <Button className={classes.votingBtn}>Connect Wallet</Button>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box className={classes.votingBox}>
              <Typography component="div" className={classes.votingTitle}>
                Consequat eget efficitur vel
              </Typography>
              <Typography component="div" className={classes.votingDesc}>
                Proin nulla est, gravida non augue nec, iaculis accumsan ex.
                Etiam sed laoreet ligula. Suspendisse mollis bibendum erat, ut
                dictum nibh condimentum sed. Vivamus in lectus augue
              </Typography>
              <Grid container spacing={3}>
                  <Grid item xs={6} className={classes.radio}>
                    <Radio /> Yes <span>{yes}%</span>
                    <LinearProgress
                        variant="determinate"
                        value={yes}
                      />
                  </Grid>
                  <Grid item xs={6} className={classes.radio}>
                    <Radio /> No <span>{no}%</span>
                    <LinearProgress
                        variant="determinate"
                        value={no}
                      />
                  </Grid>
              </Grid>
              <Button className={classes.votingBtn}>Connect Wallet</Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Voting;
