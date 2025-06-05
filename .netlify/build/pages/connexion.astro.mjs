import { f as createComponent, k as renderComponent, r as renderTemplate, h as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_a8KlzRQY.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CPhWR9Cs.mjs';
import { p as pinterest, t as tiktok, i as instagram } from '../chunks/Footer_CdEdL_-f.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Connexion = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "isLoggedIn": false, "user": null }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", `<main class="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-[#46005B] via-[#8B1A61] to-[#A43F5F] text-white"> <div class="w-full max-w-md text-center px-4"> <!-- Inscription --> <h2 class="text-2xl font-bold mb-4">Pas encore inscrit ?</h2> <a href="/inscription" class="inline-block bg-gradient-to-r from-[#FF7A5C] to-[#F43F7E] text-white rounded-full px-8 py-3 font-bold mb-6 shadow-md transition-transform hover:scale-105">
Cr\xE9er toi un compte
</a> <div class="w-full h-px bg-white opacity-25 my-6"></div> <!-- Titre --> <h2 class="text-2xl font-bold mb-6">Connecte-toi \xE0 Fac\u2019Link !</h2> <!-- Formulaire --> <form id="login-form" class="space-y-4 text-black"> <input type="email" name="email" placeholder="Entrez votre Email universitaire" required class="w-full px-4 py-3 rounded-xl bg-white bg-opacity-90 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#FF7A5C]"> <input type="password" name="password" placeholder="Entrez votre Mot de passe" required class="w-full px-4 py-3 rounded-xl bg-white bg-opacity-90 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#FF7A5C]"> <!-- Rappel & mot de passe --> <div class="flex justify-between items-center text-sm text-white/90 pt-1"> <label class="flex items-center"> <input type="checkbox" class="mr-2 accent-white">
Se rappeler de moi
</label> <a href="#" class="underline">*Mot de passe oubli\xE9 ?</a> </div> <!-- Conditions --> <div class="flex items-center pt-2"> <input type="checkbox" id="accept-conditions" required class="mr-2 h-4 w-4 accent-white"> <label for="accept-conditions" class="text-sm text-white">
Accepter les <a href="/conditiondutilisation" class="underline">Conditions d'utilisation</a> |
<a href="/aspectlegaux" class="underline">Politique de confidentialit\xE9</a> </label> </div> <!-- Bouton --> <button type="submit" class="w-full bg-gradient-to-r from-[#FF7A5C] to-[#F43F7E] text-white font-bold py-3 px-8 rounded-full mt-2 shadow-md transition-transform hover:scale-105">
Se connecter
</button> <!-- Message d'erreur --> <p id="message" class="text-sm text-center text-white/90 mt-2"></p> </form> <!-- R\xE9seaux sociaux --> <div class="flex justify-center space-x-6 mt-8"> <a href="#"><img`, ' alt="Instagram" class="w-10 h-10"></a> <a href="#"><img', ' alt="TikTok" class="w-10 h-10"></a> <a href="#"><img', ` alt="Pinterest" class="w-10 h-10"></a> </div> </div> </main>  <script type="module">
    const form = document.querySelector('#login-form');
    const messageEl = document.querySelector('#message');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(form);

      const response = await fetch('/api/connexion', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();
      messageEl.textContent = result.message;

      if (result.success) {
        localStorage.setItem('pb_token', result.token);
        localStorage.setItem('user', JSON.stringify(result.user));
        window.location.href = '/muretudiant';
      }
    });
  <\/script> `])), maybeRenderHead(), addAttribute(instagram.src, "src"), addAttribute(tiktok.src, "src"), addAttribute(pinterest.src, "src")) })}`;
}, "/Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/src/pages/connexion.astro", void 0);

const $$file = "/Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/src/pages/connexion.astro";
const $$url = "/connexion";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Connexion,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
