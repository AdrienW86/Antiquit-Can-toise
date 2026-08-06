import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function New() {
  const items = [
    {
      id: "1",
      category: "Ancien",
      title: "Meuble Ancien",
      description: "Marqueterie fine et bronzes dorés, entièrement restaurée dans notre atelier.",
      image: "/meuble.avif",
      price: "Prix sur demande",
      href: "/catalogue/",
    },
    {
      id: "2",
      category: "Moderne",
      title: "Huile sur Toile Moderne",
      description: "Scène classique restaurée, vendue avec son cadre d'origine doré à la feuille.",
      image: "/tableau.avif",
      price: "Prix sur demande",
      href: "/catalogue/",
    },
    {
      id: "3",
      category: "Vintage",
      title: "Sculpture Bronze",
      description: "Épreuve ancienne authentifiée, patine d'origine conservée avec certificat.",
      image: "/sculpture.avif",
      price: "Prix sur demande",
      href: "/catalogue/",
    },
    {
      id: "4",
      title: "Scaphandre ",
      category: "objets-art",
      image: "/scaphandre.jpg",
      description: "oeuvre d'art original.",
      price: "Prix sur demande",
      href: "/catalogue/",
    },
    {
      id: "5",
      title: "Montre Cartier ",
      category: "monnaies",
      image: "/montre.jpg",
      description: "montre de créateur avec finitions de très haute qualité.",
       price: "Prix sur demande",
      href: "/catalogue/",
    },
  ];

  return (
    <section id="catalogue" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">
              Inspirations
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-1 text-white">
              Les Nouveautés
            </h2>
          </div>
          <p className="text-neutral-400 text-sm mt-2 md:mt-0 max-w-md">
            Aperçu des dernières pièces rares entrées dans notre collection.
          </p>
        </div>

        {/* Grille dynamique avec images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-neutral-950 border border-neutral-900 rounded-2xl overflow-hidden group hover:border-amber-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Conteneur d'image avec effet Zoom au survol */}
              <div className="relative h-72 w-full overflow-hidden bg-neutral-900">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay sombre discret pour faire ressortir l'image */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-60" />
              </div>

              {/* Contenu textuel */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-amber-400/80 text-xs uppercase tracking-wider font-semibold">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1 mb-2 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Pied de carte avec lien */}
                <div className="flex justify-between items-center pt-4 border-t border-neutral-900 mt-auto">
                  <span className="text-white text-sm font-semibold">
                    {item.price}
                  </span>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-amber-400 text-sm font-medium group-hover:translate-x-1 transition-transform"
                  >
                    <span>Voir la fiche</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}