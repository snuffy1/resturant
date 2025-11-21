"use client";
import React from "react";
import { MENU_DATA } from "@/constants/constant";

const MenuFilter: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset for the sticky headers
      const y = element.getBoundingClientRect().top + window.pageYOffset - 180;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="md:sticky top-0 md:top-[110px] z-30 bg-white py-6 w-full border-b border-transparent transition-all duration-300">
      <h2 className="text-center font-serif text-5xl mb-8 text-gray-900">
        MENU
      </h2>
      <div className="flex flex-wrap justify-center gap-3 px-4">
        {MENU_DATA.map((category) => (
          <button
            key={category.id}
            onClick={() => scrollToSection(category.id)}
            className="px-6 py-2 cursor-pointer rounded-full border border-gray-300 text-xs uppercase tracking-widest text-gray-600 hover:border-gray-800 transition-all bg-white hover:bg-gray-900 hover:text-white"
          >
            {category.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MenuFilter;
