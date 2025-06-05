import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, h as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_a8KlzRQY.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CPhWR9Cs.mjs';
import PocketBase from 'pocketbase';
import { p as pinterest, t as tiktok, i as instagram } from '../chunks/Footer_CdEdL_-f.mjs';
import { c as croix } from '../chunks/croix_DR-XPDlE.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://faclink.netlify.app");
const $$Parametres = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Parametres;
  const pb = new PocketBase("https://pb-faclink.alice-frelin.fr:443");
  const rawCookies = Astro2.request.headers.get("cookie") || "";
  pb.authStore.loadFromCookie(rawCookies);
  const isLoggedIn = pb.authStore.isValid;
  const user = pb.authStore.model;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "isLoggedIn": isLoggedIn, "user": user }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="relative bg-gradient-to-b from-[var(--color-violet)] to-orange-400 min-h-screen overflow-hidden"> <!-- Croix d\xE9coratives --> <img', ' alt="D\xE9coration" class="absolute top-[100px] left-[20px] w-8 h-8"> <img', ' alt="D\xE9coration" class="absolute top-[110px] right-[20px] w-14 h-14"> <img', ' alt="D\xE9coration" class="absolute top-[270px] left-[40px] w-10 h-10"> <img', ' alt="D\xE9coration" class="absolute top-[350px] right-[30px] w-10 h-10"> <img', ' alt="D\xE9coration" class="absolute bottom-[180px] left-[20px] w-14 h-14"> <img', ' alt="D\xE9coration" class="absolute bottom-[160px] right-[30px] w-10 h-10"> <!-- Retour --> <div class="flex items-center justify-between mb-8 px-4 pt-4 z-10 relative"> <a href="/muretudiant" aria-label="Retour"> <span class="text-3xl text-white font-bold">&larr;</span> </a> <div class="w-8"></div> </div> <!-- Titre --> <h1 class="text-4xl text-center font-extrabold bg-gradient-to-r from-orange-400 to-pink-400 text-transparent bg-clip-text mb-10 z-10 relative">\nParam\xE8tres\n</h1> <!-- Boutons --> <div class="flex flex-col items-center space-y-6 z-10 relative"> <a href="profil" class="bg-[#72005A] hover:bg-[#90007a] px-6 py-3 rounded-2xl text-white font-semibold text-lg w-full max-w-sm text-center transition">\nEditer le profil\n</a> <a href="/preference" class="bg-[#72005A] hover:bg-[#90007a] px-6 py-3 rounded-2xl text-white font-semibold text-lg w-full max-w-sm text-center transition">\nMes pr\xE9f\xE9rences\n</a> <button id="openModal" class="bg-[#72005A] hover:bg-red-700 px-6 py-3 rounded-2xl text-white font-semibold text-lg w-full max-w-sm text-center transition">\nSupprimer mon compte\n</button> </div> <!-- Footer --> <div class="z-10 relative text-[#490548]"> <div class="mt-16 bg-white rounded-3xl p-6 text-center w-full max-w-md mx-auto shadow-lg border-4 border-[#490548]"> <h2 class="text-lg font-bold mb-2">Contactez - Nous :</h2> <p class="text-sm">Nos r\xE9seaux : faclink_off</p> <p class="text-sm">Email : faclink.contact@gmail.com</p> <p class="text-sm">T\xE9l\xE9phone : +33 1 28 48 68 88</p> <p class="text-sm mb-4">Adresse : 4 Pl. Lucien Tharradin, 25200 Montb\xE9liard</p> <div class="flex justify-center gap-6 pt-2"> <img', ' alt="Instagram" class="h-8 w-8"> <img', ' alt="TikTok" class="h-8 w-8"> <img', ' alt="Pinterest" class="h-8 w-8"> </div> </div> </div> <!-- Modal de confirmation --> <div id="modal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden"> <div class="bg-white text-[#490548] rounded-2xl p-6 w-11/12 max-w-md text-center shadow-xl z-50"> <h2 class="text-xl font-bold mb-4">\xCAtes-vous s\xFBr ?</h2> <p class="mb-6">Cette action est irr\xE9versible. Votre compte sera d\xE9finitivement supprim\xE9.</p> <!-- BOUTONS AFFICH\xC9S VISIBLES ICI --> <div class="flex flex-col sm:flex-row justify-center gap-4"> <button type="button" id="cancelBtn" class="px-6 py-3 bg-orange-400 text-white rounded-full hover:bg-orange-500 font-semibold transition w-full sm:w-auto">\nAnnuler\n</button> <form method="POST" action="/api/supprimer-compte" class="w-full sm:w-auto"> <button type="submit" class="px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 font-semibold transition w-full">\nOui, supprimer\n</button> </form> </div> </div> </div> <!-- Script --> <script>\n  if (typeof window !== "undefined") {\n    window.addEventListener("DOMContentLoaded", () => {\n      const modal = document.getElementById("modal");\n      const openBtn = document.getElementById("openModal");\n      const cancelBtn = document.getElementById("cancelBtn");\n\n      if (modal && openBtn && cancelBtn) {\n        openBtn.addEventListener("click", () => modal.classList.remove("hidden"));\n        cancelBtn.addEventListener("click", () => modal.classList.add("hidden"));\n      }\n    });\n  }\n<\/script> </div>'])), maybeRenderHead(), addAttribute(croix.src, "src"), addAttribute(croix.src, "src"), addAttribute(croix.src, "src"), addAttribute(croix.src, "src"), addAttribute(croix.src, "src"), addAttribute(croix.src, "src"), addAttribute(instagram.src, "src"), addAttribute(tiktok.src, "src"), addAttribute(pinterest.src, "src")) })}`;
}, "/Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/src/pages/parametres.astro", void 0);

const $$file = "/Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/src/pages/parametres.astro";
const $$url = "/parametres";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Parametres,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
