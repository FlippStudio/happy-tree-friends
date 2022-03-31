import { Container, Grid, Box, Typography, Stack, Button } from "@mui/material";

import classes from "../styles/home/NftCollection.module.css";
import nft from "../public/images/nft/nft.svg";
import Nft from "./collection/Nft";

const nfts = [
  {
    id: 1,
    name: "NFT Name #123",
    url: nft,
    fixedPrice: "3.21ETH",
    amountsCollection: 2000,
  },
  {
    id: 2,
    name: "NFT Name #123",
    url: nft,
    fixedPrice: "3.21ETH",
    amountsCollection: 2000,
  },
  {
    id: 3,
    name: "NFT Name #123",
    url: nft,
    fixedPrice: "3.21ETH",
    amountsCollection: 2000,
  },
  {
    id: 4,
    name: "NFT Name #123",
    url: nft,
    fixedPrice: "3.21ETH",
    amountsCollection: 2000,
  },
  {
    id: 5,
    name: "NFT Name #123",
    url: nft,
    fixedPrice: "3.21ETH",
    amountsCollection: 2000,
  },
  {
    id: 6,
    name: "NFT Name #123",
    url: nft,
    fixedPrice: "3.21ETH",
    amountsCollection: 2000,
  },
  {
    id: 7,
    name: "NFT Name #123",
    url: nft,
    fixedPrice: "3.21ETH",
    amountsCollection: 2000,
  },
  {
    id: 8,
    name: "NFT Name #123",
    url: nft,
    fixedPrice: "3.21ETH",
    amountsCollection: 2000,
  },
];

const NftCollection = () => {
  return (
    <section className="collection">
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item sm={6}>
            <Box className="flex-start">
              <Typography className="title-section" component="h2">
                NFTs Collection
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
          {nfts.map((nft) => (
            <Grid item lg={3} key={nft.id}>
              <Nft nft={nft} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default NftCollection;
