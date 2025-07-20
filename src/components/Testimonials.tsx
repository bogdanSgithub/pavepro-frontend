import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import googleLogo from '@/assets/google_logo.webp';
import backgroundImage from '@/assets/footer.jpg'; // Replace with your actual background

export default function Testimonials() {
  const { t } = useTranslation();
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [swiperReady, setSwiperReady] = useState(false);

  const reviews = t('testimonials.reviews', { returnObjects: true }) as {
    name: string;
    content: string;
  }[];

  useEffect(() => {
    setSwiperReady(true);
  }, []);

  return (
    <section className="relative py-16 lg:px-20 overflow-hidden align-middle lg:h-[70vh]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Main content */}
      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-center text-white mb-10">
          {t('testimonials.title')}
        </h2>

        {/* Navigation Arrows */}
        <button
          ref={prevRef}
          className="absolute left-2 top-1/2 z-20 p-3 border rounded-full bg-white shadow-md hover:bg-gray-100 transition"
          aria-label="Previous review"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          ref={nextRef}
          className="absolute right-2 top-1/2 z-20 p-3 border rounded-full bg-white shadow-md hover:bg-gray-100 transition"
          aria-label="Next review"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="mx-17">
          {swiperReady && (
            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onSwiper={(swiper) => {
                if (prevRef.current && nextRef.current) {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }
              }}
              spaceBetween={16}
              slidesPerView={1}
              loop={true}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              <ul className="list-none">
                {reviews.map((review, index) => (
                  <SwiperSlide key={index}>
                    <li className="h-full">
                      <article className="h-full bg-white border rounded-xl py-6 px-8 shadow-sm flex flex-col justify-between">
                        {/* Top section: name, stars, Google logo */}
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <p className="font-bold text-2xl text-gray-800">{review.name}</p>
                            <p className="text-yellow-500 text-2xl p-0">★★★★★</p>
                          </div>
                          <img
                            src={googleLogo}
                            alt="Google Logo"
                            className="w-10 h-10 object-contain"
                          />
                        </div>

                        {/* Review content */}
                        <p className="text-lg">{review.content}</p>
                      </article>
                    </li>
                  </SwiperSlide>
                ))}
              </ul>
            </Swiper>
          )}
        </div>
      </div>
    </section>
  );
}
