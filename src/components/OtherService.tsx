import { useTranslation, Trans } from 'react-i18next';
import backgroundImage from "../assets/other_service.jpg";
import secondaryImage from "@/assets/vertical.jpg";
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

export default function OtherService() {
  const { t } = useTranslation();

  return (
      <section className="flex flex-col md:flex-row gap-8 px-4 sm:px-6 mb-20 md:mb-32 overflow-x-hidden max-w-screen-xl mx-auto">
      {/* Left column: text + first image */}
      <div className="w-full md:w-2/3 flex flex-col md:gap-6">
        <article className="w-full px-2 md:px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center">
            <Trans i18nKey="other_service.title" components={[<span className="text-primary" />]} />
          </h2>
          <p className="text-gray-600 md:text-lg xl:text-xl leading-relaxed mb-8 text-left">
            {t('other_service.description')}
          </p>
        </article>

        {/* Image A (under the text, aligned left) */}
        <figure className="w-full px-2 md:px-4 mb-8">
          <img
            src={backgroundImage}
            alt={t('profileImageAlt')}
            className="w-full max-w-xl h-auto rounded-xl shadow-lg"
          />
        </figure>
      </div>

      {/* Right column: Image B (only on md+) */}
      <div className="px-2 md:px-4 w-full h-full md:w-1/2 grid place-items-center text-center mx-auto">
        <figure className="w-full aspect-[3/4] md:w-auto md:aspect-[3/5] h-auto overflow-hidden rounded-xl shadow-lg ">
          <img
            src={secondaryImage}
            alt={t('profileImageAlt')}
            className="w-full h-full object-cover"
          />
        </figure>
        <Link to="/contact-us" className="lg:hidden w-full md:w-auto mt-8">
          <Button className="w-full md:w-auto text-lg md:text-xl px-14 py-6" variant="important">
            {t('estimate')}
          </Button>
        </Link>
      </div>
    </section>
  );
}
