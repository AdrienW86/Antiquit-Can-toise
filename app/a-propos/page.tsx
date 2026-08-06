import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "À Propos | Galerie & Expertise d'Art à Canet-en-Roussillon",
  description: "Découvrez notre histoire familiale, notre passion pour l'art et le patrimoine, ainsi que notre savoir-faire en restauration et estimation à Canet-en-Roussillon.",
};

export default function APropos() {
  const sections = [
    {
      title: "L'Ancrage Catalan : Notre Maison à Canet-en-Roussillon",
      subtitle: "Un lieu d'échange et de passion au cœur de la région",
      text: "Située au cœur de Canet-en-Roussillon, entre terre et Méditerranée, notre galerie est née d'un amour inconditionnel pour le patrimoine et les objets de mémoire. Pensée comme une maison ouverte aux passionnés d'art comme aux curieux, nous avons créé un espace accueillant où chaque pièce exposée raconte un fragment d'histoire. Notre implantation locale est le socle de notre démarche : offrir un service de proximité, rigoureux et humain, pour mettre en valeur les trésors artistiques de notre région et d'ailleurs.",
      image: "/images/devanture.jpg",
      alt: "Devanture de la galerie à Canet-en-Roussillon",
      reverse: false,
    },
    {
      title: "L'Amour des Œuvres & de l'Histoire",
      subtitle: "La quête constante de la beauté et de l'authenticité",
      text: "Chaque objet d'art possède une âme, une voix et une trajectoire unique. Notre passion nous pousse à rechercher, étudier et préserver des pièces rares, allant des tableaux anciens aux sculptures, en passant par le mobilier d'exception et les objets de collection. Plus qu'une simple transaction, nous envisageons l'art comme un vecteur de transmission culturelle. Nous nous attachons à documenter l'origine et l'histoire de chaque œuvre afin d'en révéler toute la valeur historique et émotionnelle.",
      image: "/images/oeuvre.jpg",
      alt: "Œuvre d'art remarquable exposée dans la galerie",
      reverse: true,
    },
    {
      title: "Une Aventure Familiale & Un Accompagnement Sur Mesure",
      subtitle: "La confiance au centre de chaque relation client",
      text: "Transmise au fil du temps, notre entreprise s'appuie sur des valeurs familiales fortes : la probité, l'écoute et le respect des collectionneurs. Nous sommes convaincus que le marché de l'art doit rester accessible et transparent. Que vous franchissiez notre porte pour constituer une collection, vendre un bien ou simplement échanger sur une période artistique, vous trouverez auprès de notre équipe une oreille attentive et des conseils éclairés, guidés par le souci constant de préserver vos intérêts.",
      image: "/images/gerant2.jpg",
      alt: "Portrait d'un gérant de la galerie",
      reverse: false,
    },
    {
      title: "L'Art du Regard : Rigueur, Estimation & Restauration",
      subtitle: "Un examen minutieux pour révéler le secret des œuvres",
      text: "Expertiser une œuvre demande de la patience, de l'érudition et un œil exercé aux moindres détails. À la loupe et à la lumière d'une connaissance fine des techniques anciennes, nous analysons l'état de conservation, la signature, la patine et les éventuelles altérations de vos objets précieux. Qu'il s'agisse de réaliser une estimation préalable pour une succession ou d'orchestrer la restauration dans les règles de l'art d'un tableau endommagé, nous appliquons une méthodologie scientifique stricte.",
      image: "/images/expertise.jpg",
      alt: "Gérant en train d'examiner attentivement une œuvre d'art",
      reverse: true,
    },
  ];

  return (
    <main className="bg-black text-neutral-200 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* --- EN-TÊTE DE LA PAGE --- */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <p className="text-amber-400 uppercase tracking-widest text-xs sm:text-sm font-semibold">
            Maison d'Art & d'Histoire
          </p>
          <h1 className="text-3xl sm:text-5xl font-serif font-light text-neutral-100 tracking-wide">
            Notre Histoire, Notre Passion
          </h1>
          <div className="w-24 h-[1px] bg-amber-500/50 mx-auto my-6" />
          <p className="text-neutral-400 text-base sm:text-lg font-light leading-relaxed">
            Basée à Canet-en-Roussillon, notre galerie familiale met son expertise et sa passion de l'art au service de la valorisation et de la préservation de votre patrimoine.
          </p>
        </section>

        {/* --- LES 4 BLOCS HISTOIRE / PHOTOS --- */}
        <div className="space-y-24">
          {sections.map((sec, idx) => (
            <section
              key={idx}
              className={`flex flex-col lg:items-center gap-10 lg:gap-16 ${
                sec.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              {/* CADRE PHOTO */}
              <div className="w-full lg:w-1/2">
                <div className="relative group rounded-lg overflow-hidden border border-amber-500/30 p-2 bg-neutral-900/60 shadow-xl shadow-amber-950/10">
                  <div className="relative aspect-[4/3] w-full rounded overflow-hidden">
                    <Image
                      src={sec.image}
                      alt={sec.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                  </div>
                </div>
              </div>

              {/* CONTENU TEXTE */}
              <div className="w-full lg:w-1/2 space-y-4">
                <p className="text-amber-400/80 text-xs uppercase tracking-widest font-mono">
                  0{idx + 1} — {sec.subtitle}
                </p>
                <h2 className="text-2xl sm:text-3xl font-serif text-neutral-100 leading-tight">
                  {sec.title}
                </h2>
                <div className="w-12 h-[1px] bg-amber-500/40 my-2" />
                <p className="text-neutral-300 font-light leading-relaxed text-base sm:text-lg text-justify">
                  {sec.text}
                </p>
              </div>
            </section>
          ))}
        </div>

        {/* --- CALL TO ACTION BAS DE PAGE --- */}
        <section className="border border-amber-500/20 bg-neutral-950/80 rounded-2xl p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-6 mt-20">
          <h2 className="text-2xl sm:text-3xl font-serif text-neutral-100">
            Vous souhaitez nous rendre visite ou faire estimer un bien ?
          </h2>
          <p className="text-neutral-400 font-light max-w-xl mx-auto">
            Nous vous accueillons dans notre galerie à Canet-en-Roussillon sur rendez-vous ou aux horaires d'ouverture pour échanger autour de vos projets.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3 bg-amber-500 hover:bg-amber-400 text-black font-semibold uppercase tracking-wider text-xs rounded transition-colors duration-200"
            >
              Prendre contact
            </Link>
            <Link
              href="/estimations"
              className="px-8 py-3 border border-amber-500/40 text-neutral-200 hover:text-amber-400 hover:border-amber-400 uppercase tracking-wider text-xs rounded transition-colors duration-200"
            >
              Demander une estimation
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}