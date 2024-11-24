import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import FormulaStudent from "./FormulaStudent";
import RootLayout from "../layout";

export default function Home() {
  return (
    <RootLayout title={"TU Sofia Racing Team - Formula Student"}>
      <Navbar />
      <FormulaStudent />
      <Footer />
    </RootLayout>
  );
}
