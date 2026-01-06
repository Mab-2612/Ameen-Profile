"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Twitter, Facebook, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Hero.module.css";

// Official WhatsApp Vector Icon Component
const WhatsAppIcon = ({ size = 20, className }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

/* ... existing imports ... */

export default function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.glow} />

      <div className={styles.container}>
        {/* Left Side: Text */}
        <div className={styles.content}>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className={styles.badge}
          >
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse mr-2"></span>
            Available for Hire
          </motion.div>

          {/* --- NEW NAME SECTION --- */}
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className={styles.name}
          >
            Hi, I'm Mikail Ameen 👋
          </motion.span>
          {/* ------------------------ */}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className={styles.title}
          >
            I build digital <br />
            <span>solutions.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3 }}
            className={styles.description}
          >
            Fullstack Developer specializing in modern web technologies. 
            I turn complex problems into simple, beautiful, and intuitive interface designs.
          </motion.p>

          {/* Social Links (Make sure you kept your updated WhatsApp icon here!) */}
          <motion.div 
            className={styles.socials}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.4 }}
          >
            {/* ... your existing social links ... */}
            <Link href="https://github.com/YOUR_USERNAME" target="_blank" className={styles.socialIcon}>
              <Github size={20} />
            </Link>
            <Link href="https://twitter.com/YOUR_USERNAME" target="_blank" className={styles.socialIcon}>
              <Twitter size={20} />
            </Link>
            <Link href="https://linkedin.com/in/YOUR_USERNAME" target="_blank" className={styles.socialIcon}>
              <Facebook size={20} />
            </Link>
            <Link href="https://wa.me/2348012345678" target="_blank" className={styles.socialIcon}>
              <WhatsAppIcon size={20} /> 
            </Link>
          </motion.div>

          <motion.div
             className={styles.ctaGroup}
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: false }}
             transition={{ delay: 0.5 }}
          >
            <Link href="mailto:mikailameen2612@gmail.com" className={styles.primaryBtn}>
              Contact Me <Mail size={16} />
            </Link>
          </motion.div>
        </div>

        {/* Right Side: Image */}
        <motion.div 
          className={styles.imageWrapper}
          initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.glassFrame}>
            <Image 
              src="/profile.png" 
              alt="Mikail Ameen" 
              fill 
              className={styles.profileImage}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}