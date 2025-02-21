import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react"; // Importing icons

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false); // State to track menu toggle

  const changeLanguage = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
  };

  return (
    <nav className="shadow-sm z-50 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img className="w-10" src="/src/assets/Factlogo.png" alt="FactShield Logo" />
              <span className="text-2xl">FactShield</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "underline decoration-solid" : "text-gray-700"} hover:text-gray-900`
              }
            >
              {t("home")}
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${isActive ? "underline decoration-solid" : "text-gray-700"} hover:text-gray-900`
              }
            >
              {t("about")}
            </NavLink>
            <NavLink
              to="/contactus"
              className={({ isActive }) =>
                `text-gray-700 ${isActive ? "underline decoration-solid" : "decoration-0"} hover:text-gray-900`
              }
            >
              {t("contactUs")}
            </NavLink>

            {/* Language Selector */}
            <div className="flex items-center border rounded-md px-2 py-1">
              <p className="scale-[1.4] mr-0.5">&#127760;</p>
              <select
                className="focus:outline-none w-20"
                onChange={changeLanguage}
                value={i18n.language}
              >
                <option value="en">English</option>
                <option value="hi">हिंदी (Hindi)</option>
                <option value="mr">मराठी (Marathi)</option>
                <option value="ta">தமிழ் (Tamil)</option>
                <option value="te">తెలుగు (Telugu)</option>
                <option value="bn">বাংলা (Bengali)</option>
                <option value="gu">ગુજરાતી (Gujarati)</option>
                <option value="kn">ಕನ್ನಡ (Kannada)</option>
                <option value="ml">മലയാളം (Malayalam)</option>
              </select>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-white shadow-md transition-all duration-300 ease-in-out ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
        }`}
        style={{ display: menuOpen ? "block" : "none" }} // Ensures proper hiding
      >
        <div className="flex flex-col items-center py-4 space-y-4">
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            {t("home")}
          </NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            {t("about")}
          </NavLink>
          <NavLink to="/contactus" onClick={() => setMenuOpen(false)}>
            {t("contactUs")}
          </NavLink>

          {/* Language Selector (Mobile) */}
          <div className="flex items-center border rounded-md px-2 py-1">
            <p className="scale-[1.4] mr-0.5">&#127760;</p>
            <select
              className="focus:outline-none w-20"
              onChange={changeLanguage}
              value={i18n.language}
            >
              <option value="en">English</option>
              <option value="hi">हिंदी (Hindi)</option>
              <option value="mr">मराठी (Marathi)</option>
              <option value="ta">தமிழ் (Tamil)</option>
              <option value="te">తెలుగు (Telugu)</option>
              <option value="bn">বাংলা (Bengali)</option>
              <option value="gu">ગુજરાતી (Gujarati)</option>
              <option value="kn">ಕನ್ನಡ (Kannada)</option>
              <option value="ml">മലയാളം (Malayalam)</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
}
