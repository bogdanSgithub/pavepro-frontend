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
        <svg
        className="absolute bottom-0 left-0 w-full aspect-[1440/100] z-10 pointer-events-none"
        viewBox="0 0 1440 100"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        >
        <g>
        <title>Layer 1</title>
        <path stroke="null" id="svg_1" d="m0,79.8418l40,-12.17398c40,-12.4026 120,-36.40763 200,-51.83943c80,-15.43181 160,-21.14729 240,-6.11557c80,15.26034 160,51.83943 240,48.81023c80,-3.25783 160,-45.5524 240,-45.72387c80,0.17146 160,42.46604 240,51.78228c80,8.97331 160,-15.03172 200,-27.43432l40,-12.17398l0,128.02683l-40,0c-40,0 -120,0 -200,0c-80,0 -160,0 -240,0c-80,0 -160,0 -240,0c-80,0 -160,0 -240,0c-80,0 -160,0 -240,0c-80,0 -160,0 -200,0l-40,0l0,-73.15819z" fill="#ffffff"/>
        </g>
      </svg>
    </section>
  );
}
