export const prerender = false;

const validDomains = [
  "sorbonne-universite.fr", "etu.unistra.fr", "universite-paris-saclay.fr",
  "etu.u-paris.fr", "etu.u-bordeaux.fr", "etu.univ-grenoble-alpes.fr",
  "etu.psl.eu", "etu.univ-lille.fr", "etu.univ-cotedazur.fr",
  "etu.univ-rennes1.fr", "etu.univ-ubs.fr", "etu.univ-nantes.fr",
  "etu.univ-angers.fr", "etu.unicaen.fr", "etu.univ-rouen.fr",
  "etu.unilim.fr", "etu.univ-lr.fr", "etu.ut-capitole.fr",
  "etu.umontpellier.fr", "etu.uca.fr", "etu.univ-amu.fr",
  "edu.univ-fcomte.fr", "etu.u-bourgogne.fr", "etu.univ-orleans.fr",
  "etu.univ-tours.fr", "etu.univ-corse.fr"
];

function isValidUniversityEmail(email) {
  const domain = email.split("@")[1];
  return validDomains.includes(domain);
}

export async function POST({ request }) {
  try {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    const name = formData.get("name");
    const firstname = formData.get("firstname");

    if (!email || !password || !name || !firstname) {
      throw new Error("Tous les champs sont obligatoires.");
    }

    if (!isValidUniversityEmail(email)) {
      throw new Error("Seules les adresses universitaires sont autorisées.");
    }

    const { default: PocketBase } = await import("pocketbase");
    const pb = new PocketBase("https://pb-faclink.alice-frelin.fr:443");

    await pb.collection("comptes_etudiant").create({
      email,
      password,
      name,
      firstname,
      centre_interet: [] // obligatoire si ce champ est requis dans PocketBase
    });

    return new Response(null, {
      status: 302,
      headers: {
        Location: "/connexion?success=1"
      }
    });

  } catch (error) {
    console.error("[ERREUR inscription]", error);

    let message = "Erreur lors de l'inscription";

    if (error?.response?.data) {
      const firstError = Object.values(error.response.data)[0];
      message = firstError?.message || message;
    } else if (error.message) {
      message = error.message;
    }

    return new Response(null, {
      status: 302,
      headers: {
        Location: "/inscription?error=" + encodeURIComponent(message)
      }
    });
  }
}
