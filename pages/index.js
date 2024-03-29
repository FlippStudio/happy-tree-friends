import AboutUs from "../components/AboutUs";
import Episodes from "../components/Episodes";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import NftCollection from "../components/NftCollection";
import Roadmap from "../components/Roadmap";
import Welcome from "../components/Welcome";

export default function Index() {
  return (
    <>
      <Welcome />
      <AboutUs />
      <NftCollection />
      <Episodes />
      <Roadmap />
      <Faq />
      <Footer />
    </>
  );
}
