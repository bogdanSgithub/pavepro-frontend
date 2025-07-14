import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

export default function Testimonials() {
  const { t } = useTranslation();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const reviews = t('testimonials.reviews', { returnObjects: true }) as {
    name: string;
    content: string;
  }[];

  return (
    <section className="py-12 px-4 lg:px-20">
      <header className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">{t('testimonials.title')}</h2>
        <div className="flex gap-2">
          <button
            ref={prevRef}
            className="p-2 border rounded-full hover:bg-gray-100 transition"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            ref={nextRef}
            className="p-2 border rounded-full hover:bg-gray-100 transition"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </header>

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
        // @ts-expect-error Navigation elements assigned dynamically
        swiper.params.navigation.prevEl = prevRef.current;
        // @ts-expect-error Navigation elements assigned dynamically
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
                <article className="h-full bg-white border rounded-xl p-6 shadow-sm flex flex-col justify-between">
                  <p className="text-sm text-gray-600 mb-4">{review.content}</p>
                  <footer className="text-sm font-medium text-gray-800 text-right">
                    — {review.name}
                  </footer>
                </article>
              </li>
            </SwiperSlide>
          ))}
        </ul>
      </Swiper>
    </section>
  );
}