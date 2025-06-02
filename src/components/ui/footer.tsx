"use client";

import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="py-6 text-center text-sm text-muted-foreground"
    >
      <p>© {currentYear} Kre0lidge. All rights reserved.</p>
    </motion.footer>
  );
} 