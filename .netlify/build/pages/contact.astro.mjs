import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_a8KlzRQY.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CPhWR9Cs.mjs';
import PocketBase from 'pocketbase';
import { t as tape } from '../chunks/tape_CgeWMIOi.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://faclink.netlify.app");
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  const pb = new PocketBase("https://pb-faclink.alice-frelin.fr:443");
  const rawCookies = Astro2.request.headers.get("cookie") || "";
  pb.authStore.loadFromCookie(rawCookies);
  const isLoggedIn = pb.authStore.isValid && pb.authStore.model !== null;
  const user = pb.authStore.model;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "isLoggedIn": isLoggedIn, "user": user }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-gradient-to-b from-[var(--color-violet)] to-orange-400 text-white min-h-screen py-16"> <div class="container mx-auto px-4 max-w-2xl"> <h1 class="text-center text-3xl font-bold text-[var(--color-rose)] mb-10" style="font-family: var(--font-Menu);">
Contactez-Nous
</h1> <div class="bg-white text-[var(--color-violet)] rounded-xl shadow-md p-8"> <div class="flex justify-center mb-6"> <img${addAttribute(tape.src, "src")} alt="Contactez-Nous" class="w-32 h-auto"> </div> <h2 class="text-xl font-semibold text-center mb-6" style="font-family: var(--font-Menu);">
Envoyez-nous un message
</h2> <form class="flex flex-col gap-4"> <div> <label for="nom" class="block text-sm font-medium mb-1">Nom/Prénom</label> <input type="text" id="nom" name="nom" class="w-full px-4 py-2 rounded-full border border-[var(--color-rose)] focus:outline-none focus:ring-2 focus:ring-[var(--color-orange)]" required> </div> <div> <label for="email" class="block text-sm font-medium mb-1">Email</label> <input type="email" id="email" name="email" class="w-full px-4 py-2 rounded-full border border-[var(--color-rose)] focus:outline-none focus:ring-2 focus:ring-[var(--color-orange)]" required> </div> <div> <label for="message" class="block text-sm font-medium mb-1">Message</label> <textarea id="message" name="message" rows="4" class="w-full px-4 py-2 rounded-2xl border border-[var(--color-rose)] focus:outline-none focus:ring-2 focus:ring-[var(--color-orange)] min-h-[100px]" required></textarea> </div> <button type="submit" class="bg-gradient-to-r from-[var(--color-orange)] to-[var(--color-rose)] hover:from-pink-500 hover:to-orange-500 text-white rounded-full px-8 py-3 font-bold cursor-pointer transition-colors mt-4">
Envoyer mon message
</button> </form> </div> </div> </section> ` })}`;
}, "/Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/src/pages/contact.astro", void 0);

const $$file = "/Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
