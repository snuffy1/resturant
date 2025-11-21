import React from "react";
import { MenuCategory } from "@/types/types";
import MenuItemCard from "./MenuItemCard";

interface MenuSectionProps {
  category: MenuCategory;
}

const MenuSection: React.FC<MenuSectionProps> = ({ category }) => {
  return (
    <section id={category.id} className="py-16 md:py-24 scroll-mt-24">
      <h2 className="text-center font-serif text-4xl mb-16 text-gray-900 lowercase">
        {category.title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 px-6">
        {category.items.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
