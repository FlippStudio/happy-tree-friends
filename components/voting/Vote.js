import { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  Button,
  RadioGroup,
  Radio,
  LinearProgress,
} from "@mui/material";
import classes from "../../styles/home/Voting.module.css";

const y = 1;
const n = 0;

const Vote = ({ vote }) => {
  const [value, setValue] = useState(y);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Grid item md={6} xs={12}>
      <Box className={classes.votingBox}>
        <Typography component="div" className={classes.votingTitle}>
          {vote.title}
        </Typography>
        <Typography component="div" className={classes.votingDesc}>
          {vote.desc}
        </Typography>
        <RadioGroup value={value} onChange={handleChange}>
          <Grid container spacing={3}>
            <Grid item xs={6} className={classes.radio}>
              <label>
                <Radio value={y} /> Yes <span>{vote.percentY}%</span>
              </label>
              <LinearProgress variant="determinate" value={vote.percentY} />
            </Grid>
            <Grid item xs={6} className={classes.radio}>
              <label>
                <Radio value={n} /> No <span>{vote.percentN}%</span>
              </label>
              <LinearProgress variant="determinate" value={vote.percentN} />
            </Grid>
          </Grid>
        </RadioGroup>

        <Button className={classes.votingBtn}>Connect Wallet</Button>
      </Box>
    </Grid>
  );
};

export default Vote;
