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
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <SunIcon
          className="inline-block w-7 h-7"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          className="inline-block w-7 h-7"
          role="button"
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
        <div>{children}</div>
      </div>
    </>
  );
};

export default Navbar;
