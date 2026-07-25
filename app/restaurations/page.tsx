import Link from "next/link";
import { ArrowRight, Sparkles, Wrench, ShieldCheck, Palette, Armchair, Gem, Scroll } from "lucide-react";

export default function RestaurationsPage() {
  const services = [
    {
      id: "tableaux",
      title: "Restauration de Tableaux",
      icon: Palette,
      subtitle: "Peintures anciennes et modernes",
      description:
        "Nettoyage, rentoilage et réintégration picturale. Expertise approfondie dans l'identification des techniques, pigments et vernis d'origine.",
    },
    {
      id: "meubles",
      title: "Restauration de Meubles",
      icon: Armchair,
      subtitle: "Bois massifs et marqueterie d'époque",
      description:
        "Travail d'ébénisterie minutieux pour préserver la patine, corriger les assemblages et redonner tout son éclat au mobilier ancien.",
    },
    {
      id: "objets-art",
      title: "Restauration d'Objets d'Art",
      icon: Gem,
      subtitle: "Sculptures et artisanat d'art",
      description:
        "Mise en valeur des détails complexes et restauration délicate préservant l'authenticité et les méthodes de fabrication d'époque.",
    },
    {
      id: "tapisseries",
      title: "Restauration de Tapisseries",
      icon: Scroll,
      subtitle: "Textiles et tapisseries anciennes",
      description:
        "Traitement spécialisé : réparation des déchirures, consolidation des trames, nettoyage doux et préservation des couleurs originales.",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen pt-12 pb-24 selection:bg-amber-500 selection:text-black">
      
      {/* --- HERO SECTION DE LA PAGE --- */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/5 text-amber-400 text-xs font-semibold tracking-widest uppercase mb-6">
          <Wrench size={14} />
          <span>Atelier de Conservation</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
          Nos Services de <br />
          <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
            Restauration d'Art
          </span>
        </h1>

        <p className="max-w-3xl mx-auto text-lg sm:text-xl text-neutral-300 font-light leading-relaxed mb-8">
          Experts dans le domaine de l'art et des antiquités, nous mettons notre savoir-faire au service d'une clientèle de passionnés pour redonner vie et pérennité à vos biens d'exception.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 text-black font-semibold px-8 py-3.5 rounded-full transition-all shadow-lg shadow-amber-500/10 hover:shadow-amber-500/25 text-sm uppercase tracking-wider"
          >
            <span>Confier un projet à l'atelier</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* --- GRILLE DES 4 SPECIALITES DE RESTAURATION --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="bg-neutral-950 border border-neutral-800/80 hover:border-amber-500/40 p-8 rounded-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-full group-hover:bg-amber-500/10 transition-colors pointer-events-none" />

                <div>
                  <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent size={28} />
                  </div>

                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-400/80 mb-2 block">
                    {item.subtitle}
                  </span>

                  <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h2>

                  <p className="text-neutral-400 text-sm leading-relaxed mb-8">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-900 flex justify-between items-center text-xs text-neutral-500">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck size={14} className="text-amber-400" />
                    Respect des règles d'art
                  </span>
                  <span className="text-amber-400/70 group-hover:text-amber-400 transition-colors">
                    Sur devis →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* --- BLOC BANNIÈRE BAS DE PAGE --- */}
      <section className="max-w-5xl mx-auto px-4 text-center">
        <div className="bg-neutral-950 border border-amber-500/20 rounded-2xl p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl" />
          
          <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles size={14} />
            <span>Savoir-faire artisanal</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Une pièce à faire restaurer ?
          </h3>
          <p className="text-neutral-400 text-sm sm:text-base max-w-xl mx-auto mb-8">
            Envoyez-nous les détails et photographies de votre objet pour obtenir une première analyse et un devis de restauration.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center border border-amber-500/30 hover:border-amber-400 text-neutral-200 hover:text-white font-medium px-8 py-3.5 rounded-full transition-all bg-black/60 hover:bg-neutral-900 text-sm uppercase tracking-wider"
          >
            Demander un devis de restauration
          </Link>
        </div>
      </section>

    </div>
  );
}