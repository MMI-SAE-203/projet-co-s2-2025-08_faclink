import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_a8KlzRQY.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BJvyOuGE.mjs';
import { c as croix } from '../chunks/croix_DR-XPDlE.mjs';
import { p as personnes, d as discu, c as content, m as maelie, a as alice, b as mathis } from '../chunks/discu_kmS2IGrn.mjs';
import { t as tape } from '../chunks/tape_CgeWMIOi.mjs';
import PocketBase from 'pocketbase';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://faclink.netlify.app");
const $$Apropos = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Apropos;
  const pb = new PocketBase("https://pb-faclink.alice-frelin.fr:443");
  const rawCookies = Astro2.request.headers.get("cookie") || "";
  pb.authStore.loadFromCookie(rawCookies);
  const isLoggedIn = pb.authStore.isValid && pb.authStore.model !== null;
  const user = pb.authStore.model;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "isLoggedIn": isLoggedIn, "user": user }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-gradient-to-b from-[var(--color-violet)] to-orange-400 text-white min-h-screen py-16"> <div class="container mx-auto px-4"> <h1 class="text-center text-3xl md:text-4xl font-bold text-[var(--color-rose)] mb-12" style="font-family: var(--font-Menu);">
À propos de Fac'Link
</h1> <div class="grid gap-6"> <!-- Introduction --> <div class="bg-white rounded-md shadow-md p-4 text-black"> <h2 class="text-xl font-semibold text-[var(--color-violet)] mb-2" style="font-family: var(--font-Menu);">Votre campus en un clic !</h2> <p class="text-gray-700 text-sm mb-2" style="font-family: var(--font-Menu);">Fac'Link est une plateforme dédiée aux <span class="text-[var(--color-orange)] font-semibold">étudiants</span>, conçue pour simplifier leur quotidien universitaire.</p> <p class="text-gray-700 text-sm" style="font-family: var(--font-Menu);">Plus qu'un simple réseau, c'est un espace interactif où chacun peut <span class="text-[var(--color-rose)] font-semibold">partager</span>, <span class="text-[var(--color-rose)] font-semibold">s'informer</span> et se <span class="text-[var(--color-rose)] font-semibold">connecter</span> avec sa communauté.</p> </div> <!-- Pourquoi Fac'Link --> <div class="bg-white rounded-md shadow-md p-4 text-black"> <h2 class="text-xl font-semibold text-[var(--color-violet)] mb-2" style="font-family: var(--font-Menu);">Pourquoi Fac'Link ?</h2> <img${addAttribute(croix.src, "src")} alt="" class="mb-2"> <p class="text-gray-700 text-sm mb-2" style="font-family: var(--font-Menu);">La vie étudiante est riche en expériences, mais elle peut aussi être remplie de défis :</p> <ul class="list-disc list-inside text-gray-700 text-sm" style="font-family: var(--font-Menu);"> <li>Où trouver les <span class="text-[var(--color-orange)] font-semibold">événements</span> qui me correspondent ?</li> <li>Comment rencontrer des étudiants partageant mes <span class="text-[var(--color-orange)] font-semibold">centres d'intérêt</span> ?</li> <li>Comment accéder aux <span class="text-[var(--color-orange)] font-semibold">bons plans</span> et opportunités réservés aux étudiants ?</li> </ul> <p class="text-gray-700 text-sm" style="font-family: var(--font-Menu);">Fac'Link répond à ces besoins en centralisant toutes ces informations en un seul endroit.</p> </div> <!-- Engagements --> <div class="bg-white rounded-md shadow-md p-4 text-black"> <h2 class="text-xl font-semibold text-[var(--color-violet)] mb-4" style="font-family: var(--font-Menu);">Nos engagements</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-4"> ${[
    { title: "Une plateforme 100% \xE9tudiante", description: "Pens\xE9e par des \xE9tudiants, pour des \xE9tudiants. Vos besoins sont au c\u0153ur de notre d\xE9veloppement.", image: personnes.src },
    { title: "Un espace d'\xE9change et de partage", description: "Connectez-vous avec vos camarades, partagez vos exp\xE9riences et entraidez-vous au sein de la communaut\xE9.", image: discu.src },
    { title: "Des services pens\xE9s pour vous", description: "Des fonctionnalit\xE9s con\xE7ues pour simplifier votre vie \xE9tudiante au quotidien.", image: content.src }
  ].map((engagement) => renderTemplate`<div${addAttribute(engagement.title, "key")} class="text-center"> <img${addAttribute(engagement.image, "src")}${addAttribute(engagement.title, "alt")} class="w-16 h-16 object-contain mx-auto mb-1"> <h3 class="font-semibold text-[var(--color-rose)] text-sm mb-1" style="font-family: var(--font-Menu);">${engagement.title}</h3> <p class="text-gray-700 text-xs" style="font-family: var(--font-Menu);">${engagement.description}</p> </div>`)} </div> </div> <!-- Qui sommes-nous --> <div class="bg-white rounded-md shadow-md p-4 text-black"> <h2 class="text-xl font-semibold text-[var(--color-violet)] mb-2" style="font-family: var(--font-Menu);">Qui sommes-nous ?</h2> <p class="text-gray-700 text-sm mb-2" style="font-family: var(--font-Menu);">Fac'Link est une initiative née d'un constat simple : la vie étudiante est une aventure excitante mais parfois semée d'embûches.</p> <p class="text-gray-700 text-sm" style="font-family: var(--font-Menu);">C'est pourquoi nous avons créé Fac'Link : une plateforme conçue par des étudiants, pour des étudiants.</p> </div> <!-- Notre mission --> <div class="bg-white rounded-md shadow-md p-4 text-black"> <h2 class="text-xl font-semibold text-[var(--color-violet)] mb-2" style="font-family: var(--font-Menu);">Notre mission</h2> <img${addAttribute(croix.src, "src")} alt="" class="mb-2"> <p class="text-gray-700 text-sm mb-4" style="font-family: var(--font-Menu);">Nous voulons rendre la vie étudiante plus fluide, plus interactive et plus enrichissante en offrant un espace unique où chaque étudiant peut :</p> <ul class="list-none text-gray-700 text-sm space-y-2" style="font-family: var(--font-Menu);"> ${[
    { title: "Se connecter", desc: "Avec d'autres \xE9tudiants partageant les m\xEAmes centres d'int\xE9r\xEAt.", icon: personnes.src },
    { title: "D\xE9couvrir", desc: "Des \xE9v\xE9nements et bons plans sur son campus.", icon: content.src },
    { title: "\xC9changer", desc: "Des conseils, des ressources et des exp\xE9riences.", icon: discu.src },
    { title: "S'engager", desc: "Dans la vie associative et universitaire de mani\xE8re simple et efficace.", icon: tape.src }
  ].map((item) => renderTemplate`<li class="flex items-start"> <div class="w-6 h-6 mr-2 mt-1"> <img${addAttribute(item.icon, "src")}${addAttribute(item.title, "alt")} class="object-contain"> </div> <div> <h3 class="font-semibold text-[var(--color-rose)] text-sm" style="font-family: var(--font-Menu);">${item.title}</h3> <p class="text-xs">${item.desc}</p> </div> </li>`)} </ul> </div> <!-- Notre équipe --> <div class="bg-white rounded-md shadow-md p-4 text-black"> <h2 class="text-xl font-semibold text-[var(--color-violet)] mb-2" style="font-family: var(--font-Menu);">Notre équipe</h2> <p class="text-gray-700 text-sm italic mb-4" style="font-family: var(--font-Menu);">Fac'Link est le fruit du travail d'une équipe d'étudiants passionnés du BUT MMI de Montbéliard :</p> <div class="grid grid-cols-1 gap-4"> ${[
    { name: "Addario Ma\xEBlie", role: "BUT MMI 1 - Design & Communication", image: maelie.src },
    { name: "Frelin Alice", role: "BUT MMI 1 - Communication & Design", image: alice.src },
    { name: "Juillard Mathis", role: "BUT MMI 1 - Communication & D\xE9veloppement", image: mathis.src }
  ].map((member) => renderTemplate`<div${addAttribute(member.name, "key")} class="bg-gradient-to-r from-[var(--color-orange)] to-[var(--color-rose)] rounded-md p-2 flex items-center text-white"> <img${addAttribute(member.image, "src")}${addAttribute(member.name, "alt")} class="w-16 h-16 rounded-full object-cover mr-2"> <div> <h3 class="font-semibold text-sm" style="font-family: var(--font-Menu);">${member.name}</h3> <p class="text-xs">${member.role}</p> </div> </div>`)} </div> </div> <!-- Suivi réseaux --> <div class="text-center mt-8"> <h2 class="text-xl font-bold text-[var(--color-violet)] mb-2" style="font-family: var(--font-Menu);">Suivez-nous !</h2> </div> </div> </div> </section> ` })}`;
}, "/Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/src/pages/apropos.astro", void 0);

const $$file = "/Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/src/pages/apropos.astro";
const $$url = "/apropos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Apropos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
