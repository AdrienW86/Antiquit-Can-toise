"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, Wrench, Sparkles } from "lucide-react";

export default function Banner() {
  return (
    <section 
      className="relative pt-20 pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[calc(100vh-80px)] bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('/banner.avif')" }}
    >
      {/* 1. OVERLAY SOMBRE (Indispensable pour la lisibilité du texte sur la photo) */}
      <div className="absolute inset-0 bg-black/45 z-0" />

      {/* 2. EFFET DE HALO DORÉ (Conservé pour garder la touche lumineuse) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/15 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* 3. CONTENU PRINCIPAL */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Tag au-dessus du titre */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/40 bg-black/80 backdrop-blur-md text-amber-400 text-xs font-semibold tracking-widest uppercase mb-8 shadow-xl">
          <Sparkles size={14} />
          <span>Excellence & Perfection</span>
        </div>

        {/* Titre Principal avec dégradé doré */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
          L'Art de la Restauration et <br />
          <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-600 bg-clip-text text-transparent">
            de l'Expertise d'Exception
          </span>
        </h1>

        {/* Paragraphe sous le titre */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-neutral-300 font-light mb-10 leading-relaxed drop-shadow">
          Découvrez notre catalogue exclusif de pièces rares, confiées à nos maîtres artisans pour une restauration dans le respect des règles de l'art.
        </p>

        {/* Boutons d'action (CTA) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/catalogue"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-amber-500/10 hover:shadow-amber-500/25"
          >
            <span>Découvrir le Catalogue</span>
            <ArrowRight size={18} />
          </Link>
          
          <Link
            href="/estimations"
            className="w-full sm:w-auto inline-flex items-center justify-center border border-amber-500/30 hover:border-amber-400 text-neutral-200 hover:text-white font-medium px-8 py-4 rounded-full transition-all duration-300 bg-black/60 hover:bg-black/90 backdrop-blur-sm"
          >
            Faire une estimation
          </Link>
        </div>

      </div>

      {/* --- BLOC AVANTAGES / RÉASSURANCE --- */}
      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4 w-full relative z-10">
        
        <div className="p-6 rounded-2xl bg-black/80 backdrop-blur-md border border-neutral-800 hover:border-amber-500/40 transition-all duration-300 shadow-xl">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-4">
            <Sparkles size={24} />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Authenticité Garantie</h3>
          <p className="text-neutral-300 text-sm leading-relaxed">
            Chaque pièce de notre catalogue fait l'objet d'un contrôle rigoureux.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-black/80 backdrop-blur-md border border-neutral-800 hover:border-amber-500/40 transition-all duration-300 shadow-xl">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-4">
            <Wrench size={24} />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Atelier Sur-Mesure</h3>
          <p className="text-neutral-300 text-sm leading-relaxed">
            Des méthodes traditionnelles alliées aux dernières technologies.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-black/80 backdrop-blur-md border border-neutral-800 hover:border-amber-500/40 transition-all duration-300 shadow-xl">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-4">
            <ShieldCheck size={24} />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Estimations Précises</h3>
          <p className="text-neutral-300 text-sm leading-relaxed">
            Évaluation au juste prix basée sur les cours et tendances actuelles.
          </p>
        </div>

      </div>

    </section>
  );
}