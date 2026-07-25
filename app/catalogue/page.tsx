import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Paintbrush, Armchair, Gem, Coins, Scroll, ZoomIn } from "lucide-react";

// Types pour structurer chaque photo/objet
export interface CatalogueItem {
  id: string;
  title: string;
  category: "tableaux" | "meubles" | "objets-art" | "tapisseries" | "monnaies";
  image: string;
  description: string;
  period?: string;
}

export default function CataloguePage() {
  // 1. Vos 5 grandes catégories
  const categories = [
    {
      id: "tableaux",
      title: "Tableaux & Peintures",
      icon: Paintbrush,
      description: "Peintures modernes et classiques pour sublimer vos intérieurs.",
      tag: "Classique & Moderne",
    },
    {
      id: "meubles",
      title: "Meubles Anciens",
      icon: Armchair,
      description: "Mobilier d'époque, bois nobles et marqueterie d'exception.",
      tag: "Bois Nobles",
    },
    {
      id: "objets-art",
      title: "Objets d'Art",
      icon: Gem,
      description: "Sculptures, bronzes et objets de collection rares.",
      tag: "Sculptures & Raretés",
    },
    
    {
      id: "monnaies",
      title: "Monnaies de Collection",
      icon: Coins,
      description: "Pièces de collection et numismatique rare.",
      tag: "Numismatique",
    },
  ];

  // 2. Vos photos avec leur catégorie attribuée
  const items: CatalogueItem[] = [
    {
      id: "1",
      title: "Huile sur Toile XVIIe",
      category: "tableaux",
      image: "/tableau.avif",
      description: "Scène classique restaurée en atelier avec son cadre d'origine.",
      period: "XVIIe Siècle",
    },
    {
      id: "2",
      title: "Huile Moderne ",
      category: "tableaux",
      image: "/tableau2.avif",
      description: "Scène classique restaurée en atelier avec son cadre d'origine.",
      period: "XVIIe Siècle",
    },
    {
      id: "3",
      title: "Huile sur Toile Moderne",
      category: "tableaux",
      image: "/tableaux.avif",
      description: "Scène classique restaurée en atelier avec son cadre d'origine.",
      period: "XVIIe Siècle",
    },
    {
      id: "4",
      title: "Commode d'Époque ",
      category: "meubles",
      image: "/commode.avif",
      description: "commode fine et bronzes dorés, conservation d'exception.",
      period: "XVIIIe Siècle",
    },
    {
      id: "5",
      title: "Buffet ",
      category: "meubles",
      image: "/buffet.avif",
      description: "Buffet élégant en bois.",
      period: "XVIIIe Siècle",
    },
    {
      id: "6",
      title: "Commode moderne ",
      category: "meubles",
      image: "/moderne.avif",
      description: "Commande aux motifs vif.",
      period: "XVIIIe Siècle",
    },
    {
      id: "7",
      title: "Fauteuil ",
      category: "meubles",
      image: "/fauteuil.avif",
      description: "Fauteuil en cuir haute qualité.",
      period: "XVIIIe Siècle",
    },
    {
      id: "8",
      title: "Table d'appoint ",
      category: "meubles",
      image: "/meuble2.avif",
      description: "table d'appoint avec plateau en marbre.",
      period: "XVIIIe Siècle",
    },
    {
      id: "9",
      title: "Sculpture Bronze",
      category: "objets-art",
      image: "/sculpture.avif",
      description: "Sculpture bronze.",
      period: "XIXe Siècle",
    },
    {
      id: "10",
      title: "Sculpture Bronze Femme",
      category: "objets-art",
      image: "/sculpture2.avif",
      description: "Sculpture bronze femme.",
      period: "XIXe Siècle",
    },
    {
      id: "11",
      title: "Cheval sculpté",
      category: "objets-art",
      image: "/cheval.avif",
      description: "Épreuve ancienne authentifiée, patine d'origine.",
      period: "XIXe Siècle",
    },
    {
      id: "12",
      title: "Ange argenté",
      category: "objets-art",
      image: "/ange.avif",
      description: "Statut d'un ange argenté.",
      period: "XIXe Siècle",
    },
    {
      id: "13",
      title: "Tapisserie d'Aubusson",
      category: "tapisseries",
      image: "/catalogue/tapisserie.avif",
      description: "Tissage ancien conservé, couleurs d'origine d'une grande fraîcheur.",
      period: "XVIIIe Siècle",
    },
  
    {
      id: "14",
      title: "Eléments décoratifs élégants",
      category: "monnaies",
      image: "/deco.avif",
      description: "Eléments décoratifs élégants.",
      period: "Pièce Ancienne",
    },
    {
      id: "15",
      title: "Vaisselle rafinée",
      category: "monnaies",
      image: "/vaisselle.avif",
      description: "Différents éléments de vaisselle élégants.",
      period: "Pièce Ancienne",
    },
    {
      id: "16",
      title: "Ensemble de figures décoratives",
      category: "monnaies",
      image: "/vitrine.avif",
      description: "Différents éléments de décorations élégants.",
      period: "Pièce Ancienne",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen pt-12 pb-24 selection:bg-amber-500 selection:text-black">
      
      {/* --- EN-TÊTE DU CATALOGUE --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/5 text-amber-400 text-xs font-semibold tracking-widest uppercase mb-6">
          <Sparkles size={14} />
          <span>Collection Exclusivité</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
          Notre <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent">Catalogue</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg text-neutral-300 font-light leading-relaxed">
          Explorez notre sélection d&apos;œuvres authentifiées, triées par spécialité et conservées avec le plus grand soin par nos experts.
        </p>
      </section>

      {/* --- BLOCS DE NAVIGATEURS RAPIDES --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((cat) => {
            const IconComponent = cat.icon;
            return (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="bg-neutral-950 border border-neutral-800/80 hover:border-amber-500/50 p-5 rounded-2xl transition-all duration-300 text-center group flex flex-col items-center justify-center"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-3 group-hover:scale-110 transition-transform">
                  <IconComponent size={20} />
                </div>
                <span className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                  {cat.title}
                </span>
              </a>
            );
          })}
        </div>
      </section>

      {/* --- SECTIONS PAR CATÉGORIE AVEC PHOTOS ASSOCIÉES --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 mb-24">
        {categories.map((cat) => {
          const IconComponent = cat.icon;
          // Filtrage des photos qui appartiennent à cette catégorie
          const categoryPhotos = items.filter((item) => item.category === cat.id);

          return (
            <div key={cat.id} id={cat.id} className="scroll-mt-24">
              
              {/* Entête de catégorie */}
              <div className="flex items-center justify-between border-b border-neutral-900 pb-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                    <IconComponent size={24} />
                  </div>
                  <div>
                    <span className="text-amber-400/80 text-xs uppercase tracking-wider font-semibold">
                      {cat.tag}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">
                      {cat.title}
                    </h2>
                  </div>
                </div>
                <p className="hidden md:block text-neutral-400 text-sm max-w-sm text-right">
                  {cat.description}
                </p>
              </div>

              {/* Grille des photos de cette catégorie */}
              {categoryPhotos.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryPhotos.map((photo) => (
                    <div
                      key={photo.id}
                      className="bg-neutral-950 border border-neutral-800/80 rounded-2xl overflow-hidden group hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between"
                    >
                      {/* Image */}
                      <div className="relative h-72 w-full overflow-hidden bg-neutral-900">
                        <Image
                          src={photo.image}
                          alt={photo.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {photo.period && (
                          <span className="absolute top-3 left-3 bg-black/80 backdrop-blur-md text-amber-400 border border-amber-500/30 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                            {photo.period}
                          </span>
                        )}
                      </div>

                      {/* Contenu textuel */}
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                          {photo.title}
                        </h3>
                        <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                          {photo.description}
                        </p>
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider hover:text-amber-300 transition-colors pt-4 border-t border-neutral-900 w-full justify-between"
                        >
                          <span>Se renseigner sur cette pièce</span>
                          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* Message si pas encore de photo dans cette catégorie */
                <div className="bg-neutral-950/50 border border-neutral-900 rounded-2xl p-8 text-center text-neutral-500 text-sm">
                  De nouvelles pièces de cette catégorie arrivent prochainement en boutique.
                </div>
              )}

            </div>
          );
        })}
      </section>

      {/* --- BANNIÈRE RECHERCHE SUR MESURE --- */}
      <section className="max-w-5xl mx-auto px-4 text-center">
        <div className="bg-gradient-to-r from-neutral-900 via-neutral-950 to-neutral-900 border border-amber-500/20 rounded-2xl p-8 sm:p-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Vous cherchez une pièce en particulier ?
          </h3>
          <p className="text-neutral-400 text-sm sm:text-base max-w-xl mx-auto mb-8">
            Notre réseau de collectionneurs nous permet de dénicher des œuvres spécifiques sur demande. Contactez-nous pour nous faire part de votre recherche.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 text-black font-semibold px-8 py-3.5 rounded-full transition-all shadow-lg shadow-amber-500/10 hover:shadow-amber-500/25 text-sm uppercase tracking-wider"
          >
            Faire une recherche sur-mesure
          </Link>
        </div>
      </section>

    </div>
  );
}