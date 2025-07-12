import mainLogo from '../assets/hero_1.webp';
import { Button } from './ui/button';
import Navbar from './navbar';

export default function Hero() {
  return (
    <section
      className="relative h-[90vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${mainLogo})` }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="relative z-10">
        <Navbar />

        <div className="h-full flex flex-col items-center justify-center text-center px-4 mt-8">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Making Surfaces Shine Again
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button className="text-lg px-6 py-3">GET AN ESTIMATE</Button>
            <Button className="text-lg px-6 py-3" variant="outline">
              CALL (123) 456-7890
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
