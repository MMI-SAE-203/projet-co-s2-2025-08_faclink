import { e as createAstro, f as createComponent, h as addAttribute, l as renderHead, k as renderComponent, n as renderSlot, r as renderTemplate } from './astro/server_a8KlzRQY.mjs';
import 'kleur/colors';
/* empty css                           */
import { a as $$Header, $ as $$Footer } from './Footer_DshUlUnz.mjs';

const $$Astro = createAstro("https://faclink.netlify.app");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { isLoggedIn, user } = Astro2.props;
  return renderTemplate`<html lang="fr"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Fac'Link</title><link rel="preconnect" href="https://fonts.googleapis.com">${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, { "isLoggedIn": isLoggedIn, "user": user })} ${renderSlot($$result, $$slots["default"])} ${!isLoggedIn && renderTemplate`${renderComponent($$result, "Footer", $$Footer, {})}`} </body></html>`;
}, "/Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
