import { Link } from 'react-router-dom';
import heroImage from '../assets/hero.webp';
import { Button } from './ui/button';
import { useTranslation, Trans } from 'react-i18next';
import { useEffect } from 'react';

export default function Hero() {
    const { t } = useTranslation();

    useEffect(() => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = heroImage;
      link.type = "image/webp";
      document.head.appendChild(link);
    }, []);


  return (
    <section
      id='home'
      className="relative h-[65vh] md:h-[85vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="relative z-10 h-full flex items-center justify-center">

        <div className="flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-left  text-4xl md:text-5xl font-bold [@media(max-width:376px)]:text-3xl [@media(max-width:376px)]:mb-5 mb-12 text-white">
          <Trans i18nKey="quote" components={[
            <span className="text-white" />,
            <span className="text-white" />,
            <span className="text-white" />
          ]} />
        </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-10 [@media(max-width:376px)]:gap-4">
            <Link to="/contact-us">
              <Button className="text-lg md:text-xl px-14 py-6 [@media(max-width:376px)]:py-5 [@media(max-width:376px)]:px-10" variant="outline">
                {t('estimate')}
              </Button>
            </Link>
            <a href="tel:+15149717709">
            <Button className="text-xl px-14 py-6 [@media(max-width:376px)]:py-5 [@media(max-width:376px)]:px-10" variant="outline">
              {t('call')}
            </Button>
            </a>
          </div>
        </div>
      </div>
      <svg
        className="absolute bottom-0 left-0 w-full h-[60px] sm:h-[80px] md:h-[100px] lg:h-[120px] pointer-events-none"
        viewBox="0 0 2 1"
        preserveAspectRatio="none"
      >
        <defs>
          <path id="w" d="m0 1v-.5 q.5.5 1 0 t1 0 1 0 1 0 v.5z" />
        </defs>
        <g>
          <use href="#w" y="0.0" fill="#b0b0b0" />
          <use href="#w" y="0.1" fill="#dcdcdc" />
          <use href="#w" y="0.2" fill="#ffffff" />
        </g>
      </svg>

    </section>
  );
}
