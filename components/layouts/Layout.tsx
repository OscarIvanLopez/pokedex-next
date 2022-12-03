import { FC } from "react";
import Head from "next/head";
import Navbar from "../ui/Navbar";

interface Props {
  children: JSX.Element;
  title?: string;
}

const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="ivan lopez" />
        <meta
          name="description"
          content={`Information about the Pokemon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
      </Head>

      <Navbar />

      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
