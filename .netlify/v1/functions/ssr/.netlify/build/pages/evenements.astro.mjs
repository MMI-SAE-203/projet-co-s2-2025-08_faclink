import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_a8KlzRQY.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CPhWR9Cs.mjs';
import { g as getEvenements } from '../chunks/backend_BO5okWei.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const evenements = await getEvenements();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "isLoggedIn": true, "user": null }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-white min-h-screen px-4 py-8"> <div class="max-w-5xl mx-auto"> <h1 class="text-3xl font-bold text-[var(--color-violet)] mb-6">Agenda</h1> <a href="/evenements/creation_evenement" class="inline-block mb-6 bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold px-6 py-2 rounded-full shadow hover:scale-105 transition">
+ Créer un événement
</a> ${evenements?.length > 0 ? renderTemplate`<div class="space-y-6"> ${evenements.map((event) => renderTemplate`<div class="bg-[var(--color-violet)] rounded-2xl text-white overflow-hidden shadow-md flex flex-col md:flex-row"> ${event.img && renderTemplate`<img${addAttribute(event.img, "src")}${addAttribute(`Image de ${event.Nom}`, "alt")} class="w-full md:w-1/3 object-cover h-64 md:h-auto">`} <div class="p-4 flex-1"> <h2 class="text-2xl font-semibold mb-2">${event.Nom}</h2> <p class="text-sm font-light mb-1"><span class="font-bold">Catégorie :</span> ${event.categorie}</p> <p class="text-sm mb-1"><span class="font-bold">Description :</span> ${event.Description || "Non pr\xE9cis\xE9"}</p> <p class="text-sm mb-1"><span class="font-bold">Horaire :</span> ${event.Horaire ? new Date(event.Horaire).toLocaleString("fr-FR") : "Non pr\xE9cis\xE9"}</p> <p class="text-sm mb-1"><span class="font-bold">Lieu :</span> ${event.Lieu || "Non pr\xE9cis\xE9"}</p> <p class="text-sm mb-1"><span class="font-bold">Organisateur :</span> ${event.Organisateur || "Non pr\xE9cis\xE9"}</p> <p class="text-sm mb-1"><span class="font-bold">Participants max :</span> ${event.Participants_max || "Non pr\xE9cis\xE9"}</p> <p class="text-sm mb-1"><span class="font-bold">Inscription :</span> ${event.Inscription || "Non pr\xE9cis\xE9"}</p> <p class="text-sm mb-1"><span class="font-bold">Prix :</span> ${event.Prix || "Gratuit"}</p> <p class="text-sm mt-2 italic">${event.Snippet}</p> <a href="#" class="mt-4 inline-block bg-white text-[var(--color-violet)] font-bold px-6 py-2 rounded-full hover:bg-gray-100 transition">
Voir plus
</a> </div> </div>`)} </div>` : renderTemplate`<p class="text-center text-gray-600 text-lg">Aucun événement trouvé.</p>`} </div> </main> ` })}`;
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
