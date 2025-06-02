import { f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from '../chunks/astro/server_Dc7gvlnh.mjs';
import 'kleur/colors';
import 'clsx';
import PocketBase from 'pocketbase';
export { renderers } from '../renderers.mjs';

const pb = new PocketBase("https://pb-faclink.alice-frelin.fr:443");

async function getEvenements() {
    try {
        let data = await pb.collection('evenement').getFullList({
            sort: '-created',
        });
        data = data.map((evenement) => {
            evenement.img = pb.files.getURL(evenement, evenement.Image);
            return evenement;
        });
        return data;
    } catch (error) {
        console.log('Une erreur est survenue en lisant la liste des maisons', error);
        return null;
    }
}

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const evenements = await getEvenements();
  return renderTemplate`${maybeRenderHead()}<h1>Liste des Événements</h1> <a href="/evenements/creation_evenement">Créer un évènement</a> ${evenements ? renderTemplate`<ul> ${evenements.map((event) => renderTemplate`<li> <h2>${event.Nom}</h2> ${event.img ? renderTemplate`<div> <p><strong>Image :</strong></p> <img${addAttribute(event.img, "src")}${addAttribute(`Image de ${event.Nom}`, "alt")} width="300"> <p>${event.img}</p> ${ void 0} </div>` : renderTemplate`<p>Aucune image disponible.</p>`} <p><strong>Catégorie :</strong> ${event.categorie}</p> <p><strong>Description :</strong> ${event.Description}</p> <p><strong>Horaire :</strong> ${new Date(event.Horaire).toLocaleString("fr-FR")}</p> <p><strong>Lieu :</strong> ${event.Lieu}</p> <p><strong>Organisateur :</strong> ${event.Organisateur}</p> <p><strong>Participants max :</strong> ${event.Participants_max}</p> <p><strong>Inscription :</strong> ${event.Inscription}</p> <p><strong>Prix :</strong> ${event.Prix}</p> <p><strong>Résumé :</strong> ${event.Snippet}</p> <hr> </li>`)} </ul>` : renderTemplate`<p>Aucun événement trouvé.</p>`}`;
}, "/Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/src/pages/evenements/index.astro", void 0);

const $$file = "/Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/src/pages/evenements/index.astro";
const $$url = "/evenements";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
