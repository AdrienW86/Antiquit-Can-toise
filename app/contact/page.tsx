"use client";

import { useState } from "react";
import { MapPin, Clock, Mail, Phone, Send, Sparkles, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ success?: boolean; message?: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ 
          success: true, 
          message: "Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais." 
        });
        form.reset(); // Vide les champs du formulaire
      } else {
        setStatus({ 
          success: false, 
          message: result.error || "Une erreur s'est produite lors de l'envoi." 
        });
      }
    } catch {
      setStatus({ 
        success: false, 
        message: "Impossible de contacter le serveur. Vérifiez votre connexion." 
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
          <span>À votre écoute</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
          Nous <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent">Contacter</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg text-neutral-300 font-light leading-relaxed">
          Pour toute question, demande d&apos;information ou rendez-vous en boutique, n&apos;hésitez pas à nous contacter. Notre équipe est là pour vous accompagner.
        </p>
      </section>

      {/* --- GRILLE PRINCIPALE (INFOS + FORMULAIRE) --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* COLONNE GAUCHE : COORDONNÉES ET HORAIRES (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Carte Adresse */}
            <div className="bg-neutral-950 border border-neutral-800/80 p-8 rounded-2xl relative overflow-hidden group hover:border-amber-500/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Notre Galerie</h3>
              <p className="text-neutral-300 text-sm leading-relaxed">
                15 Promenade de la Côte Vermeille<br />
                <span className="text-white font-semibold">66140 Canet-en-Roussillon</span>
              </p>
            </div>

            {/* Carte Horaires */}
            <div className="bg-neutral-950 border border-neutral-800/80 p-8 rounded-2xl relative overflow-hidden group hover:border-amber-500/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Horaires d'Ouverture</h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center pb-2 border-b border-neutral-900">
                  <span className="text-neutral-400">Mardi - Dimanche</span>
                  <span className="text-amber-400 font-medium">10h00 - 12h00</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-neutral-900">
                  <span className="text-neutral-400">Après-midi</span>
                  <span className="text-amber-400 font-medium">16h00 - 18h30</span>
                </div>
                <div className="flex justify-between items-center pt-1 text-xs">
                  <span className="text-neutral-500">Lundi</span>
                  <span className="text-neutral-500 italic">Fermé</span>
                </div>
              </div>
            </div>

            {/* Carte Contact direct */}
            <div className="bg-neutral-950 border border-neutral-800/80 p-8 rounded-2xl relative overflow-hidden group hover:border-amber-500/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Directement par téléphone / email</h3>
              <p className="text-neutral-400 text-sm mb-4">
                Privilégiez le téléphone pour les demandes urgentes concernant une pièce en catalogue.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-3 text-neutral-200">
                  <Phone size={16} className="text-amber-400" />
                  <span>06 11 05 62 87</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-200">
                  <Mail size={16} className="text-amber-400" />
                  <span>antiquitecanetoise66@gmail.com</span>
                </div>
              </div>
            </div>

          </div>

          {/* COLONNE DROITE : FORMULAIRE DE CONTACT (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-neutral-950 border border-neutral-800/90 rounded-3xl p-8 sm:p-12 relative">
              
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">Envoyez-nous un message</h2>
                <p className="text-neutral-400 text-sm">
                  Complétez ce formulaire et nous vous répondrons dans les plus brefs délais.
                </p>
              </div>

              {/* Alerte de statut (Succès ou Erreur) */}
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
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                    Nom complet *
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Votre nom et prénom"
                    className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-3.5 text-white placeholder-neutral-600 focus:outline-none focus:border-amber-400 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                    Adresse email *
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="votre.email@example.com"
                    className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-3.5 text-white placeholder-neutral-600 focus:outline-none focus:border-amber-400 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    required
                    placeholder="Comment pouvons-nous vous aider ? (Demande de renseignements, prise de RDV, etc.)"
                    className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-3.5 text-white placeholder-neutral-600 focus:outline-none focus:border-amber-400 transition-colors text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 text-black font-semibold px-8 py-4 rounded-xl transition-all shadow-lg shadow-amber-500/10 hover:shadow-amber-500/25 uppercase tracking-wider text-sm mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <span>Envoyer le message</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}