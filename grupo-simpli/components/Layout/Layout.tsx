import React from "react";
import NavBar from "../NavBar/NavBar";

type LayoutProps = {
  children?: React.ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <NavBar />
      {children}
      <footer>my footer</footer>
    </div>
  );
};

export default Layout;
