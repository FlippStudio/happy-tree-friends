import Image from "next/image";
import classes from "../../styles/home/NftCollection.module.css";
import { Box, Typography, Button } from "@mui/material";

const Nft = ({nft}) => {
  return (
    <Box className={classes.nftBox}>
      <Typography component="div" className={classes.nftTitle}>
        {nft.name}
      </Typography>
      <Box className={`${classes.nftImage} flex-center`}>
        <Image src={nft.url} alt={nft.name} />
      </Box>
      <Box className="flex-space">
        <Typography component="span" className={classes.label}>
          Fixed price
        </Typography>
        <Typography component="span" className={classes.price}>
          {nft.fixedPrice}
        </Typography>
      </Box>
      <Box className="flex-space">
        <Typography component="span" className={classes.sublabel}>
          One of {nft.amountsCollection}
        </Typography>
        <Typography component="span" className={classes.sublabel}>
          Instant price
        </Typography>
      </Box>
      <Button className={classes.itemBtn}>MINT</Button>
    </Box>
  );
};

export default Nft;
