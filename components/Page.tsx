"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Page({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 1, ease: "easeIn" }}
      className={`${className}`}
    >
      {children}
    </motion.div>
  );
}
