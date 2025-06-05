import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, h as addAttribute, m as maybeRenderHead } from '../../chunks/astro/server_a8KlzRQY.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BJvyOuGE.mjs';
import PocketBase from 'pocketbase';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
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
  const receveurId = Astro2.params.idDestinataire;
  const messages = await pb.collection("message").getFullList({
    sort: "created",
    filter: `(envoyeur.id="${user.id}" && receveur.id="${receveurId}") || (envoyeur.id="${receveurId}" && receveur.id="${user.id}")`,
    expand: "envoyeur"
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "isLoggedIn": isLoggedIn, "user": user }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", '<main class="min-h-screen pb-20 px-4 pt-4 bg-white"> ', ` <!-- Formulaire d'envoi --> <form id="send-message"`, ` class="fixed bottom-0 left-0 right-0 flex p-2 bg-white border-t z-50"> <input name="contenu" placeholder="\xC9cris ton message\u2026" class="flex-grow px-4 py-2 rounded-full border mr-2"> <button type="submit" class="bg-[var(--color-violet)] text-white px-4 py-2 rounded-full">Envoyer</button> </form> </main> <script type="module">
const form = document.querySelector('#send-message');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const contenu = form.elements['contenu'].value;
  const receveur = form.dataset.receveurId;
  if (!contenu.trim()) return;

  const res = await fetch('/api/message', {
    method: 'POST',
    body: JSON.stringify({ contenu, receveur }),
    headers: { 'Content-Type': 'application/json' }
  });

  const data = await res.json();
  console.log('\u2705 Message envoy\xE9 :', data);

  window.location.reload();
});
  <\/script> `])), maybeRenderHead(), messages.map((msg) => renderTemplate`<div${addAttribute(`my-2 flex ${msg.expand.envoyeur.id === user.id ? "justify-end" : "justify-start"}`, "class")}> <p${addAttribute(`max-w-[70%] px-4 py-2 rounded-xl text-sm ${msg.expand.envoyeur.id === user.id ? "bg-gradient-to-r from-[#FF7A5C] to-[#7B1A7B] text-white" : "bg-gray-200 text-black"}`, "class")}> ${msg.contenu} </p> </div>`), addAttribute(receveurId, "data-receveur-id")) })}`;
}, "/Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/src/pages/message/[idDestinataire]/index.astro", void 0);

const $$file = "/Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/src/pages/message/[idDestinataire]/index.astro";
const $$url = "/message/[idDestinataire]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
