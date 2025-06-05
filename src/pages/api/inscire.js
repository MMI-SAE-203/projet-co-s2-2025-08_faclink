export const prerender = false;

export async function POST({ request }) {
  try {
    const body = await request.text();
    if (!body) return new Response("Body vide", { status: 400 });

    const params = new URLSearchParams(body);
    const userData = {
      name: params.get("name"),
      firstname: params.get("firstname"),
      email: params.get("email"),
      password: params.get("password"),
    };

    if (!userData.name || !userData.email || !userData.password) {
      return new Response("Données manquantes", { status: 400 });
    }

    const { default: PocketBase } = await import("pocketbase");
    const pb = new PocketBase("https://pb-faclink.alice-frelin.fr:443");

    // Création du compte
    await pb.collection("comptes_etudiant").create({
      ...userData,
      passwordConfirm: userData.password,
    });

    // ✅ Authentifier automatiquement l'utilisateur
    await pb
      .collection("comptes_etudiant")
      .authWithPassword(userData.email, userData.password);

    // ✅ Générer le cookie d'authentification
    const cookie = pb.authStore.exportToCookie({ httpOnly: false }); // httpOnly=false si on veut aussi l'utiliser côté JS

    // ✅ Redirection + header Set-Cookie
    return new Response(
      `
  <html>
    <head><title>Inscription réussie</title></head>
    <body>
      <h1>Compte créé avec succès !</h1>
      <p>Redirection...</p>
      <script>
        setTimeout(() => {
          // Rechargement "propre" pour que le cookie pb_auth soit pris en compte
          window.location.href = '/muretudiant';
        }, 500);
      </script>
    </body>
  </html>
`,
      {
        status: 200,
        headers: {
          "Set-Cookie": pb.authStore.exportToCookie({ httpOnly: false }),
          "Content-Type": "text/html",
        },
      }
    );
  } catch (err) {
    return new Response("Erreur : " + err.message, { status: 500 });
  }
}
