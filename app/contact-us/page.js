import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import ContactUs from "./ContactUs";
import RootLayout from "../layout";

export default function Home() {
  return (
    <RootLayout title={"TU Sofia Racing Team - Contact Us"}>
      <Navbar />
      <ContactUs />
      <Footer />
    </RootLayout>
  );
}
