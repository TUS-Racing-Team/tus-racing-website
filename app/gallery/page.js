import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Gallery from "./Gallery";
import RootLayout from "../layout";

export default function Home() {
  return (
    <RootLayout title={"TU Sofia Racing Team - Gallery"}>
      <Navbar />
      <Gallery />
      <Footer />
    </RootLayout>
  );
}
