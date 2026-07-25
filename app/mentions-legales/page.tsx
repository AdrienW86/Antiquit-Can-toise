import Link from "next/link";
import { Scale, Building2, User, Globe, Shield, ArrowLeft } from "lucide-react";

export default function MentionsLegalesPage() {
  return (
    <div className="bg-black text-white min-h-screen pt-12 pb-24 selection:bg-amber-500 selection:text-black">
      
      {/* --- EN-TÊTE --- */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/5 text-amber-400 text-xs font-semibold tracking-widest uppercase mb-6">
          <Scale size={14} />
          <span>Informations Juridiques</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
          Mentions <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent">Légales</span>
        </h1>

        <p className="text-sm sm:text-base text-neutral-400 font-light max-w-xl mx-auto">
          Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l&apos;Économie Numérique (LCEN).
        </p>
      </section>

      {/* --- CONTENU DES MENTIONS LÉGALES --- */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* 1. ÉDITEUR DU SITE */}
        <div className="bg-neutral-950 border border-neutral-800/80 p-8 rounded-2xl relative overflow-hidden">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-900">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Building2 size={20} />
            </div>
            <h2 className="text-xl font-bold text-white">1. Éditeur de l'entreprise</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <p className="text-neutral-500 text-xs uppercase font-semibold">Enseigne commerciale</p>
              <p className="text-white font-bold text-base mt-0.5">ANTIQUITE CANETOISE</p>
            </div>

            <div>
              <p className="text-neutral-500 text-xs uppercase font-semibold">Exploitant / Chef d'entreprise</p>
              <p className="text-neutral-200 mt-0.5">Monsieur Joseph SOLES</p>
            </div>

            <div>
              <p className="text-neutral-500 text-xs uppercase font-semibold">Forme juridique</p>
              <p className="text-neutral-200 mt-0.5">Entrepreneur Individuel (EI)</p>
            </div>

            <div>
              <p className="text-neutral-500 text-xs uppercase font-semibold">Numéro SIREN</p>
              <p className="text-amber-400 font-mono font-semibold mt-0.5">435 100 193</p>
            </div>

            <div>
              <p className="text-neutral-500 text-xs uppercase font-semibold">Numéro SIRET (Siège principal)</p>
              <p className="text-amber-400 font-mono font-semibold mt-0.5">435 100 193 00034</p>
            </div>

            <div>
              <p className="text-neutral-500 text-xs uppercase font-semibold">Code APE / NAF</p>
              <p className="text-neutral-200 mt-0.5">4789Z – Autres commerces de détail sur éventaires et marchés</p>
            </div>

            <div className="md:col-span-2">
              <p className="text-neutral-500 text-xs uppercase font-semibold">Activité principale</p>
              <p className="text-neutral-300 mt-0.5 leading-relaxed">
                Vente et dépôt vente, brocante et antiquité en sédentaire et sur foires et salons.
              </p>
            </div>

            <div className="md:col-span-2">
              <p className="text-neutral-500 text-xs uppercase font-semibold">Adresse du siège social</p>
              <p className="text-neutral-200 mt-0.5">
                15 Promenade de la Côte Vermeille (15-19)<br />
                <span className="font-semibold text-white">66140 Canet-en-Roussillon – France</span>
              </p>
            </div>

            <div>
              <p className="text-neutral-500 text-xs uppercase font-semibold">Inscrit au RNE depuis le</p>
              <p className="text-neutral-200 mt-0.5">01/04/2001</p>
            </div>

            <div>
              <p className="text-neutral-500 text-xs uppercase font-semibold">Email de contact</p>
              <a href="mailto:antiquitecanetoise66@gmail.com" className="text-amber-400 hover:underline mt-0.5 block">
                antiquitecanetoise66@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* 2. DIRECTEUR DE PUBLICATION */}
        <div className="bg-neutral-950 border border-neutral-800/80 p-8 rounded-2xl">
          <div className="flex items-center gap-3 mb-4 pb-4 border-b border-neutral-900">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <User size={20} />
            </div>
            <h2 className="text-xl font-bold text-white">2. Directeur de la publication</h2>
          </div>
          <p className="text-neutral-300 text-sm leading-relaxed">
            Le Directeur de la publication du site internet est <strong className="text-white">Monsieur Joseph SOLES</strong>, en sa qualité d'entrepreneur individuel.
          </p>
        </div>

        {/* 3. CONCEPTION & HÉBERGEMENT */}
        <div className="bg-neutral-950 border border-neutral-800/80 p-8 rounded-2xl">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-900">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Globe size={20} />
            </div>
            <h2 className="text-xl font-bold text-white">3. Conception et Hébergement</h2>
          </div>

          <div className="space-y-6 text-sm">
            <div>
              <h3 className="text-amber-400 font-semibold mb-1">Conception & Développement Web</h3>
              <p className="text-neutral-300">
                Site conçu et développé par l'agence <strong className="text-white">CodeV</strong>.<br />
                Site internet : <a href="https://code-v.fr" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">https://code-v.fr</a>
              </p>
            </div>

            <div>
              <h3 className="text-amber-400 font-semibold mb-1">Hébergement du site</h3>
              <p className="text-neutral-300">
                Le site est hébergé sur les infrastructures sécurisées de <strong className="text-white">Vercel Inc.</strong><br />
                Adresse : 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.<br />
                Site internet : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">https://vercel.com</a>
              </p>
            </div>
          </div>
        </div>

        {/* 4. PROPRIÉTÉ INTELLECTUELLE */}
        <div className="bg-neutral-950 border border-neutral-800/80 p-8 rounded-2xl">
          <div className="flex items-center gap-3 mb-4 pb-4 border-b border-neutral-900">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Shield size={20} />
            </div>
            <h2 className="text-xl font-bold text-white">4. Propriété intellectuelle</h2>
          </div>
          <p className="text-neutral-300 text-sm leading-relaxed mb-4">
            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques ou photographiques.
          </p>
          <p className="text-neutral-300 text-sm leading-relaxed">
            La reproduction de tout ou partie de ce site sur un support électronique ou papier quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
          </p>
        </div>

        {/* BOUTON RETOUR */}
        <div className="pt-6 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 border border-neutral-800 hover:border-amber-500/40 text-neutral-300 hover:text-white px-6 py-3 rounded-full text-sm transition-all bg-neutral-950"
          >
            <ArrowLeft size={16} />
            <span>Retourner à l'accueil</span>
          </Link>
        </div>

      </section>

    </div>
  );
}