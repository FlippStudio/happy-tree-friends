import * as React from "react";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Welcome from "../components/Welcome";

export default function Index() {
  return (
    <>
      <Welcome />
      <AboutUs />
      <Footer />
    </>
  );
}
