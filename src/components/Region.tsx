import { useTranslation, Trans } from 'react-i18next';
import image from "../assets/map.png";

export default function Region() {
  const { t } = useTranslation();
  const cities = t('region.cities', { returnObjects: true }) as string[];

  return (
    <section className="flex flex-col md:flex-row items-start gap-8 px-4 sm:px-6 py-24 overflow-x-hidden max-w-screen-xl mx-auto">
      <figure className="w-full flex justify-center md:justify-end">
        <img
          src={image}
          alt={t('profileImageAlt')}
          className="w-full max-w-xl h-auto rounded-xl shadow-lg"
        />
      </figure>

      <article className="w-full px-2 md:px-4">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center lg:text-left">
          <Trans i18nKey="region.title" components={[<span className="text-primary" />]} />
        </h2>

        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 text-gray-700 text-center md:text-left">
        {cities.map((city: string, index: number) => (
        <li key={index} className="bg-gray-100 rounded-lg px-4 py-2 shadow-sm">
            {city}
        </li>
        ))}
        </ul>
      </article>
    </section>
  );
}
