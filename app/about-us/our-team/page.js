import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import RootLayout from "../../layout";
import OurTeam from "./OurTeam";

export default function Home() {
  return (
    <RootLayout title={"TU Sofia Racing Team - Our Team"}>
      <Navbar />
      <OurTeam />
      <Footer />
    </RootLayout>
  );
}
