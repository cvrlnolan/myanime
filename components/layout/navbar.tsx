import React, { ReactNode, useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { SunIcon, MoonIcon, MenuIcon } from "@heroicons/react/outline";

type Props = {
  children?: ReactNode;
};

const Navbar = ({ children }: Props) => {
  const [visible, setVisible] = useState(false);

  const { systemTheme, theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (visible) {
      document.body.style.setProperty("overflow", "hidden");
    } else {
      document.body.style.removeProperty("overflow");
    }
  }, [visible]);

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <SunIcon
          className="inline-block w-7 h-7"
          role="button"
          id="theme-button"
          aria-label="theme-button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          className="inline-block w-7 h-7"
          role="button"
          id="theme-button"
          aria-label="theme-button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <>
      <div className="navbar_wrapper">
        <nav className="hidden md:flex w-4/5 h-20 p-4 mx-auto items-center justify-between">
          <div className="flex space-x-6 items-center">
            <div className="flex">
              <span className="font-semibold text-xl tracking-tight">
                MyAnime
              </span>
            </div>
            <div className="text-sm flex">
              <ul className="inline-flex space-x-4">
                <li>
                  <Link href="/" passHref>
                    <a className="navbar_links">Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/cvrlnolan/myanime" passHref>
                    <a className="navbar_links">Repository</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="py-2 lg:py-0">{renderThemeChanger()}</div>
        </nav>
        <nav className="flex-col md:hidden w-full h-20 p-4 justify-center">
          <div className="flex w-full px-2 justify-between items-center">
            <div className="block">
              <button
                className="navbar_menu_button"
                onClick={() => setVisible(!visible)}
              >
                <MenuIcon className="w-4 h-4" />
              </button>
            </div>
            <div className="py-2 lg:py-0">{renderThemeChanger()}</div>
          </div>
        </nav>
      </div>
      <div className="main_container">
        <aside
          className={`${
            visible ? "flex" : "hidden"
          } flex-col md:hidden w-64 h-full p-4 top-0 left-0 z-30 absolute justify-between text-gray-700 bg-white`}
        >
          <div className="flex w-full">
            <ul className="block space-y-6">
              <li>
                <Link href="/" passHref>
                  <a className="navbar_links">Home</a>
                </Link>
              </li>
              <li>
                <Link href="https://github.com/cvrlnolan/myanime" passHref>
                  <a className="navbar_links">Repository</a>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
        <div
          className={`${
            visible ? "flex" : "hidden"
          } flex-col md:hidden w-full h-full top-0 right-0 absolute overflow-hidden bg-gray-900 opacity-75 z-10`}
          onClick={() => {
            if (visible) setVisible(false);
          }}
        ></div>
        <div>{children}</div>
      </div>
    </>
  );
};

export default Navbar;
