import { Container, Grid, Box, Typography, Stack, Button } from "@mui/material";

import classes from "../styles/home/NftCollection.module.css";
import nft from "../public/images/nft/nft.svg";
import Nft from "./collection/Nft";
import SliderNft from "./sliders/SliderNft";

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
    <section className={classes.collection} id="collection">
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item lg={6} xs={12}>
            <Box className="flex-start">
              <Typography className="title-section" component="h2">
                NFTs Collection
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={6} xs={12} sx={{ display: { xs: "none", sm: "block" } }}>
            <Box className={`${classes.fStart} flex-end`}>
              <Stack
                spacing={0}
                sx={{ flexDirection: { xs: "column", sm: "row" } }}
              >
                <Button className={`btn ${classes.nftBtn} ${classes.active}`}>
                  Season 1
                </Button>
                <Button className={`btn ${classes.nftBtn}`}>Season 2</Button>
                <Button className={`${classes.nftBtn} btn`}>Season 3</Button>
              </Stack>
            </Box>
          </Grid>
          {nfts.map((nft) => (
            <Grid item lg={3} md={4} sm={6} key={nft.id} sx={{ display: { xs: "none", sm: "block" } }}>
              <Nft nft={nft} />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: { xs: "block", sm: "none" }, marginTop: '30px' }}>
          <SliderNft />
        </Box>
      </Container>
    </section>
  );
};

export default NftCollection;
