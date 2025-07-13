import { useTranslation, Trans } from 'react-i18next';
import profileImage from "../assets/profile.webp";
import vector1 from '@/assets/vector1.svg';
import vector2 from '@/assets/vector1.svg';
import vector3 from '@/assets/vector1.svg';

export default function Profile() {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col md:flex-row items-start gap-8 md:px-12 lg:px-52 py-24">
      <figure className="w-full md:w-1/2 flex justify-center md:justify-end">
        <img
          src={profileImage}
          alt={t('profileImageAlt')}
          className="w-lg h-auto rounded-xl shadow-lg"
        />
      </figure>

      <article className="w-full md:w-1/2 px-4">
        <h2 className="text-3xl font-bold mb-4">
        <Trans i18nKey="profileTitle" 
            components={[
                <span className="text-primary" />,
            ]} />
        </h2>
        <p className="text-gray-700 leading-relaxed">
          {t('profileText')}
        </p>
          {/* Vector Arts */}
        <div className="flex flex-col items-center gap-8">
            {/* Two side-by-side vectors */}
            <div className="flex flex-col md:flex-row gap-6 justify-center w-full">
            <img src={vector1} alt="Vector 1" className="w-full md:w-1/2 max-w-32 mx-auto" />
            <img src={vector2} alt="Vector 2" className="w-full md:w-1/2 max-w-32 mx-auto" />
            </div>

            {/* One centered below */}
            <img src={vector3} alt="Vector 3" className="w-full max-w-32 mx-auto" />
        </div>
      </article>
    </section>
  );
}
