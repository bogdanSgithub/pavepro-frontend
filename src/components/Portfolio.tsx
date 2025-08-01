import { useTranslation } from 'react-i18next';
import { ImgComparisonSlider } from '@img-comparison-slider/react';
import { useInView } from 'react-intersection-observer';
import before1 from '@/assets/before_1.jpg';
import after1 from '@/assets/after_1.jpg';
import before2 from '@/assets/before_2.jpg';
import after2 from '@/assets/after_2.jpg';
import before3 from '@/assets/before_3.jpg';
import after3 from '@/assets/after_3.jpg';
import before4 from '@/assets/before_4.jpg';
import after4 from '@/assets/after_4.jpg';
import video from '@/assets/test_portfolio.mp4';
import fallback from '@/assets/2nd_step.jpg';
import { useEffect } from 'react';

export default function Portfolio() {
  const { ref: videoRef, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { t } = useTranslation();
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
    <section id="album" className="px-6 md:px-20 mb-20 md:mb-32">
      <h2 className="text-3xl text-center font-bold mb-6 md:mb-10">
        {t('portfolioTitle')}
      </h2>

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
    <div className="w-full max-w-6xl mx-auto mt-16 relative overflow-hidden rounded-xl shadow-lg">
      <video
        ref={videoRef}
        className="w-full h-full object-cover object-center"
        src={video} // Make sure it's inside `public/videos/`
        muted
        loop
        playsInline
        autoPlay
        poster={fallback}
      />
    </div>

    </section>
  );
}