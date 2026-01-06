"use client";

import { useState } from "react"; // Import useState
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail, Send, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import styles from "./Footer.module.css";

const WhatsAppIcon = ({ size = 20, className }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function Footer() {
  // 1. STATE TO TRACK INPUTS
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // 2. HANDLE INPUT CHANGES
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // 3. HANDLE SEND BUTTON CLICK
  const handleSend = () => {
    // Construct the mailto link dynamically
    const subject = `Portfolio Enquiry from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    
    // Open email client
    window.location.href = `mailto:mikailameen2612@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.container}>
        
        {/* Left Side: Contact Info */}
        <div className={styles.info}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className={styles.heading}
          >
            Let's create <br /><span>something epic.</span>
          </motion.h2>
          
          <p className={styles.subtext}>
            I'm currently available for freelance projects and remote roles. 
            Have an idea? Let's discuss how we can bring it to life.
          </p>

          <div className={styles.details}>
            <a href="mailto:mikailameen2612@gmail.com" className={styles.detailItem}>
              <Mail size={18} /> mikailameen2612@gmail.com
            </a>
            <a href="tel:+2348153338723" className={styles.detailItem}>
              <Phone size={18} /> +234 815 333 8723
            </a>
            <span className={styles.detailItem}>
              <MapPin size={18} /> Ibadan, Nigeria
            </span>
          </div>

          <div className={styles.socialGrid}>
            <Link href="https://github.com/Mab-2612" className={styles.socialIcon}><Github size={20} /></Link>
            <Link href="https://x.com/MikailAmeen" className={styles.socialIcon}><Twitter size={20} /></Link>
            <Link href="https://linkedin.com/in/mab2612" className={styles.socialIcon}><Linkedin size={20} /></Link>
            <Link href="https://wa.me/2348153338723" className={styles.socialIcon}><WhatsAppIcon size={20} /></Link>
          </div>
        </div>

        {/* Right Side: The Interactive Form */}
        <motion.form 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2 }}
          className={styles.formCard}
          onSubmit={(e) => e.preventDefault()} // Prevent page reload
        >
          <div className={styles.inputGroup}>
            <label className={styles.formLabel}>Your Name</label>
            <input 
              type="text" 
              name="name" 
              placeholder="your name" 
              className={styles.input} 
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          
          <div className={styles.inputGroup}>
            <label className={styles.formLabel}>Email Address</label>
            <input 
              type="email" 
              name="email" 
              placeholder="john@example.com" 
              className={styles.input} 
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.formLabel}>Project Details</label>
            <textarea 
              name="message"
              placeholder="Tell me about your goals..." 
              className={styles.textarea}
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Added onClick Handler */}
          <button 
            type="button" 
            className={styles.submitBtn}
            onClick={handleSend}
          >
            Send Message <Send size={16} />
          </button>
        </motion.form>

      </div>

      <div className={styles.bottom}>
        <span>© 2026 Ameen. All rights reserved.</span>
        <span>Designed & Built with Next.js</span>
      </div>
    </footer>
  );
}