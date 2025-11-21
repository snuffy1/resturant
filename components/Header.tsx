"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full pt-8 pb-4 px-6 md:px-12 bg-white sticky top-0 z-40">
      {/* Mobile Header - Logo and Hamburger in same line */}
      <div className="flex md:hidden justify-between items-center w-full mb-4">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full border border-olive-200 flex items-center justify-center bg-stone-100">
            <span className="font-serif text-xs italic text-green-800">
              Umesh
            </span>
          </div>
          <h1 className="text-2xl font-serif italic mt-1 text-gray-800">
            Sushi
          </h1>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Desktop Header - Original Layout */}
      <div className="hidden md:flex justify-between items-center">
        {/* Left Navigation - Desktop */}
        <div className="flex space-x-6 text-xs tracking-widest uppercase font-sans text-gray-500">
          <Link href="/" className="hover:text-black transition-colors">
            Menu
          </Link>
          <Link href="/About" className="hover:text-black transition-colors">
            About
          </Link>
        </div>

        {/* Logo - Desktop */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full border border-olive-200 flex items-center justify-center bg-stone-100">
              <span className="font-serif text-xs italic text-green-800">
                Umesh
              </span>
            </div>
            <h1 className="text-2xl font-serif italic mt-1 text-gray-800">
              Sushi
            </h1>
          </div>
        </div>

        {/* Right Navigation - Desktop */}
        <div className="flex space-x-6 text-xs tracking-widest uppercase font-sans text-gray-500 items-center">
          <Link href="/Contact" className="hover:text-black transition-colors">
            Contact
          </Link>
          <Link href="/" className="hover:text-black transition-colors">
            Gift Card
          </Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Menu - Slide from Right */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Close Button */}
          <div className="flex justify-end p-6">
            <button
              onClick={toggleMenu}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-6 px-8 py-4">
            <Link
              href="/"
              className="text-sm tracking-widest uppercase font-sans text-gray-700 hover:text-black transition-colors py-2 border-b border-gray-100"
              onClick={toggleMenu}
            >
              Menu
            </Link>
            <Link
              href="/About"
              className="text-sm tracking-widest uppercase font-sans text-gray-700 hover:text-black transition-colors py-2 border-b border-gray-100"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/Contact"
              className="text-sm tracking-widest uppercase font-sans text-gray-700 hover:text-black transition-colors py-2 border-b border-gray-100"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link
              href="/"
              className="text-sm tracking-widest uppercase font-sans text-gray-700 hover:text-black transition-colors py-2 border-b border-gray-100"
              onClick={toggleMenu}
            >
              Gift Card
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
