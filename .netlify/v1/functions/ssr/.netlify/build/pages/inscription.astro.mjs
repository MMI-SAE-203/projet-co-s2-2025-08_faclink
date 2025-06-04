import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_a8KlzRQY.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DKfkcvlr.mjs';
import { i as instagram, t as tiktok, p as pinterest } from '../chunks/Footer_DshUlUnz.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://faclink.netlify.app");
const $$Inscription = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Inscription;
  const errorMessage = Astro2.url.searchParams.get("error");
  const successMessage = Astro2.url.searchParams.get("success") ? "Compte cr\xE9\xE9 avec succ\xE8s !" : null;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Inscription - Fac'Link" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-[#46005B] via-[#8B1A61] to-[#A43F5F] text-white"> <div class="w-full max-w-md text-center px-4"> <!-- Connexion --> <h2 class="text-2xl font-bold mb-4">Déjà un compte ?</h2> <a href="/connexion" class="inline-block bg-gradient-to-r from-[#FF7A5C] to-[#F43F7E] text-white rounded-full px-8 py-3 font-bold mb-6 shadow-md transition-transform hover:scale-105">
Se connecter
</a> <div class="w-full h-px bg-white opacity-25 my-6"></div> <!-- Titre --> <h2 class="texte-white text-2xl font-bold mb-6">Crée ton compte Fac’Link !</h2> <!-- Messages d'erreur ou de succès --> ${errorMessage && renderTemplate`<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert"> <strong class="font-bold">Erreur !</strong> <span class="block sm:inline"> ${errorMessage}</span> </div>`} ${successMessage && renderTemplate`<div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert"> <strong class="font-bold">Succès !</strong> <span class="block sm:inline"> ${successMessage}</span> </div>`} <!-- Formulaire --> <form action="/api/inscription" method="POST" class="space-y-4 text-black"> <input type="text" id="name" name="name" placeholder="Entrez votre Nom" required class="w-full px-4 py-3 rounded-xl bg-white bg-opacity-90 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#FF7A5C]"> <input type="text" id="firstname" name="firstname" placeholder="Entrez votre Prénom" required class="w-full px-4 py-3 rounded-xl bg-white bg-opacity-90 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#FF7A5C]"> <input type="email" id="email" name="email" placeholder="Entrez votre Email universitaire" required class="w-full px-4 py-3 rounded-xl bg-white bg-opacity-90 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#FF7A5C]"> <input type="password" id="password" name="password" placeholder="Entrez votre Mot de passe" required class="w-full px-4 py-3 rounded-xl bg-white bg-opacity-90 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#FF7A5C]"> <!-- Conditions --> <div class="flex items-center pt-2"> <input type="checkbox" id="accept-conditions" name="accept-conditions" required class="mr-2 h-4 w-4 accent-white"> <label for="accept-conditions" class="text-sm text-white">
Accepter les <a href="/conditiondutilisation" class="underline">Conditions d'utilisation</a> | <a href="/aspectlegaux" class="underline">Politique de confidentialité</a> </label> </div> <!-- Bouton inscription --> <button type="submit" class="w-full bg-gradient-to-r from-[#FF7A5C] to-[#F43F7E] text-white font-bold py-3 px-8 rounded-full mt-4 shadow-md transition-transform hover:scale-105">
S’inscrire
</button> </form> <!-- Réseaux sociaux --> <div class="flex justify-center space-x-6 mt-8"> <a href="#" target="_blank" rel="noopener noreferrer"> <img${addAttribute(instagram.src, "src")} alt="Instagram" class="w-10 h-10"> </a> <a href="#" target="_blank" rel="noopener noreferrer"> <img${addAttribute(tiktok.src, "src")} alt="TikTok" class="w-10 h-10"> </a> <a href="#" target="_blank" rel="noopener noreferrer"> <img${addAttribute(pinterest.src, "src")} alt="Pinterest" class="w-10 h-10"> </a> </div> </div> </main> ` })}`;
}, "/Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/src/pages/inscription.astro", void 0);

const $$file = "/Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/src/pages/inscription.astro";
const $$url = "/inscription";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Inscription,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
