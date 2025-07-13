import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const { i18n, t } = useTranslation();
  const handleChangeLanguage = () => {
    if (i18n.language === "fr")
      return "en";
    return "fr";
  }

  return (
      <nav className="sticky top-0 z-100 bg-white px-14 py-3 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex-1 text-left">
          <h1 className="text-5xl font-bold text-primary font-serif font-bold">PavéPRO</h1>
        </div>

        {/* Center: Navigation links */}
        <div className="flex-1 flex justify-center space-x-6">
          <Button variant="link" className="text-black mx-0 text-base">{t('home')}</Button>
          <Button variant="link" className="text-black mx-0 text-base">Services</Button>
          <Button variant="link" className="text-black mx-0 text-base">{t('contact')}</Button>
        </div>

        {/* Right: CTA button */}
        <div className="flex-1 flex justify-end">
          <Button variant={"important"} className="text-base px-10 py-5">{t('estimate')}</Button>
          <Button variant={"ghost"} onClick={() => i18n.changeLanguage(handleChangeLanguage())}>{handleChangeLanguage().toUpperCase()}</Button>
        </div>
      </nav>
  );
}
