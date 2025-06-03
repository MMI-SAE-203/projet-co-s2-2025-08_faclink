import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_Dc7gvlnh.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BQGi2GMQ.mjs';
import { t as tape } from '../chunks/tape_CgeWMIOi.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contactez-Nous" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-[var(--color-violet)] text-white py-16 md:py-24 lg:py-32"> <div class="container mx-auto px-4 text-center"> <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-8" style="font-family: var(--font-Menu);">Contactez-Nous</h1> <div class="max-w-lg mx-auto bg-white text-[var(--color-violet)] rounded-xl shadow-md p-8"> <div class="flex justify-center mb-6"> <img${addAttribute(tape.src, "src")} alt="Contactez-Nous" class="w-32 h-auto"> </div> <h2 class="text-xl font-semibold mb-4" style="font-family: var(--font-Menu);">Envoyez nous un message</h2> <form class="flex flex-col gap-4"> <label for="nom" class="block text-sm font-medium mb-1">Nom/Prénom</label> <input type="text" id="nom" name="nom" class="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-[var(--color-orange)]" required> <label for="email" class="block text-sm font-medium mb-1">Email</label> <input type="email" id="email" name="email" class="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-[var(--color-orange)]" required> <label for="message" class="block text-sm font-medium mb-1">Message</label> <textarea id="message" name="message" rows="4" class="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-[var(--color-orange)] min-h-[100px]" required></textarea> <button type="submit" class="bg-gradient-to-r from-[var(--color-orange)] to-[var(--color-rose)] hover:from-pink-500 hover:to-orange-500 text-white rounded-full px-8 py-3 font-bold cursor-pointer transition-colors">Envoyer mon message</button> </form> </div> </div> </section> ` })}`;
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
