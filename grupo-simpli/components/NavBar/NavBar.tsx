import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div>
      <nav>
        <menu>
          <Link legacyBehavior href="/">
            <a>Motorcycles</a>
          </Link>
          <Link legacyBehavior href="/accesories">
            <a>Accesories</a>
          </Link>
        </menu>
      </nav>
    </div>
  );
};

export default NavBar;
