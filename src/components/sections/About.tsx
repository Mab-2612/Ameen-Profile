"use client";

import { motion } from "framer-motion";
import styles from "./About.module.css";
import { 
  Code2, 
  Cpu, 
  Globe, 
  Zap, 
  Layout, 
  ShieldCheck, 
  Search 
} from "lucide-react";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.grid}>
        
        {/* 1. About Me (Top Left - Wide) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          className={`${styles.box} ${styles.large}`}
        >
          <h3 className={styles.heading}>About Me</h3>
          <p className={styles.text}>
            I'm a Fullstack Developer with a passion for building software that feels alive. 
            From interactive front-ends to robust back-ends, I bridge the gap between design and engineering.
          </p>
        </motion.div>

        {/* 2. Tech Stack (Middle - Tall) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ delay: 0.1 }}
          className={`${styles.box} ${styles.tall}`}
        >
          <Code2 size={40} className="mb-4 text-blue-400" />
          <h3 className={styles.heading}>Tech Stack</h3>
          <div className={styles.stackGrid}>
            <span className={styles.stackItem}>React</span>
            <span className={styles.stackItem}>Next.js</span>
            <span className={styles.stackItem}>TypeScript</span>
            <span className={styles.stackItem}>Node.js</span>
            <span className={styles.stackItem}>PostgreSQL</span>
            <span className={styles.stackItem}>Supabase</span>
            <span className={styles.stackItem}>Tailwind</span>
            <span className={styles.stackItem}>Framer Motion</span>
            <span className={styles.stackItem}>Git</span>
            <span className={styles.stackItem}>Github</span>
          </div>
        </motion.div>

        {/* 3. My Approach (Right - Tall) */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: false, amount: 0.4 }}
           transition={{ delay: 0.2 }}
           className={`${styles.box} ${styles.tall}`}
        >
          <Cpu size={40} className="mb-4 text-green-400" />
          <h3 className={styles.heading}>My Approach</h3>
          
          <div className={styles.focusList}>
            <div className={styles.focusItem}>
              <Zap size={20} className="text-yellow-400" />
              <div>
                <span className="block text-white font-medium">Fast Performance</span>
                <span className="text-sm text-neutral-500">Optimized for speed.</span>
              </div>
            </div>

            <div className={styles.focusItem}>
              <Layout size={20} className="text-purple-400" />
              <div>
                <span className="block text-white font-medium">Responsive Design</span>
                <span className="text-sm text-neutral-500">Works on all devices.</span>
              </div>
            </div>

            <div className={styles.focusItem}>
              <ShieldCheck size={20} className="text-blue-400" />
              <div>
                <span className="block text-white font-medium">Scalable Code</span>
                <span className="text-sm text-neutral-500">Built to grow.</span>
              </div>
            </div>

             <div className={styles.focusItem}>
              <Search size={20} className="text-pink-400" />
              <div>
                <span className="block text-white font-medium">SEO Ready</span>
                <span className="text-sm text-neutral-500">Rank better on Google.</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4. Location (Bottom Left - Standard) */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: false, amount: 0.4 }}
           transition={{ delay: 0.3 }}
           className={styles.box}
        >
          <Globe size={40} className="mb-4 text-cyan-400" />
          <h3 className={styles.heading}>Location</h3>
          <p className={styles.text}>Based in Nigeria, working with clients worldwide.</p>
        </motion.div>

      </div>
    </section>
  );
}