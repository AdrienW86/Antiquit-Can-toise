import Link from "next/link";
import { Phone, Mail, MapPin, Sparkles, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- PARTIE SUPÉRIEURE : 3 COLONNES --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-neutral-900">
          
          {/* Colonne 1 : Présentation / Marque */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-amber-400 font-bold text-lg uppercase tracking-wider">
              <Sparkles size={18} />
              <span>Galerie Art & Antiquités</span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Spécialistes de l&apos;expertise, l&apos;achat, la vente et la restauration de pièces d&apos;exception et d&apos;antiquités.
            </p>
            <p className="text-xs text-neutral-500 flex items-center gap-2">
              <MapPin size={14} className="text-amber-400/80 shrink-0" />
              15 Promenade de la Côte Vermeille, 66140 Canet-en-Roussillon
            </p>
          </div>

          {/* Colonne 2 : Navigation Rapide */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-widest text-amber-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <Link href="/" className="hover:text-amber-300 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/catalogue" className="hover:text-amber-300 transition-colors">
                  Notre Catalogue
                </Link>
              </li>
              <li>
                <Link href="/restaurations" className="hover:text-amber-300 transition-colors">
                  Atelier de Restauration
                </Link>
              </li>
              <li>
                <Link href="/estimations" className="hover:text-amber-300 transition-colors">
                  Demande d&apos;Estimation
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-300 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Contact Rapide & CTA Téléphone */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-amber-400">
              Contact Direct
            </h4>
            
            {/* Bouton d'appel Téléphone */}
            <a
              href="tel:0611056287"
              className="inline-flex items-center justify-center gap-3 w-full bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 text-black font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-amber-500/10 hover:shadow-amber-500/25 text-sm"
            >
              <Phone size={18} />
              <span>Appeler le 06 11 05 62 87</span>
            </a>

            {/* Lien Email */}
            <a
              href="mailto:antiquitecanetoise66@gmail.com"
              className="inline-flex items-center gap-2.5 text-neutral-300 hover:text-amber-400 transition-colors text-sm break-all pt-1"
            >
              <Mail size={16} className="text-amber-400 shrink-0" />
              <span>antiquitecanetoise66@gmail.com</span>
            </a>
          </div>

        </div>

        {/* --- PARTIE INFÉRIEURE : COPYRIGHT & MENTIONS LÉGALES --- */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          
          {/* Copyright & Crédit CodeV */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-1 text-center md:text-left">
            <span>© {new Date().getFullYear()} Antiquité Canetoise. Tous droits réservés.</span>
            <span className="hidden sm:inline">|</span>
            <span className="flex items-center gap-1">
              Propulsé par{" "}
              <a
                href="https://code-v.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:underline font-semibold inline-flex items-center gap-0.5"
              >
                Codev <ExternalLink size={10} />
              </a>
            </span>
          </div>

          {/* Liens Juridiques */}
          <div className="flex items-center gap-6">
            <Link
              href="/mentions-legales"
              className="hover:text-amber-400 transition-colors"
            >
              Mentions Légales
            </Link>
            <Link
              href="/politique-de-confidentialite"
              className="hover:text-amber-400 transition-colors"
            >
              Politique de Confidentialité
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}