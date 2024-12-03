import Image from "next/image";
import Link from "next/link";
import React from "react";

import MobileNavigation from "./MobileNavigation";
import ThemeToggler from "./ThemeToggler";

const Navbar = () => {
  return (
    <div className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 sm:px-12 dark:shadow-none">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/images/site-logo.svg"
          width={23}
          height={23}
          alt="DevFlow Logo"
        />

        <p className="h2-bold font-spacegrotesk text-dark-100 max-sm:hidden dark:text-light-900">
          Dev<span className="text-primary-100">Overflow</span>
        </p>
      </Link>

      <p>Global Search</p>

      <div className="flex-between gap-5">
        <ThemeToggler />
      </div>

      <MobileNavigation />
    </div>
  );
};

export default Navbar;
