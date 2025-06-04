import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_a8KlzRQY.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DKfkcvlr.mjs';
import PocketBase from 'pocketbase';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://faclink.netlify.app");
const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const pb = new PocketBase("https://pb-faclink.alice-frelin.fr:443");
  const rawCookies = Astro2.request.headers.get("cookie") || "";
  pb.authStore.loadFromCookie(rawCookies);
  const isLoggedIn = pb.authStore.isValid;
  const user = pb.authStore.model;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "isLoggedIn": isLoggedIn, "user": user }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Muretudiant</h1> <p>Bienvenue sur la page Muretudiant !</p> <a href="../evenements/">page evenements</a>` })}`;
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
