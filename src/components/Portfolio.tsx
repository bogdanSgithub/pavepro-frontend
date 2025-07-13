import { useTranslation } from 'react-i18next';
import { ImgComparisonSlider } from '@img-comparison-slider/react';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import before1 from '@/assets/before_1.jpg';
import after1 from '@/assets/after_1.jpg';
import before2 from '@/assets/before_2.jpg';
import after2 from '@/assets/after_2.jpg';
import before3 from '@/assets/before_3.jpg';
import after3 from '@/assets/after_3.jpg';
import before4 from '@/assets/before_4.jpg';
import after4 from '@/assets/after_4.jpg';
import video from '@/assets/portfolio.mp4';
import { useEffect } from 'react';

export default function Portfolio() {
  const { t } = useTranslation();
  const { ref: videoRef, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  useEffect(() => {
    console.log(inView);
  }, [inView])
  const sliders = [
    { before: before1, after: after1 },
    { before: before2, after: after2 },
    { before: before3, after: after3 },
    { before: before4, after: after4 },
  ];

  return (
    <section id="portfolio" className="px-6 md:px-20 py-24">
      <h2 className="text-3xl font-bold text-primary mb-10">{t('portfolio.title')}</h2>

      {/* Image comparison sliders grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {sliders.map((slider, index) => (
          <ImgComparisonSlider key={index} hover={true}
          className='rounded-xl overflow-hidden'
          style={{
            boxShadow: '0 0 8px rgba(0, 0, 0, 0.5)' // glow effect (customizable color & size)
            }}>
            <img slot="first" src={slider.before} alt="Before" className="rounded-xl" />
            <img slot="second" src={slider.after} alt="After" className="rounded-xl" />
          </ImgComparisonSlider>
        ))}
      </div>

      {/* Video with overlay */}
    <div
      ref={videoRef}
      className="w-1/2 mx-auto relative mt-16 overflow-hidden rounded-xl shadow-lg"
                style={{
            boxShadow: '0 0 8px rgba(0, 0, 0, 0.5)' // glow effect (customizable color & size)
            }}
    >
      <video
        className="w-full h-full object-cover object-center"
        src={video}
        autoPlay={inView}
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-4">
        <h3 className="text-2xl md:text-4xl font-bold mb-4">{t('portfolio.videoTitle')}</h3>
        <Button variant="outline" className="text-base px-8 py-4">
          {t('portfolio.cta')}
        </Button>
      </div>
    </div>

    </section>
  );
}