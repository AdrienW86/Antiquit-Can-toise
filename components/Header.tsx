"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Catalogue", href: "/catalogue" },
    { name: "Restaurations", href: "/restaurations" },
    { name: "Estimations", href: "/estimations" },
    { name: "L'entreprise", href: "/a-propos" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
         {/* --- LOGO MODIFIÉ --- */}
          <Link href="/" className="flex items-center space-x-3 group">
            <Image
              src="/logo.png"
              alt="Logo Mon Marque"
              width={65}  
              height={65}  
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              priority 
            />
          </Link>

          {/* --- NAVIGATION DESKTOP --- */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-neutral-300 hover:text-amber-400 font-medium transition-colors duration-200 text-sm uppercase tracking-widest relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-amber-400 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* --- BOUTON HAMBURGER MOBILE --- */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-amber-400 hover:text-amber-300 focus:outline-none p-2 transition-transform duration-200"
              aria-label="Ouvrir le menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MENU MOBILE DÉROULANT --- */}
      {isOpen && (
        <div className="md:hidden bg-neutral-950/95 backdrop-blur-lg border-b border-amber-500/20 px-6 pt-2 pb-6">
          <div className="flex flex-col space-y-4 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-neutral-200 hover:text-amber-400 font-medium transition-colors duration-200 py-2.5 text-lg tracking-wider uppercase border-b border-neutral-900 flex justify-between items-center"
              >
                <span>{link.name}</span>
                <span className="text-amber-500/40 text-xs">→</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}