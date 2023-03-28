import React, { FC, PropsWithChildren } from "react";
import Header from "./header/Header";

type Props = {};

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
