import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  return (
    <div className="header left-0 w-full justify-center dark:bg-gray-900/80 p-4 shadow-lg z-50">
      <h1 className="text-4xl text-white text-center font-bold">
        {t("header.pain_tracker")}
      </h1>
    </div>
  );
};

export default Header;
