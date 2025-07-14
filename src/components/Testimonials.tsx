import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import googleLogo from "@/assets/google_logo.webp";

export default function Testimonials() {
  const { t } = useTranslation();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const reviews = t('testimonials.reviews', { returnObjects: true }) as {
    name: string;
    content: string;
  }[];

  return (
    <section className="py-16 px-4 lg:px-20 relative">
      <h2 className="text-3xl font-bold text-center mb-10">
        {t('testimonials.title')}
      </h2>

      {/* Navigation Arrows */}
      <button
        ref={prevRef}
        className="absolute left-2 top-1/2 z-10 p-2 border rounded-full bg-white shadow-md hover:bg-gray-100 transition"
        aria-label="Previous review"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        ref={nextRef}
        className="absolute right-2 top-1/2 z-10 p-2 border rounded-full bg-white shadow-md hover:bg-gray-100 transition"
        aria-label="Next review"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      <div className='mx-11'>
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          // @ts-expect-error navigation refs assigned after mount
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-expect-error navigation refs assigned after mount
          swiper.params.navigation.nextEl = nextRef.current;
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
                  <p className='text-lg'>{review.content}</p>
                </article>
              </li>
            </SwiperSlide>
          ))}
        </ul>
      </Swiper>
      </div>
    </section>
  );
}
