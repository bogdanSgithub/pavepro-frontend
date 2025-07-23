import { Trans, useTranslation } from 'react-i18next';
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
    <section id="album" className="px-6 md:px-20 py-24">
      <h2 className="text-3xl text-center font-bold text-black mb-10">
                <Trans i18nKey="portfolio.title" 
                components={[
                    <span className="text-primary" />,
                ]} />
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
    <div className="w-full max-w-4xl mx-auto mt-16 relative overflow-hidden rounded-xl shadow-lg">
      <video
        ref={videoRef}
        className="w-full h-full object-cover object-center"
        src={video} // Make sure it's inside `public/videos/`
        muted
        loop
        playsInline
        autoPlay
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 md:bg-black/50 flex flex-col justify-center items-center text-center text-white px-4">
        <h3 className="text-2xl md:text-4xl font-bold mb-5 md:mb-8">{t('portfolio.videoTitle')}</h3>
        <a
          href="https://www.google.com/search?sca_esv=aadfb58771dae880&hl=en&gl=ca&output=search&kgmid=/g/11wr3l0g8k&q=Pav%C3%A9PRO&shndl=30&source=sh/x/loc/act/m1/3&kgs=1db473bb5ff9c47e#lpg=cid:CgIgAQ%3D%3D,ik:CAoSLEFGMVFpcE02aktPN0ctbFFxczF3a1pfcjRtWDIzazNYWVFrYXhORzR3THJo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" className="text-base md:text-xl px-10 py-5">
            {t("portfolio.cta")}
          </Button>
        </a>
      </div>
    </div>

    </section>
  );
}