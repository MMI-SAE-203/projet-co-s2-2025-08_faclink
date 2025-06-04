import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_a8KlzRQY.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DKfkcvlr.mjs';
import PocketBase from 'pocketbase';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://faclink.netlify.app");
const $$Profil = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Profil;
  const pb = new PocketBase("https://pb-faclink.alice-frelin.fr:443");
  const rawCookies = Astro2.request.headers.get("cookie") || "";
  pb.authStore.loadFromCookie(rawCookies);
  const isLoggedIn = pb.authStore.isValid;
  const user = pb.authStore.model;
  const photo = "/src/assets/manon.webp";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "isLoggedIn": isLoggedIn, "user": user }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-white"> <!-- Header --> <div class="bg-[#470050] text-white px-6 py-4 flex justify-between items-center"> <a href="/parametres" class="text-3xl font-bold">&larr;</a> <div class="w-6"></div> <!-- Pour équilibrer --> </div> <!-- Photo de profil --> <div class="relative bg-[var(--color-violet)] flex flex-col items-center pb-8"> <img${addAttribute(photo, "src")} alt="Image profil" class="w-40 h-40 rounded-full border-4 border-white -mt-20 z-10"> <h2 class="text-xl font-bold text-white mt-2">${user?.firstname} ${user?.name}</h2> <p class="text-white text-sm">Changer l'image</p> </div> <!-- Formulaire --> <form method="POST" action="/api/updateProfil" class="px-6 py-8 space-y-6 max-w-md mx-auto"> <div> <label class="block font-bold text-[#470050] mb-1">Nom</label> <input type="text" name="name"${addAttribute(user?.name, "value")} class="w-full border rounded-md p-3"> </div> <div> <label class="block font-bold text-[#470050] mb-1">Prénom</label> <input type="text" name="firstname"${addAttribute(user?.firstname, "value")} class="w-full border rounded-md p-3"> </div> <div> <label class="block font-bold text-[#470050] mb-1">Mail Universitaire</label> <input type="email" name="email"${addAttribute(user?.email, "value")} class="w-full border rounded-md p-3"> </div> <div> <label class="block font-bold text-[#470050] mb-1">Mot de passe</label> <input type="password" name="password" placeholder="••••••••" class="w-full border rounded-md p-3"> </div> <button type="submit" class="w-full rounded-full bg-gradient-to-r from-orange-400 to-pink-500 text-white font-bold py-3 text-center">
Mettre à jour
</button> </form> </div> ` })}`;
}, "/Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/src/pages/profil.astro", void 0);

const $$file = "/Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/src/pages/profil.astro";
const $$url = "/profil";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Profil,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
