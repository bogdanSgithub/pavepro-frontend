import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export default function NavLinks() {
  const { t } = useTranslation();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 space-x-0 xl:space-x-6">
      <Button variant="link" className="text-black text-lg" onClick={() => scrollTo("home")}>
        {t("home")}
      </Button>
      <Button variant="link" className="text-black text-lg" onClick={() => scrollTo("services")}>
        Services
      </Button>
      <Button variant="link" className="text-black text-lg" onClick={() => scrollTo("album")}>
        {t("album")}
      </Button>
    </div>
  );
}