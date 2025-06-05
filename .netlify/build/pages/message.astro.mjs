import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_a8KlzRQY.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BJvyOuGE.mjs';
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
  const messages = await pb.collection("message").getFullList({
    sort: "-created",
    expand: "envoyeur,receveur"
  });
  const conversations = /* @__PURE__ */ new Map();
  for (const msg of messages) {
    const otherUser = msg.expand?.envoyeur?.id === user.id ? msg.expand?.receveur : msg.expand?.envoyeur;
    if (!otherUser) continue;
    if (!conversations.has(otherUser.id)) {
      conversations.set(otherUser.id, {
        user: otherUser,
        lastMessage: msg
      });
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "isLoggedIn": isLoggedIn, "user": user }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="p-4 bg-[#f9f4ff] min-h-screen"> <h1 class="text-3xl font-bold text-[var(--color-violet)] mb-6">Messagerie</h1> ${Array.from(conversations.values()).map(({ user: otherUser, lastMessage }) => renderTemplate`<a${addAttribute(`/message/${otherUser.id}`, "href")} class="flex items-center gap-4 mb-4 p-3 rounded-lg bg-white shadow-md hover:bg-gray-50 transition"> <img${addAttribute(otherUser.avatar ? pb.files.getUrl(otherUser, otherUser.avatar) : "/default-avatar.png", "src")}${addAttribute(otherUser.name, "alt")} class="w-12 h-12 rounded-full object-cover"> <div class="flex flex-col"> <span class="font-bold text-[var(--color-violet)]">${otherUser.name}</span> <span class="text-gray-600 text-sm truncate max-w-[250px]"> ${lastMessage.contenu} </span> </div> </a>`)} </main> ` })}`;
}, "/Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/src/pages/message/index.astro", void 0);

const $$file = "/Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/src/pages/message/index.astro";
const $$url = "/message";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
