import { useTranslation, Trans } from 'react-i18next';
import profileImage from "../assets/profile.webp";
import { Briefcase, ShieldCheck, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

export default function Profile() {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col md:flex-row items-start gap-8 px-4 sm:px-6 py-24 overflow-x-hidden max-w-screen-xl mx-auto">
  <figure className="w-full flex justify-center md:justify-end">
    <img
      src={profileImage}
      alt={t('profileImageAlt')}
      className="w-full max-w-xl h-auto rounded-xl shadow-lg"
    />
  </figure>

  <article className="w-full px-2 md:px-4">
    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center lg:text-left">
      <Trans i18nKey="profileTitle" components={[<span className="text-primary" />]} />
    </h2>
    <p className="text-gray-600  md:text-lg xl:text-xl leading-relaxed mb-8 text-center lg:text-left">
      {t('profileText')}
    </p>

    <div className="grid gap-6 grid-cols-2 lg:grid-cols-3 place-items-center">
      <div className="flex items-center gap-2 md:gap-4">
        <Briefcase className="w-8 h-8 text-primary" />
        <p className="text-lg font-medium">{t('Professional')}</p>
      </div>
      <div className="flex items-center gap-2 md:gap-4">
        <ShieldCheck className="w-8 h-8 text-primary" />
        <p className="text-lg font-medium">{t('Protected')}</p>
      </div>
      <div className="flex items-center gap-2 md:gap-4 col-span-2 justify-self-center lg:col-span-1">
        <Sparkles className="w-8 h-8 text-primary" />
        <p className="text-lg font-medium">{t('Pristine')}</p>
      </div>
    </div>
    <div className="flex justify-center mt-8">
      <Link className='w-full' to="/contact-us">
        <Button variant="important" className="hover:scale-110 w-full px-14 py-6 text-xl">{t("estimate")}</Button>
      </Link>
    </div>
  </article>
</section>
  );
}
