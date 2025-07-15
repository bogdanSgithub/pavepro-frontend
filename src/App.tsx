import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Profile from "./components/Profile";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main>
      <Header/>
      <Navbar/>
      <Hero />
      <Profile/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Footer/>
    </main>
  );
}