import React from "react";
import Head from "next/head";
import Footer from "./globalComps/Footer/Footer";
import Navbar from "./globalComps/Navbar/Navbar";

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>Ecommerce</title>
        <meta
          name="ecomerce"
          content="Created by Adaigho Collins & Eligbue Felix"
        />
        {/* <link rel="stylesheet" href="/styles/index.css" /> */}
      </Head>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
}
