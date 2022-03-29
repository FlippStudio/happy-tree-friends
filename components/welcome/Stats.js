import { Box, Stack, Typography } from "@mui/material";
import classes from "../../styles/home/Welcome.module.css";

const stats = [
  {
    id: 1,
    name: "episodes",
    amount: 112,
  },
  {
    id: 2,
    name: "artworks",
    amount: "5k",
  },
  {
    id: 3,
    name: "owners",
    amount: "10k",
  },
];

const Stats = () => {
  return (
    <Stack className={`${classes.statsContainer}`}>
      {stats.map((stat) => (
        <Box className={classes.statsBox} key={stat.id}>
          <Typography component="div" className={classes.stats}>
            {stat.amount}
          </Typography>
          <Typography component="div" className={classes.statsDesc}>
            {stat.name}
          </Typography>
        </Box>
      ))}
    </Stack>
  );
};

export default Stats;
