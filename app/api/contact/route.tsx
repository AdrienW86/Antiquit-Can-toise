import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validation simple des champs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Veuillez remplir tous les champs obligatoires." },
        { status: 400 }
      );
    }

    // Sécurité : vérifier que l'email destinataire (Gmail du client) est configuré
    const recipientEmail = process.env.EMAIL_CLIENT;
    if (!recipientEmail) {
      console.error("Erreur : EMAIL_CLIENT n'est pas configuré dans les variables d'environnement.");
      return NextResponse.json(
        { error: "Configuration serveur incomplète." },
        { status: 500 }
      );
    }

    // Envoi de l'e-mail via Resend
    const { data, error } = await resend.emails.send({
      // 1. Remplacez "votre-domaine.fr" par le domaine que vous avez ajouté sur Resend
      from: "Antiquité Canétoise <contact@antiquitecanetoise.fr>",
      
      // 2. Destinataire : L'adresse Gmail définie dans votre variable d'environnement EMAIL_CLIENT
      to: [recipientEmail],

      // 3. Permet de répondre en un clic au visiteur depuis Gmail
      replyTo: email,

      subject: `Nouveau message de contact : ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #d97706;">Nouveau message depuis votre site web</h2>
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email du visiteur :</strong> <a href="mailto:${email}">${email}</a></p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Message :</strong></p>
          <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 8px;">${message}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Erreur renvoyée par Resend :", error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Erreur serveur lors de l'envoi :", error);
    return NextResponse.json(
      { error: "Une erreur est survenue lors de l'envoi." },
      { status: 500 }
    );
  }
}