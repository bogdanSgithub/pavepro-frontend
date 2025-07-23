import { useTranslation, Trans } from 'react-i18next';
import backgroundImage from "../assets/other_service.jpg";
import secondaryImage from "@/assets/vertical.jpg";

export default function OtherService() {
  const { t } = useTranslation();

  return (
      <section className="flex flex-col md:flex-row gap-8 px-4 sm:px-6 pb-24 md:pt-24 overflow-x-hidden max-w-screen-xl mx-auto">
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

        {/* Image B (second image, stacked on mobile) */}
        <figure className="w-full px-2 md:hidden">
          <img
            src={secondaryImage}
            alt={t('profileImageAlt')}
            className="w-full max-w-xs h-auto rounded-xl shadow-lg object-cover"
          />
        </figure>
      </div>

      {/* Right column: Image B (only on md+) */}
      <figure className="hidden md:flex w-1/3 justify-start items-start">
        <img
          src={secondaryImage}
          alt={t('profileImageAlt')}
          className="w-full max-w-xs h-auto rounded-xl shadow-lg object-cover"
        />
      </figure>
    </section>
  );
}
