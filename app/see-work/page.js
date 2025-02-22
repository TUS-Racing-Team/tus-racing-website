import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import SeeOurWork from "./SeeOurWork";
import RootLayout from "../layout";

export default function Home() {
  return (
    <RootLayout title={"TU Sofia Racing Team - Our work"}>
      <Navbar />
      <SeeOurWork />
      <Footer />
    </RootLayout>
  );
}
