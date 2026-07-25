"use client";

import { useState } from "react";
import { Sparkles, ShieldCheck, Clock, FileSearch, Upload, Send, CheckCircle2, AlertCircle, Loader2, X } from "lucide-react";

export default function EstimationsPage() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ success?: boolean; message?: string } | null>(null);
  const [files, setFiles] = useState<File[]>([]);

  // Gestion du choix des fichiers
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...selectedFiles]);
    }
  };

  // Suppression d'une photo sélectionnée
  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // On s'assure d'ajouter le type de demande pour l'email
    formData.append("type", "Demande d'estimation");

    // Ajout des fichiers sélectionnés
    files.forEach((file) => {
      formData.append("files", file);
    });

    try {
      const response = await fetch("/api/estimations", {
        method: "POST",
        body: formData, // FormData gère automatiquement le Content-Type multipart/form-data
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({
          success: true,
          message: "Votre demande d'estimation a été transmise avec succès ! Nos experts reviendront vers vous sous 48h.",
        });
        form.reset();
        setFiles([]);
      } else {
        setStatus({
          success: false,
          message: result.error || "Une erreur est survenue lors de l'envoi de votre demande.",
        });
      }
    } catch {
      setStatus({
        success: false,
        message: "Impossible de joindre le serveur. Veuillez vérifier votre connexion.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen pt-12 pb-24 selection:bg-amber-500 selection:text-black">
      
      {/* --- EN-TÊTE DE LA PAGE --- */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/5 text-amber-400 text-xs font-semibold tracking-widest uppercase mb-6">
          <Sparkles size={14} />
          <span>Expertise & Valeur</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
          Faites Estimer Vos <br />
          <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
            Biens d&apos;Exception
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg text-neutral-300 font-light leading-relaxed">
          Venez faire estimer vos plus belles pièces et recevez une expertise précise, confidentielle et sans engagement réalisée par nos experts.
        </p>
      </section>

      {/* --- NOTRE PROCESSUS EN 3 ÉTAPES --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-neutral-950 border border-neutral-800/80 p-8 rounded-2xl relative">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 font-bold text-xl mb-6 border border-amber-500/20">
              1
            </div>
            <h3 className="text-xl font-bold mb-3">Formulaire & Photos</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Remplissez le formulaire ci-dessous en joignant des photos claires et les dimensions de votre bien.
            </p>
          </div>

          <div className="bg-neutral-950 border border-neutral-800/80 p-8 rounded-2xl relative">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 font-bold text-xl mb-6 border border-amber-500/20">
              2
            </div>
            <h3 className="text-xl font-bold mb-3">Analyse d&apos;Expertise</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Nos spécialistes étudient la provenance, l&apos;état de conservation et le cours actuel du marché.
            </p>
          </div>

          <div className="bg-neutral-950 border border-neutral-800/80 p-8 rounded-2xl relative">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 font-bold text-xl mb-6 border border-amber-500/20">
              3
            </div>
            <h3 className="text-xl font-bold mb-3">Estimation & Conseils</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Recevez sous 48h une évaluation précise avec nos conseils pour une vente ou restauration éventuelle.
            </p>
          </div>

        </div>
      </section>

      {/* --- FORMULAIRE D'ESTIMATION DIRECT --- */}
      <section className="max-w-4xl mx-auto px-4 mb-24">
        <div className="bg-neutral-950 border border-neutral-800/90 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          
          <div className="mb-10 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">Demander votre estimation gratuite</h2>
            <p className="text-neutral-400 text-sm">
              Remplissez ce rapide questionnaire, nous vous répondrons dans les plus brefs délais.
            </p>
          </div>

          {/* Alerte de statut */}
          {status && (
            <div
              className={`p-4 rounded-xl text-sm mb-6 flex items-start gap-3 border ${
                status.success
                  ? "bg-amber-500/10 border-amber-500/30 text-amber-300"
                  : "bg-red-500/10 border-red-500/30 text-red-400"
              }`}
            >
              {status.success ? (
                <CheckCircle2 size={20} className="shrink-0 mt-0.5 text-amber-400" />
              ) : (
                <AlertCircle size={20} className="shrink-0 mt-0.5 text-red-400" />
              )}
              <span>{status.message}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                  Nom & Prénom *
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Jean Dupont"
                  className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-3.5 text-white placeholder-neutral-600 focus:outline-none focus:border-amber-400 transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                  Adresse e-mail *
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="jean.dupont@example.com"
                  className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-3.5 text-white placeholder-neutral-600 focus:outline-none focus:border-amber-400 transition-colors text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                  Téléphone
                </label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="06 12 34 56 78"
                  className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-3.5 text-white placeholder-neutral-600 focus:outline-none focus:border-amber-400 transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                  Type d&apos;objet
                </label>
                <select 
                  name="objectType"
                  className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-3.5 text-neutral-300 focus:outline-none focus:border-amber-400 transition-colors text-sm"
                >
                  <option value="Tableau / Peinture">Tableau / Peinture</option>
                  <option value="Meuble Ancien">Meuble Ancien</option>
                  <option value="Objet d'Art / Sculpture">Objet d&apos;Art / Sculpture</option>
                  <option value="Tapisserie">Tapisserie</option>
                  <option value="Monnaie / Numismatique">Monnaie / Numismatique</option>
                  <option value="Autre bien d'exception">Autre bien d&apos;exception</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                Description de la pièce *
              </label>
              <textarea
                name="message"
                rows={4}
                required
                placeholder="Indiquez les dimensions, l'histoire ou la présence d'une signature/poinçon..."
                className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-3.5 text-white placeholder-neutral-600 focus:outline-none focus:border-amber-400 transition-colors text-sm"
              />
            </div>

            {/* ZONE DE TÉLÉCHARGEMENT DE FICHIERS */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                Photographies de l&apos;œuvre
              </label>

              <label className="border-2 border-dashed border-neutral-800 rounded-xl p-6 text-center hover:border-amber-500/40 transition-colors cursor-pointer bg-black/50 block">
                <Upload size={24} className="mx-auto text-amber-400 mb-2" />
                <p className="text-xs text-neutral-400">
                  <span className="text-amber-400 font-semibold">Cliquez pour ajouter des photos</span> (Face, dos, détails, signature)
                </p>
                <p className="text-[10px] text-neutral-600 mt-1">PNG, JPG ou WEBP jusqu&apos;à 10MB</p>
                
                <input
                  type="file"
                  multiple
                  accept="image/png, image/jpeg, image/webp"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>

              {/* LISTE DES FICHIERS SÉLECTIONNÉS */}
              {files.length > 0 && (
                <div className="mt-4 space-y-2">
                  <p className="text-xs text-neutral-400 font-semibold">Photos sélectionnées :</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {files.map((file, index) => (
                      <div key={index} className="flex items-center justify-between bg-neutral-900 border border-neutral-800 px-3 py-2 rounded-lg text-xs">
                        <span className="truncate text-neutral-200">{file.name}</span>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="text-neutral-500 hover:text-red-400 transition-colors p-1"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 text-black font-semibold px-8 py-4 rounded-xl transition-all shadow-lg shadow-amber-500/10 hover:shadow-amber-500/25 uppercase tracking-wider text-sm mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  <span>Traitement en cours...</span>
                </>
              ) : (
                <>
                  <span>Envoyer ma demande d&apos;estimation</span>
                  <Send size={18} />
                </>
              )}
            </button>
          </form>

        </div>
      </section>

      {/* --- GARANTIES & CONTACT RASSURANT --- */}
      <section className="max-w-5xl mx-auto px-4 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-neutral-900 text-xs text-neutral-400">
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck size={18} className="text-amber-400" />
            <span>Confidentialité absolue garantie</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Clock size={18} className="text-amber-400" />
            <span>Réponse sous 48 heures ouvrées</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <FileSearch size={18} className="text-amber-400" />
            <span>Estimation sans engagement</span>
          </div>
        </div>
      </section>

    </div>
  );
}