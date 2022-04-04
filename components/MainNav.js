import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Menuitem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Socials from "./Socials";
import classes from "../styles/MainNavigation.module.css";

const ResponsiveApp = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const lg = "d-lg-none flex-end";
  const xs = "flex-center social-down";

  const scrollTo = (e, component) => {
    handleCloseNavMenu();
    component && component.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = (e) => {
    let component = document.getElementById("about");
    scrollTo(e, component);
  };

  const scrollToCollection = (e) => {
    let component = document.getElementById("collection");
    scrollTo(e, component);
  };

  const scrollToMovies = (e) => {
    let component = document.getElementById("movies");
    scrollTo(e, component);
  };

  const scrollToNewsletter = (e) => {
    let component = document.getElementById("newsletter");
    scrollTo(e, component);
  };

  const scrollToFaq = (e) => {
    let component = document.getElementById("faq");
    scrollTo(e, component);
  };

  return (
    <AppBar position="static" className={classes.appBar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{ flexGrow: 1, display: { xs: "none", lg: "flex" } }}
            className="menu-position"
          >
            <Button onClick={scrollToAbout} className={classes.page}>
              About us
            </Button>
            <Button onClick={scrollToCollection} className={classes.page}>
              NFT Collection
            </Button>
            <Button onClick={scrollToMovies} className={classes.page}>
              Movies
            </Button>
            <Button onClick={scrollToNewsletter} className={classes.page}>
              Newsletter
            </Button>
            <Button onClick={scrollToFaq} className={classes.page}>
              FAQ
            </Button>
            <Button
              className={classes.wallet}
              onClick={handleCloseNavMenu}
              variant="text"
            >
              Wallet
            </Button>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", lg: "none" },
              justifyContent: "flex-end",
            }}
            
          >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
              {anchorElNav !== null ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", lg: "none" },
              }}
              className="menu-mobile"
            >
              <Menuitem
                onClick={scrollToAbout}
                onTouchStart={scrollToAbout}
                className={classes.page}
              >
                About us
              </Menuitem>
              <Menuitem
                onClick={scrollToCollection}
                onTouchStart={scrollToCollection}
                className={classes.page}
              >
                NFT Collection
              </Menuitem>
              <Menuitem
                onClick={scrollToMovies}
                onTouchStart={scrollToMovies}
                className={classes.page}
              >
                Movies
              </Menuitem>
              <Menuitem
                onClick={scrollToNewsletter}
                onTouchStart={scrollToNewsletter}
                className={classes.page}
              >
                Newsletter
              </Menuitem>
              <Menuitem
                onClick={scrollToFaq}
                onTouchStart={scrollToFaq}
                className={classes.page}
              >
                FAQ
              </Menuitem>
              <Menuitem sx={{ justifyContent: "center" }}>
                <Button
                  className={classes.wallet}
                  onClick={handleCloseNavMenu}
                  variant="text"
                >
                  Wallet
                </Button>
              </Menuitem>
              <Socials c={xs} />
            </Menu>
          </Box>
          <Socials c={lg} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveApp;
