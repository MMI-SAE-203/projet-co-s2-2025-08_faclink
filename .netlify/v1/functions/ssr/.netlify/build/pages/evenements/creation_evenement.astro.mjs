import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_a8KlzRQY.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_CPhWR9Cs.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$CreationEvenement = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Cr\xE9er un \xE9v\xE9nement - Fac'Link" }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", `<main class="min-h-screen flex flex-col items-center justify-start p-4 bg-gradient-to-b from-[#470050] via-[#8B1A61] to-[#FF7A5C] text-white"> <!-- Haut de page : bouton retour + titre --> <div class="w-full flex items-center mb-6"> <a href="/evenements" class="text-white hover:text-[#FF7A5C] transition-colors"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg> </a> <h1 class="text-2xl font-bold mx-auto text-white">Cr\xE9er un \xE9v\xE9nement</h1> <div class="w-6"></div> </div> <!-- Formulaire --> <form id="event-form" enctype="multipart/form-data" class="space-y-4 text-black w-full max-w-md"> <input type="text" name="nom" placeholder="Nom de l\u2019\xE9v\xE9nement" required class="w-full px-4 py-3 rounded-xl bg-white bg-opacity-90 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#FF7A5C]"> <input type="datetime-local" name="horaire" required class="w-full px-4 py-3 rounded-xl bg-white bg-opacity-90 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#FF7A5C]"> <input type="text" name="lieu" placeholder="Lieu" required class="w-full px-4 py-3 rounded-xl bg-white bg-opacity-90 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#FF7A5C]"> <input type="text" name="organisateur" placeholder="Organisateur" required class="w-full px-4 py-3 rounded-xl bg-white bg-opacity-90 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#FF7A5C]"> <input type="number" name="Participants_max" placeholder="Participants max" required class="w-full px-4 py-3 rounded-xl bg-white bg-opacity-90 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#FF7A5C]"> <input type="text" name="prix" placeholder="Prix" required class="w-full px-4 py-3 rounded-xl bg-white bg-opacity-90 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#FF7A5C]"> <input type="text" name="snippet" placeholder="R\xE9sum\xE9 court (snippet)" required class="w-full px-4 py-3 rounded-xl bg-white bg-opacity-90 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#FF7A5C]"> <input type="text" name="categorie" placeholder="Cat\xE9gorie" required class="w-full px-4 py-3 rounded-xl bg-white bg-opacity-90 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#FF7A5C]"> <select name="inscription" required class="w-full px-4 py-3 rounded-xl bg-white bg-opacity-90 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#FF7A5C]"> <option value="" disabled selected>Inscription</option> <option value="Avec inscription">Avec inscription</option> <option value="Sans inscription">Sans inscription</option> </select> <textarea name="description" placeholder="Description" rows="4" required class="w-full px-4 py-3 rounded-xl bg-white bg-opacity-90 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#FF7A5C]"></textarea> <!-- Image --> <label for="image" class="flex items-center justify-center bg-gradient-to-r from-[#F43F7E] to-[#FF7A5C] text-white font-semibold w-full p-4 rounded-xl cursor-pointer transition-transform hover:scale-105"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7h18M3 12h18M3 17h18"></path> </svg>
Choisir une image
</label> <input id="image" type="file" name="image" accept="image/*" required class="hidden"> <!-- Bouton --> <button type="submit" class="w-full bg-gradient-to-r from-[#FF7A5C] to-[#F43F7E] text-white font-bold py-3 px-8 rounded-full shadow-md transition-transform hover:scale-105">
Cr\xE9er l\u2019\xE9v\xE9nement
</button> </form> <p id="message" class="mt-4 text-white text-sm text-center"></p> </main> <script type="module">
    const form = document.querySelector('#event-form');
    const message = document.querySelector('#message');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      message.textContent = '';

      const formData = new FormData(form);

      try {
        const response = await fetch('/api/ajout-evenement', {
          method: 'POST',
          body: formData
        });

        const result = await response.json();
        if (result.success) {
          message.textContent = '\u2705 \xC9v\xE9nement cr\xE9\xE9 avec succ\xE8s !';
          form.reset();
          setTimeout(() => {
            window.location.href = '/evenements';
          }, 1000);
        } else {
          message.textContent = '\u274C Erreur : ' + result.message;
        }
      } catch (error) {
        console.error(error);
        message.textContent = '\u274C Erreur de connexion au serveur.';
      }
    });
  <\/script> `])), maybeRenderHead()) })}`;
}, "/Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/src/pages/evenements/creation_evenement.astro", void 0);

const $$file = "/Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/src/pages/evenements/creation_evenement.astro";
const $$url = "/evenements/creation_evenement";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CreationEvenement,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
