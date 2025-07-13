import type { PropsWithChildren } from "react";
import { Header } from "../components/Header";

import style from './Layout.module.scss'

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main className={style.main}>{children}</main>
    </>
  );
};
