import { Box, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Socials from "./Socials";

const Footer = () => {
  return (
    <section className="footer">
      <Container maxWidth="xl" sx={{ height: "100%" }}>
        <Box className="flex-space fFlex" sx={{ height: "100%" }}>
          <Typography component="div" sx={{fontSize: {xs: '12px', sm: '16px'}}}>© 2022 NFT CARTOON</Typography>
          <Socials c={"d-sm-none"} />
        </Box>
      </Container>
    </section>
  );
};

export default Footer;