import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";

export default function Navbar() {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const handleChangeLanguage = () => (i18n.language === "fr" ? "en" : "fr");

  return (
    <nav className="lg:sticky top-0 z-50 bg-white shadow-sm">
      <div className="flex items-center justify-between">
        {/* Logo */}
      <div className="text-center w-full lg:w-auto text-white px-10 xl:px-20 py-4 relative"   
      style={{
        backgroundImage: 'linear-gradient(to right, black 10%, #3431C9 100%)',
      }}>
        <h1 className="text-2xl md:text-4xl font-[CMUSerif] tracking-[0.5em]">
          PAVÉPRO
        </h1>
      </div>
        {/* Desktop Nav Links */}
        <NavLinks/>

        {/* Desktop CTA + Lang */}
        <div className="hidden lg:flex items-center space-x-2">
          <Button variant="ghost" className="text-lg px-6 py-6 flex items-center gap-2">
            <Phone className="w-5 h-5" />
            <a href="tel:+15149717709">
              (514) 971-7709
            </a>
          </Button>
          <Link className='w-full' to="/estimation">
            <Button variant="important" className="px-14 py-6 text-xl">{t("estimate")}</Button>
          </Link>

          <Button variant="ghost" className="text-lg ml-3 mr-5 p-0" onClick={() => i18n.changeLanguage(handleChangeLanguage())}>
            {handleChangeLanguage().toUpperCase()}
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden absolute top-2 md:top-3 right-4 w-12 h-12 flex items-center justify-center cursor-pointer group"
        >
          <Menu className="text-white h-6 w-6  md:h-8 md:w-8 transition-transform duration-200 group-hover:scale-125" />
        </button>
      </div>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-50"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Icon */}
        <div className="flex justify-end p-4">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
            <X className="w-6 h-6" />
          </Button>
        </div>

        {/* Nav Links */}
      <div className="flex flex-col items-center space-y-4 px-6 mt-4">
        <Button
          variant="link"
          className="text-black text-lg w-full text-center"
          onClick={() => {
            document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false);
          }}
        >
          {t("home")}
        </Button>

        <Button
          variant="link"
          className="text-black text-lg w-full text-center"
          onClick={() => {
            document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false);
          }}
        >
          Services
        </Button>

        <Button
          variant="link"
          className="text-black text-lg w-full text-center"
          onClick={() => {
            document.getElementById("album")?.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false);
          }}
        >
          {t("album")}
        </Button>
        <Button
          variant="ghost"
          className="w-full text-lg py-4 flex items-center justify-center gap-2"
        >
          <Phone className="w-5 h-5" />
          <a href="tel:+15149717709">
          (514) 971-7709
          </a>
        </Button>
        <Link className='w-full' to="/estimation">
          <Button variant="important" className="w-full text-lg py-4">
            {t("estimate")}
          </Button>
        </Link>

        <Button
          variant="ghost"
          className="text-lg"
          onClick={() => i18n.changeLanguage(handleChangeLanguage())}
        >
          {handleChangeLanguage().toUpperCase()}
        </Button>
      </div>
      </div>
    </nav>
  );
}
