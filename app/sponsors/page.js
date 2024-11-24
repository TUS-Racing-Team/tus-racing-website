import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Sponsors from "./Sponsors";
import RootLayout from "../layout";

export default function Home() {
  return (
    <RootLayout title={"TU Sofia Racing Team - Our Sponsors"}>
      <Navbar />
      <Sponsors />
      <Footer />
    </RootLayout>
  );
}
