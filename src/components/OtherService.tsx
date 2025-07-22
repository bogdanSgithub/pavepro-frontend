import { useTranslation, Trans } from 'react-i18next';
import backgroundImage from "../assets/other_service.jpg";

export default function OtherService() {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col md:flex-row items-start gap-8 px-4 sm:px-6 py-24 overflow-x-hidden max-w-screen-xl mx-auto">
      {/* Text content first */}
      <article className="w-full px-2 md:px-4">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center lg:text-left">
          <Trans i18nKey="other_service.title" components={[<span className="text-primary" />]} />
        </h2>
        <p className="text-gray-600  md:text-lg xl:text-xl leading-relaxed mb-8 text-center lg:text-left">
          {t('other_service.description')}
        </p>
      </article>

      {/* Image content after on large screens */}
      <figure className="w-full flex justify-center md:justify-end">
        <img
          src={backgroundImage}
          alt={t('profileImageAlt')}
          className="w-full max-w-xl h-auto rounded-xl shadow-lg"
        />
      </figure>
    </section>
  );
}
