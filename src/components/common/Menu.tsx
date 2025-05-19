import { Link, useLocation } from "react-router-dom";
import PainLevelRecorder from "../PainLevelRecorder/PainLevelRecorder";
import RecordsDisplay from "../RecordsDisplay/RecordsDisplay";
import { useTranslation } from "react-i18next";

const Menu = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const routes = [
    {
      link: "/",
      label: t("menu.pain_recorder"),
      component: <PainLevelRecorder />,
    },
    {
      link: "/records",
      label: t("menu.display_records"),
      component: <RecordsDisplay />,
    },
  ];

  const isActive = (path: string) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <div className="menu fixed bottom-0 left-0 w-full flex justify-center items-center bg-white/80 dark:bg-gray-900/80 shadow-lg z-50">
      {routes.map((route) => (
        <Link
          key={route.link}
          to={route.link}
          className={`flex-1 px-6 py-3 text-lg font-semibold transition-colors duration-200 text-center ${
            isActive(route.link)
              ? "bg-purple-900 text-white hover:bg-purple-700"
              : "bg-transparent text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-800"
          }`}
        >
          {route.label}
        </Link>
      ))}
    </div>
  );
};

export default Menu;
