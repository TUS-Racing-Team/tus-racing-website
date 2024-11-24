import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import AboutUs from "./AboutUs";
import RootLayout from "../layout";

export default function Home() {
  return (
    <RootLayout title={"TU Sofia Racing Team - About Us"}>
      <Navbar />
      <AboutUs />
      <Footer />
    </RootLayout>
  );
}
