import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // 1. Récupération des données sous forme de FormData (compatible avec fichiers)
    const formData = await request.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = (formData.get("phone") as string) || "Non renseigné";
    const objectType = (formData.get("objectType") as string) || "Général";
    const message = formData.get("message") as string;
    const type = (formData.get("type") as string) || "Demande de contact";

    // Récupération des fichiers photos (s'il y en a)
    const files = formData.getAll("files") as File[];

    // Validation des champs obligatoires
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Veuillez remplir tous les champs obligatoires." },
        { status: 400 }
      );
    }

    // Vérification de l'email destinataire
    const recipientEmail = process.env.EMAIL_CLIENT;
    if (!recipientEmail) {
      console.error("Erreur : EMAIL_CLIENT n'est pas configuré.");
      return NextResponse.json(
        { error: "Configuration serveur incomplète." },
        { status: 500 }
      );
    }

    // Traitement des pièces jointes (photos)
    const attachments = await Promise.all(
      files
        .filter((file) => file.size > 0)
        .map(async (file) => {
          const arrayBuffer = await file.arrayBuffer();
          return {
            filename: file.name,
            content: Buffer.from(arrayBuffer),
          };
        })
    );

    // 2. Envoi via Resend avec tes identifiants qui fonctionnaient
    const { data, error } = await resend.emails.send({
      from: "Antiquité Canétoise <contact@antiquitecanetoise.fr>",
      to: [recipientEmail],
      replyTo: email,
      subject: `[${type.toUpperCase()}] Message de : ${name}`,
      attachments: attachments.length > 0 ? attachments : undefined,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #d97706;">Demande d'estimation depuis votre site web</h2>
          <p><strong>Type de demande :</strong> ${type}</p>
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email du visiteur :</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Téléphone :</strong> ${phone}</p>
          ${objectType !== "Général" ? `<p><strong>Type d'objet :</strong> ${objectType}</p>` : ""}
          <p><strong>Photos jointes :</strong> ${attachments.length} fichier(s)</p>
          
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          
          <p><strong>Message / Description :</strong></p>
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