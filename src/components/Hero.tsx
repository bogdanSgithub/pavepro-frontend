import mainLogo from '../assets/hero_1.webp';
import Navbar from './navbar';
import { Button } from './ui/button';

export default function Hero() {
  return (
    <section
      className="relative h-[100vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${mainLogo})` }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="relative z-10">
        <Navbar />

        <div className="h-full flex flex-col items-center justify-center text-center px-4 mt-40">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Everything Clean, <br></br>Around You
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button className="text-lg px-6 py-3">GET AN ESTIMATE</Button>
            <Button className="text-lg px-6 py-3" variant="outline">
              CALL (123) 456-7890
            </Button>
          </div>
        </div>
      </div>
        <svg className='absolute bottom-0 left-0' viewBox="0 0 1000 100" preserveAspectRatio="none"><path d="M1000,40c0,0 -120.077,-38.076 -250,-38c-129.923,0.076 -345.105,78 -500,78c-154.895,0 -250,-30 -250,-30l0,50l1000,0l0,-60Z"></path><path d="M1000,40c0,0 -120.077,-38.076 -250,-38c-129.923,0.076 -345.105,73 -500,73c-154.895,0 -250,-45 -250,-45l0,70l1000,0l0,-60Z" className="opacity: 0.4"></path><path d="M1000,40c0,0 -120.077,-38.076 -250,-38c-129.923,0.076 -345.105,68 -500,68c-154.895,0 -250,-65 -250,-65l0,95l1000,0l0,-60Z" className="opacity: 0.4"></path></svg>
    </section>
  );
}
