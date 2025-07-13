import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t } = useTranslation();

  return (
      <header className="text-sm py-2 bg-primary text-white text-center">
        {t('promotional')}
      </header>
  );
}
