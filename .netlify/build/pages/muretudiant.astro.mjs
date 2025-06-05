import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_a8KlzRQY.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CPhWR9Cs.mjs';
import { a as getPublications } from '../chunks/backend_BO5okWei.mjs';
import PocketBase from 'pocketbase';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://faclink.netlify.app");
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const pb = new PocketBase("https://pb-faclink.alice-frelin.fr:443");
  const rawCookies = Astro2.request.headers.get("cookie") || "";
  pb.authStore.loadFromCookie(rawCookies);
  const isLoggedIn = pb.authStore.isValid;
  const user = pb.authStore.model;
  const publications = await getPublications();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "isLoggedIn": isLoggedIn, "user": user }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-white min-h-screen px-4 pb-20"> <h1 class="text-2xl font-bold text-[var(--color-violet)] my-4">Mur des étudiants</h1> ${publications.length === 0 ? renderTemplate`<p class="text-gray-500">Aucune publication pour le moment.</p>` : publications.map((pub) => renderTemplate`<article class="bg-white rounded-xl shadow-md border p-4 mb-4"> <div class="flex items-center gap-3 mb-2"> <img${addAttribute(pub.avatar, "src")} alt="avatar" class="w-10 h-10 rounded-full"> <div> <p class="text-[var(--color-violet)] font-semibold">${pub.auteur}</p> <p class="text-xs text-gray-500">${new Date(pub.created).toLocaleString("fr-FR")}</p> </div> </div> ${pub.message && renderTemplate`<p class="text-sm mb-2">${pub.message}</p>`} ${pub.imageUrl && renderTemplate`<img${addAttribute(pub.imageUrl, "src")} alt="image" class="rounded-lg mb-2 object-cover max-h-60 w-full">`} ${pub.legende && renderTemplate`<p class="text-xs text-gray-500 italic">« ${pub.legende} »</p>`} </article>`)} </main> ` })}`;
}, "/Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/src/pages/muretudiant/index.astro", void 0);

const $$file = "/Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/src/pages/muretudiant/index.astro";
const $$url = "/muretudiant";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
