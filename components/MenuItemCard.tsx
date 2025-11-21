"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MenuItem } from "@/types/types";

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  return (
    <motion.div
      className="flex flex-col items-center text-center p-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="w-64 h-64 md:h-96 md:w-96 mb-6 overflow-hidden rounded-full shadow-sm hover:shadow-md transition-shadow duration-300">
        <Image
          src={item.image}
          alt={item.name}
          width={256}
          height={256}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
        />
      </div>

      <h3 className="font-serif text-2xl text-gray-900 mb-1">
        {item.name} <span className="ml-1">{item.price}</span>
      </h3>

      <p className="font-sans text-[11px] leading-relaxed text-gray-500 max-w-xs mt-2">
        {item.description}
      </p>

      {item.details && (
        <p className="font-sans text-[10px] text-gray-400 mt-2 italic">
          {item.details}
        </p>
      )}
    </motion.div>
  );
};

export default MenuItemCard;
