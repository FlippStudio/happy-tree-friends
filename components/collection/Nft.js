import Image from "next/image";
import classes from "../../styles/home/NftCollection.module.css";
import { Box, Typography, Grid } from "@mui/material";
import show from "../../public/images/nft/show.svg";

const Nft = ({ nft }) => {
  return (
    <Box className={`${classes.nftBox} flex-center`}>
      <Box>
        <Box className={`${classes.nftImage} flex-center`}>
          <Image src={nft.url} alt={nft.name} />
        </Box>
        <Typography component="div" className={classes.nftTitle}>
          {nft.name}
        </Typography>
        <Grid container spacing={2}>
          {nft.traits.map((trait) => (
            <Grid item sm={6} key={trait.id}>
              <Typography component="div" className={classes.traitTitle}>
                {trait.type}:{" "}
                <span className={classes.traitName}>{trait.name}</span>{" "}
                <Image src={show} alt="Show" />
              </Typography>
              <Typography component="div" className={classes.traitDesc}>
                {trait.rarity}% have this trait
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Nft;
