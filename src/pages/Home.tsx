import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";
import Profile from "../components/Profile";
import Steps from "../components/Steps";
import Testimonials from "../components/Testimonials";
import OtherService from "@/components/OtherService";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero />
      <Profile/>
      <Steps/>
      <Portfolio/>
      <Testimonials/>
      <OtherService/>
      <Footer/>
    </main>
  );
}