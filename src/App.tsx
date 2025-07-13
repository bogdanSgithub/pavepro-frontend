import Header from "./components/Header";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";

export default function Home() {
  return (
    <main>
      <Header/>
      <Navbar/>
      <Hero />
      <Portfolio/>
    </main>
  );
}