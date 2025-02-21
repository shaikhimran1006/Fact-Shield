import React from "react";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation(); // Initialize the translation hook

  return (
    <div className="py-16 text-center">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
        {t('aiFakeNews')} {/* Translated text */}
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto align-middle">
        {t('verifyAuthenticity')} {/* Translated text */}
        <br />
        {t('identifyFakeVideos')} {/* Translated text */}
      </p>
    </div>
  );
}
