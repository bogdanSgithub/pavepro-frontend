import background from '@/assets/hero_1.webp';
import { MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-20">
      {/* Top image with gradient overlay */}
        <div className="relative h-[300px] md:h-[400px] lg:h-[600px] overflow-hidden">
        {/* Background image with parallax only on lg+ */}
        <div
            className="absolute inset-0 bg-cover bg-center bg-scroll xl:bg-fixed"
            style={{ backgroundImage: `url(${background})` }}
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 xl:from-primary/50 to-primary" />
        </div>

      {/* Solid content section */}
      <div className="bg-primary text-white px-6 py-16 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Working Hours */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Working Hours</h3>
            <p>Mon–Fri: 8am – 8pm</p>
            <p>Sat–Sun: 10am – 6pm</p>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Greater Montreal Area
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Contact</h3>
            <p className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              (123) 456-7890
            </p>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-12 text-sm text-center text-white/80">
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
