import background from '@/assets/footer.jpg';
import { MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation, Trans } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full">
      
      {/* Entire footer takes full height on mobile, 80vh on desktop */}
      <div className="flex flex-col h-[100vh] lg:h-[93vh]">
        {/* Background image section */}
        <div className="relative flex-grow overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-scroll sm:bg-fixed"
            style={{ backgroundImage: `url(${background})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/30 sm:from-primary/50 to-primary" />
          <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
            <div className="flex flex-col items-center justify-center max-w-4xl">
              <h2 className="text-left text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-10">
                <Trans i18nKey="quote" />
              </h2>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
              <Link to="/contact-us">
                <Button className="text-lg md:text-xl px-14 py-6" variant="outline">
                  {t('estimate')}
                </Button>
              </Link>
              <a href="tel:+15149717709">
              <Button className="text-xl px-14 py-6" variant="outline">
                {t('call')}
              </Button>
              </a>
              </div>
            </div>
          </div>
        </div>

        {/* Solid contact section */}
        <div className="bg-primary text-white px-6 py-10 lg:px-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-xl font-semibold mb-2">{t('footer.workingHours.title')}</h3>
              <p>{t('footer.workingHours.hours')}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{t('footer.contact.title')}</h3>
              <p className="flex flex-col gap-1">
                <div className='flex items-center gap-2'>
                <Phone className="w-5 h-5" />
                <a href="tel:+15149717709">(514) 971-7709</a>
                </div>
                pavepro.services@gmail.com
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{t('footer.location.title')}</h3>
              <p className="flex items-center gap-2">
              <a
              href="https://www.google.com/maps/place/Pav%C3%A9PRO/@45.5026915,-73.6914965,10z/data=!3m1!4b1!4m6!3m5!1s0x664a5c7f1663440f:0x82c232bd44748911!8m2!3d45.5026915!4d-73.6914965!16s%2Fg%2F11wr3l0g8k?hl=en&entry=ttu&g_ep=EgoyMDI1MDcyMC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank" className='flex items-center gap-2'
              rel="noopener noreferrer">                
                <MapPin className="w-5 h-5" />
                {t('footer.location.area')}
              </a>
              </p>
            </div>
          </div>
          <div className="mt-8 text-sm text-center text-white/80">
            © {new Date().getFullYear()} PavéPRO. {t('footer.rights')}
          </div>
        </div>
      </div>
    </footer>
  );
}
