"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image"; // Import the Image component
import styles from "./Projects.module.css";

// Data updated to point to images in /public folder
const projects = [
  {
    title: "Mora Productivity",
    description: "A cross-platform productivity ecosystem featuring focus timers, guided breathing, and task planning.",
    tags: ["React Native", "Expo", "TypeScript"],
    image: "/project1.png", // Points to public/project1.png
    link: "https://mora-landing.vercel.app/"
  },
  {
    title: "School Portal Dashboard",
    description: "Comprehensive dashboard for educational institutions managing payments, students, and grading.",
    tags: ["Next.js", "Supabase", "Tailwind"],
    image: "/project2.png",
    link: "https://academic-apex-hub.vercel.app/"
  },
  {
    title: "Geo-Spatial Mapping Tool",
    description: "Interactive mapping solution with custom geolocation logic and UI controls using Mapbox GL.",
    tags: ["React", "Mapbox", "GeoJSON"],
    image: "/project3.png",
    link: "#"
  },  
  {
    title: "Geegstck E-Commerce",
    description: "A digital storefront for various sellers, offering diverse categories like electronics, beauty, fashion, home goods, and more",
    tags: ["React", "MongoDB", "JavaScript"],
    image: "/project4.png",
    link: "https://geesgstack-full-stack.vercel.app"
  },
  {
    title: "Geegstack E-Commerce",
    description: "A digital storefront for various sellers, offering diverse categories like electronics, beauty, fashion, home goods, and more",
    tags: ["React", "MongoDB", "JavaScript"],
    image: "/project5.png",
    link: "https://naijalangtranslator.vercel.app/"
  },
  {
    title: "Focusflow App",
    description: "A digital storefront for various sellers, offering diverse categories like electronics, beauty, fashion, home goods, and more",
    tags: ["React", "Supabase", "Tailwind", "TypeScript"],
    image: "/project6.png",
    link: "https://focusflow-9d6l.vercel.app/"
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.header}>
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          className={styles.heading}
        >
          Featured Work
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.1 }}
          className={styles.subheading}
        >
          A selection of projects where code meets design.
        </motion.p>
      </div>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <motion.a // Changed from div to 'a' tag for clickable card
            href={project.link}
            target="_blank"
            key={index}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }} // Subtle lift on hover
            className={styles.card}
          >
            <div className={styles.imageArea}>
              {/* Replaced emoji with Next.js Image */}
              <Image 
                src={project.image}
                alt={project.title}
                fill
                className={styles.projectImage}
              />
              
              {/* The arrow icon in the top right */}
              <div style={{ position: 'absolute', top: 20, right: 20, zIndex: 10 }}>
                <ArrowUpRight color="white" size={24} className="opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>

            <div className={styles.content}>
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}