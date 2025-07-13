import Header from "./components/Header";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Profile from "./components/Profile";

export default function Home() {
  return (
    <main>
      <Header/>
      <Navbar/>
      <Hero />
      <Profile/>
      <Portfolio/>
    </main>
  );
}