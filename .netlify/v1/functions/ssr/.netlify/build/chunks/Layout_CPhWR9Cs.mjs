import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate, l as renderHead, k as renderComponent, n as renderSlot } from './astro/server_a8KlzRQY.mjs';
import 'kleur/colors';
/* empty css                           */
import { c as createSvgComponent, $ as $$Header, a as $$Footer } from './Footer_CdEdL_-f.mjs';
import 'clsx';

const home = createSvgComponent({"meta":{"src":"/_astro/home.CJ18JcGK.svg","width":30,"height":31,"format":"svg"},"attributes":{"width":"30","height":"31","fill":"none"},"children":"<path d=\"M29 24.35v-9.71c0-.935 0-1.402-.114-1.838-.101-.385-.267-.75-.49-1.08-.253-.372-.604-.68-1.308-1.296l-8.4-7.35c-1.307-1.144-1.96-1.715-2.695-1.932a3.504 3.504 0 00-1.986 0c-.735.217-1.387.788-2.692 1.93l-8.403 7.352c-.703.615-1.054.924-1.307 1.296a3.5 3.5 0 00-.491 1.08C1 13.238 1 13.705 1 14.64v9.71c0 1.63 0 2.445.266 3.088a3.5 3.5 0 001.894 1.895c.643.267 1.459.267 3.09.267 1.63 0 2.447 0 3.09-.267a3.5 3.5 0 001.893-1.894c.267-.644.267-1.46.267-3.09V22.6a3.5 3.5 0 117 0v1.75c0 1.63 0 2.446.266 3.09a3.5 3.5 0 001.894 1.894c.643.267 1.459.267 3.09.267 1.63 0 2.447 0 3.09-.267a3.5 3.5 0 001.893-1.895C29 26.795 29 25.98 29 24.35z\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />"});

const agenda = createSvgComponent({"meta":{"src":"/_astro/agenda.BoRB-t5i.svg","width":30,"height":34,"format":"svg"},"attributes":{"width":"30","height":"34","fill":"none"},"children":"<path d=\"M1 11.5h28m-28 0v15.4c0 1.96 0 2.94.381 3.689a3.5 3.5 0 001.53 1.53c.748.381 1.727.381 3.684.381h16.81c1.957 0 2.935 0 3.683-.381a3.505 3.505 0 001.53-1.53C29 29.84 29 28.863 29 26.906V11.5m-28 0v-1.4c0-1.96 0-2.94.381-3.69a3.498 3.498 0 011.53-1.529C3.659 4.5 4.64 4.5 6.6 4.5H8m21 7v-1.405c0-1.957 0-2.936-.381-3.684a3.502 3.502 0 00-1.531-1.53C26.339 4.5 25.36 4.5 23.4 4.5H22M22 1v3.5m0 0H8M8 1v3.5\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />"});

const amis = createSvgComponent({"meta":{"src":"/_astro/amis.dmoBdrgD.svg","width":34,"height":29,"format":"svg"},"attributes":{"width":"34","height":"29","fill":"none"},"children":"<path d=\"M32.5 27.25c0-3.048-2.922-5.64-7-6.602M22 27.25c0-3.866-4.701-7-10.5-7S1 23.384 1 27.25M22 15a7 7 0 100-14M11.5 15a7 7 0 110-14 7 7 0 010 14z\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />"});

const message = createSvgComponent({"meta":{"src":"/_astro/message.B4fNCgS_.svg","width":34,"height":30,"format":"svg"},"attributes":{"width":"34","height":"30","fill":"none"},"children":"<path d=\"M12.092 21.983C17.616 21.677 22 17.1 22 11.5 22 5.701 17.299 1 11.5 1S1 5.701 1 11.5c0 2.066.597 3.993 1.627 5.617l-.742 2.227v.003c-.285.852-.427 1.279-.326 1.563a.877.877 0 00.531.53c.283.101.707-.04 1.554-.322l.012-.004 2.227-.742a10.45 10.45 0 006.209 1.611zm0 0s0 0 0 0zm0 0C13.528 26.07 17.422 29 22 29c2.067 0 3.993-.597 5.617-1.628l2.227.742.004.001c.852.284 1.28.427 1.564.326a.873.873 0 00.529-.531c.1-.284-.04-.711-.326-1.566l-.742-2.227.249-.411a10.452 10.452 0 001.377-5.206C32.5 12.701 27.8 8 22 8l-.393.007-.198.01\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />"});

const profil = createSvgComponent({"meta":{"src":"/_astro/profil.DojwaHoP.svg","width":34,"height":34,"format":"svg"},"attributes":{"width":"34","height":"34","fill":"none"},"children":"<path d=\"M25.88 29.581a12.22 12.22 0 00-9.13-4.081 12.22 12.22 0 00-9.13 4.081m9.13 2.919C8.052 32.5 1 25.448 1 16.75S8.052 1 16.75 1 32.5 8.052 32.5 16.75 25.448 32.5 16.75 32.5zm0-12.25a5.25 5.25 0 110-10.5 5.25 5.25 0 010 10.5z\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />"});

const $$Astro$1 = createAstro("https://faclink.netlify.app");
const $$Navmobile = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Navmobile;
  const { active } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav class="fixed bottom-0 left-0 w-full bg-[var(--color-violet)] flex justify-around items-center h-16 z-50 border-t border-white border-opacity-10"> <a href="/muretudiant" class="flex flex-col items-center justify-center text-white"> <img${addAttribute(home.src, "src")} alt="Accueil" class="w-6 h-6"> </a> <a href="/evenements" class="flex flex-col items-center justify-center text-white"> <img${addAttribute(agenda.src, "src")} alt="Agenda" class="w-6 h-6"> </a> <a href="/amis" class="flex flex-col items-center justify-center text-white"> <img${addAttribute(amis.src, "src")} alt="Amis" class="w-6 h-6"> </a> <a href="/message" class="flex flex-col items-center justify-center text-white"> <img${addAttribute(message.src, "src")} alt="Messages" class="w-6 h-6"> </a> <a href="/compte" class="flex flex-col items-center justify-center text-white"> <img${addAttribute(profil.src, "src")} alt="Profil" class="w-6 h-6"> </a></nav>`;
}, "/Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/src/components/Navmobile.astro", void 0);

const $$Astro = createAstro("https://faclink.netlify.app");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { isLoggedIn, user } = Astro2.props;
  return renderTemplate`<html lang="fr"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Fac'Link</title><link rel="preconnect" href="https://fonts.googleapis.com">${renderHead()}</head> <body class="relative"> ${renderComponent($$result, "Header", $$Header, { "isLoggedIn": isLoggedIn, "user": user })} ${renderSlot($$result, $$slots["default"])} ${!isLoggedIn && renderTemplate`${renderComponent($$result, "Footer", $$Footer, {})}`} ${isLoggedIn && renderTemplate`<div class="block md:hidden">  ${renderComponent($$result, "MobileNav", $$Navmobile, {})} </div>`} </body></html>`;
}, "/Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
