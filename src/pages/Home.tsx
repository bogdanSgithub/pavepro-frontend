import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";
import Profile from "../components/Profile";
import Steps from "../components/Steps";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <main>
      <Header/>
      <Navbar/>
      <Hero />
      <Profile/>
      <Steps/>
      <Portfolio/>
      <Testimonials/>
      <Footer/>
    </main>
  );
}