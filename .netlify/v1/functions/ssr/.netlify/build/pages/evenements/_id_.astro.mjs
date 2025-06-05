import { e as createAstro, f as createComponent, k as renderComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from '../../chunks/astro/server_a8KlzRQY.mjs';
import 'kleur/colors';
import PocketBase from 'pocketbase';
import { $ as $$Header, a as $$Footer } from '../../chunks/Footer_CdEdL_-f.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://faclink.netlify.app");
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const pb = new PocketBase("https://pb-faclink.alice-frelin.fr:443");
  const event = await pb.collection("evenement").getOne(id);
  return renderTemplate`${renderComponent($$result, "Header", $$Header, {})} ${maybeRenderHead()}<h1>${event.Nom}</h1> <img${addAttribute(pb.files.getUrl(event, event.Image), "src")} alt="Image de l'événement" width="300"> <p><strong>Description :</strong> ${event.Description}</p> <p><strong>Lieu :</strong> ${event.Lieu}</p> <p><strong>Horaire :</strong> ${new Date(event.Horaire).toLocaleString()}</p> <p><strong>Organisateur :</strong> ${event.Organisateur}</p> <p><strong>Participants max :</strong> ${event.Participants_max}</p> <p><strong>Catégorie :</strong> ${event.categorie}</p> <p><strong>Inscription :</strong> ${event.Inscription}</p> <p><strong>Prix :</strong> ${event.Prix}</p> <p><strong>Snippet :</strong> ${event.Snippet}</p> ${renderComponent($$result, "Footer", $$Footer, {})}`;
}, "/Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/src/pages/evenements/[id].astro", void 0);

const $$file = "/Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/src/pages/evenements/[id].astro";
const $$url = "/evenements/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$id,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
