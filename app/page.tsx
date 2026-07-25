import Link from "next/link";
import Banner from "@/components/Banner";
import { ArrowRight, Sparkles, Compass, Hammer, Search } from "lucide-react";
import New from "@/components/New";
import ResponsiveVideo from "@/components/ResponsiveVideo";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen selection:bg-amber-500 selection:text-black">
      <Banner />

      {/* 2. À PROPOS DE NOUS */}
      <section className="py-24 bg-black border-b border-neutral-900 relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/5 text-amber-400 text-xs font-semibold tracking-widest uppercase mb-6">
            <Compass size={14} />
            <span>Notre Maison</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6">
            À propos de <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent">nous</span>
          </h2>

          <p className="text-lg sm:text-xl text-neutral-300 font-light leading-relaxed max-w-3xl mx-auto">
            Nous sommes des experts passionnés par le domaine de l&apos;art et des antiquités. Notre amour pour les biens d&apos;exception nous permet de vous offrir un accompagnement sur-mesure dans l&apos;achat, la restauration et l&apos;estimation de vos plus belles pièces.
          </p>

        </div>
      </section>

      <ResponsiveVideo
        src="/video.mp4"
        poster="/images/poster-restauration.jpg"
        title="Démonstration de la restauration d'une tapisserie"
        autoPlay={true}
        loop={true}
      />

      {/* 3. NOS PRESTATIONS */}
      <section id="services" className="py-24 bg-neutral-950 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Nos <span className="text-amber-400">Prestations</span>
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Une gamme complète de services pour répondre à l&apos;ensemble de vos besoins en matière d&apos;art et de mobilier ancien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Carte 1 : Catalogue */}
            <div className="bg-black border border-neutral-800 hover:border-amber-500/40 p-8 rounded-2xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
                  <Sparkles size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Nos Produits</h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  Une sélection exceptionnelle d&apos;œuvres d&apos;art et de mobilier ancien à vendre. Nos experts sauront vous guider dans vos choix d&apos;acquisition.
                </p>
              </div>
              <Link
                href="catalogue"
                className="inline-flex items-center gap-2 text-amber-400 font-semibold hover:text-amber-300 transition-colors text-sm uppercase tracking-wider"
              >
                <span>Découvrir le catalogue</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Carte 2 : Restaurations */}
            <div className="bg-black border border-neutral-800 hover:border-amber-500/40 p-8 rounded-2xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
                  <Hammer size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Nos Restaurations</h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  Prenez soin de vos plus belles œuvres. Nos artisans et experts en rénovation redonnent vie et éclat à vos pièces les plus précieuses.
                </p>
              </div>
              <Link
                href="restaurations"
                className="inline-flex items-center gap-2 text-amber-400 font-semibold hover:text-amber-300 transition-colors text-sm uppercase tracking-wider"
              >
                <span>Voir l&apos;atelier</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Carte 3 : Estimations */}
            <div className="bg-black border border-neutral-800 hover:border-amber-500/40 p-8 rounded-2xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
                  <Search size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Nos Estimations</h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  Faites évaluer vos biens d&apos;art et recevez une expertise précise, rigoureuse et basée sur les cours actuels du marché.
                </p>
              </div>
              <Link
                href="estimations"
                className="inline-flex items-center gap-2 text-amber-400 font-semibold hover:text-amber-300 transition-colors text-sm uppercase tracking-wider"
              >
                <span>Demander une expertise</span>
                <ArrowRight size={16} />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* 4. SECTION NOUVEAUTÉS */}
     <New />

    </div>
  );
}