import heroImage from '../assets/hero.jpg';
import { Button } from './ui/button';
import { useTranslation, Trans } from 'react-i18next';

export default function Hero() {
    const { t } = useTranslation();

  return (
    <section
      className="relative h-[85vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/45 z-0" />
      <div className="relative z-10 h-full flex items-center justify-center">

        <div className="flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-left text-4xl md:text-5xl font-bold text-white mb-12">
            <Trans i18nKey="quote" />
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
            <Button className="text-xl px-14 py-6" variant="outline">{t('estimate')}</Button>
            <Button className="text-xl px-14 py-6" variant="outline">
              {t('call')}
            </Button>
          </div>
        </div>
      </div>
    <svg
    className="absolute bottom-0 left-0 w-full h-[80px] fill-white pointer-events-none"
    viewBox="0 0 1000 100"
    preserveAspectRatio="none"
    >
    <path d="M1000,40c0,0 -120.077,-38.076 -250,-38c-129.923,0.076 -345.105,78 -500,78c-154.895,0 -250,-30 -250,-30l0,50l1000,0l0,-60Z"></path><path d="M1000,40c0,0 -120.077,-38.076 -250,-38c-129.923,0.076 -345.105,73 -500,73c-154.895,0 -250,-45 -250,-45l0,70l1000,0l0,-60Z" className="opacity-40"></path><path d="M1000,40c0,0 -120.077,-38.076 -250,-38c-129.923,0.076 -345.105,68 -500,68c-154.895,0 -250,-65 -250,-65l0,95l1000,0l0,-60Z" className="opacity-40"></path></svg>
    </section>
  );
}
