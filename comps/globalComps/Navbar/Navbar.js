import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const router = useRouter();
  const _path = router.pathname;
  return (
    <>
      <div className={styles.nav}>Nav Bar</div>
    </>
  );
}
