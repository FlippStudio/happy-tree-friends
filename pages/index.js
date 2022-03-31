import AboutUs from "../components/AboutUs";
import Episodes from "../components/Episodes";
import Footer from "../components/Footer";
import NftCollection from "../components/NftCollection";
import Welcome from "../components/Welcome";

export default function Index() {
  return (
    <>
      <Welcome />
      <AboutUs />
      <NftCollection />
      <Episodes />
      <Footer />
    </>
  );
}
