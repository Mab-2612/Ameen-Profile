"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Navbar.module.css";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={styles.nav}
    >
      <Link href="/" className={styles.logo}>
        Ameen<span>-Dev</span>
      </Link>

      <div className={styles.links}>
        {navLinks.map((link) => (
          <Link key={link.name} href={link.href} className={styles.link}>
            {link.name}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}