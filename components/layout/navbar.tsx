import React, { ReactNode, useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";

type Props = {
  children?: ReactNode;
};

const Navbar = ({ children }: Props) => {
  const [visible, setVisible] = useState(false);

  const { systemTheme, theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <SunIcon
          className="inline-block w-7 h-7 text-yellow-400"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          className="inline-block w-7 h-7 text-blue-800"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="flex items-center flex-shrink-0 mr-6">
          <span className="font-semibold text-xl tracking-tight">MyAnime</span>
        </div>
        <div className="block lg:hidden">
          <button
            className="navbar_menu_button"
            onClick={() => setVisible(!visible)}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`${
            visible ? "" : "hidden"
          } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
        >
          <div className="text-sm lg:flex-grow">
            <a href="#" className="navbar_links">
              Link 1
            </a>
            <a href="#" className="navbar_links">
              Link 2
            </a>
            <a href="#" className="navbar_links">
              Link 3
            </a>
          </div>
        </div>
        <div className="py-2 lg:py-0">{renderThemeChanger()}</div>
      </nav>
      <div className="main_container">
        <div>{children}</div>
      </div>
    </>
  );
};

export default Navbar;
