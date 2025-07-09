import type { PropsWithChildren } from "react";
import { Header } from "../components/Header";
import { Outlet } from "react-router-dom";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
