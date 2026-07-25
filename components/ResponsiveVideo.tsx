"use client";

import React from "react";

interface ResponsiveVideoProps {
  /** Source de la vidéo (URL MP4 locale/externe OU lien d'intégration YouTube/Vimeo) */
  src: string;
  /** Image de couverture affichée avant la lecture (pour vidéo HTML5 locale) */
  poster?: string;
  /** Titre d'accessibilité pour la vidéo */
  title?: string;
  /** Ratio d'aspect visuel (ex: "aspect-video" pour 16/9, "aspect-square" pour 1/1, "aspect-[4/3]") */
  aspectRatio?: string;
  /** Déclenchement automatique de la lecture en silencieux */
  autoPlay?: boolean;
  /** Boucle vidéo infinie */
  loop?: boolean;
}

export default function ResponsiveVideo({
  src,
  poster,
  title = "Présentation vidéo",
  aspectRatio = "aspect-video",
  autoPlay = false,
  loop = false,
}: ResponsiveVideoProps) {
  // Détection si la vidéo provient de YouTube ou Vimeo (Lien Embed)
  const isEmbed = src.includes("youtube.com") || src.includes("youtu.be") || src.includes("vimeo.com");

  return (
    <div className="w-full max-w-5xl mx-auto my-8">
      {/* Conteneur avec bordure dorée et ombre subtile */}
      <div className="relative bg-neutral-950 border border-neutral-800 hover:border-amber-500/40 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 group">
        
        {/* Conteneur Responsive gérant le ratio d'aspect */}
        <div className={`relative w-full ${aspectRatio} bg-black flex items-center justify-center`}>
          {isEmbed ? (
            /* Intégration Iframe (YouTube / Vimeo) */
            <iframe
              src={src}
              title={title}
              className="absolute top-0 left-0 w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            /* Intégration Vidéo HTML5 Directe (MP4, WebM) */
            <video
              src={src}
              poster={poster}
              
              autoPlay={autoPlay}
              muted={autoPlay} // Nécessaire pour que le navigateur autorise l'autoplay
              loop={loop}
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover"
            >
              Votre navigateur ne prend pas en charge la lecture de vidéos HTML5.
            </video>
          )}
        </div>

      </div>
    </div>
  );
}