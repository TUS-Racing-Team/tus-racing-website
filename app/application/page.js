import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Application from "./Application";
import RootLayout from "../layout";

export default function Home() {
  return (
    <RootLayout title={"TU Sofia Racing Team - Application Form"}>
      <Navbar />
      <Application />
      <Footer />
    </RootLayout>
  );
}