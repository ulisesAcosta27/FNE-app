import Head from "next/head";
import React, { FC } from "react";

interface Props {
  children: JSX.Element;
  section?: string;
  title: string;
}

export const Layout: FC<Props> = ({ children, section, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Fiesta Nacional de los Estudiantes"}</title>
        <meta name="author" content="Fares Coding Bootcamp" />
        <meta name="description" content={section || "Apartado de la pagima"} />
      </Head>

      {/* <Navbar /> */}

      <main>{children}</main>
    </>
  );
};
