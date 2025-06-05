import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_a8KlzRQY.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CPhWR9Cs.mjs';
import { m as manon } from '../chunks/manon_BPlPY2K0.mjs';
import { c as createSvgComponent } from '../chunks/Footer_CdEdL_-f.mjs';
export { renderers } from '../renderers.mjs';

const ecole = createSvgComponent({"meta":{"src":"/_astro/ecole.CXnq2hIt.svg","width":23,"height":20,"format":"svg"},"attributes":{"width":"23","height":"20","fill":"none"},"children":"<path d=\"M20.313 9.628h-3.25V3.7a.69.69 0 00-.099-.35.772.772 0 00-.267-.265L11.822.122a.87.87 0 00-.894 0L6.053 3.086a.772.772 0 00-.267.265.69.69 0 00-.098.35v5.927h-3.25c-.647 0-1.267.234-1.724.65A2.128 2.128 0 000 11.85v7.41a.71.71 0 00.238.523.854.854 0 00.575.217h21.125a.854.854 0 00.574-.217.71.71 0 00.238-.524V11.85c0-.59-.257-1.155-.714-1.571a2.562 2.562 0 00-1.724-.651zM1.625 11.85a.71.71 0 01.238-.524.854.854 0 01.575-.217h3.25v7.41H1.625V11.85zm5.688-1.482V4.071l4.062-2.445 4.063 2.445v14.447h-1.626V11.85a.71.71 0 00-.237-.524.854.854 0 00-.575-.217H9.75a.854.854 0 00-.575.217.71.71 0 00-.238.524v6.668H7.313v-8.15zm3.25 8.15v-5.927h1.624v5.927h-1.624zm10.562 0h-4.063V11.11h3.25c.216 0 .423.079.575.217a.71.71 0 01.238.524v6.668z\" fill=\"#54004D\" /><path d=\"M9.75 5.923H13a.854.854 0 00.575-.217.71.71 0 00.238-.524.71.71 0 00-.239-.524.854.854 0 00-.574-.217H9.75a.854.854 0 00-.575.217.71.71 0 00-.238.524.71.71 0 00.238.524.854.854 0 00.575.217zM9.75 8.887H13a.854.854 0 00.575-.217.71.71 0 00.238-.524.71.71 0 00-.239-.524.854.854 0 00-.574-.217H9.75a.854.854 0 00-.575.217.71.71 0 00-.238.524.71.71 0 00.238.524.854.854 0 00.575.217z\" fill=\"#54004D\" />"});

const ou = createSvgComponent({"meta":{"src":"/_astro/ou.nehb2Lhj.svg","width":18,"height":21,"format":"svg"},"attributes":{"width":"18","height":"21","fill":"none"},"children":"<path d=\"M9 10.5c.619 0 1.149-.206 1.59-.617.44-.412.66-.906.66-1.483 0-.578-.22-1.072-.662-1.484A2.242 2.242 0 009 6.3c-.619 0-1.149.206-1.59.617-.44.412-.66.906-.66 1.483 0 .577.22 1.072.662 1.484.44.411.97.617 1.588.616zM9 21c-3.019-2.398-5.273-4.624-6.764-6.68C.746 12.264.001 10.36 0 8.61c0-2.625.905-4.716 2.715-6.274C4.525.78 6.62 0 9 0c2.381 0 4.477.779 6.287 2.336C17.096 3.894 18 5.985 18 8.61c0 1.75-.745 3.653-2.236 5.71C14.273 16.376 12.018 18.603 9 21z\" fill=\"#54004D\" />"});

const plaisir = createSvgComponent({"meta":{"src":"/_astro/plaisir.KGHT59yi.svg","width":26,"height":26,"format":"svg"},"attributes":{"width":"26","height":"26","fill":"none"},"children":"<path d=\"M3.25 18.417V16.25c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75v2.167m-16.25 0V16.25a6.5 6.5 0 1113 0v2.167m-9.75 0V16.25a3.25 3.25 0 016.5 0v2.167\" stroke=\"#54004D\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />"});

const basket = new Proxy({"src":"/_astro/basket.BL2NLxTo.webp","width":202,"height":270,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/src/assets/basket.webp";
							}
							
							return target[name];
						}
					});

const revision = new Proxy({"src":"/_astro/revision.CDjyB35_.webp","width":261,"height":348,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/src/assets/revision.webp";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "isLoggedIn": true, "user": {} }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-white pb-24"> <!-- Couverture avec dégradé + avatar --> <section class="relative h-48 bg-gradient-to-b from-[#470050] to-[#A43F5F]"> <div class="absolute inset-0 flex flex-col items-center justify-end pb-4 text-white"> <img${addAttribute(manon.src, "src")} alt="Photo de profil" class="w-32 h-32 rounded-full border-4 border-white object-cover -mb-16 z-10"> </div> </section> <!-- Infos principales --> <section class="mt-20 text-center px-4 text-[var(--color-violet)]"> <h1 class="text-xl font-bold">Manon Bernard</h1> <p class="text-sm text-gray-800">Étudiante en sciences sociales</p> <p class="text-sm text-gray-600 mb-4">17 amis</p> <div class="flex justify-center gap-4"> <a href="/profil" class="bg-[var(--color-violet)] text-white font-bold px-4 py-2 rounded-full text-sm">Editer le profil</a> <a href="/amis" class="bg-[var(--color-violet)] text-white font-bold px-4 py-2 rounded-full text-sm">Trouver des amis</a> </div> </section> <!-- Infos complémentaires --> <section class="px-4 mt-6 text-sm space-y-2"> <p class="flex items-center gap-2 text-gray-800"><img${addAttribute(ou.src, "src")} class="h-4"> Besançon</p> <p class="flex items-center gap-2 text-gray-800"><img${addAttribute(ecole.src, "src")} class="h-4"> LEA - Université de Besançon</p> <p class="flex items-center gap-2 text-gray-800"><img${addAttribute(plaisir.src, "src")} class="h-4"> Lecture, sociologie, sport</p> </section> <!-- Événements --> <section class="px-4 mt-8"> <h2 class="text-[var(--color-violet)] font-bold mb-2 text-lg">J’y participe</h2> <div class="flex gap-3 overflow-x-auto"> ${[1, 2, 3, 4].map(() => renderTemplate`<div class="min-w-[100px] text-center"> <img${addAttribute(basket.src, "src")} alt="event" class="w-24 h-24 rounded-xl border-2 border-[var(--color-violet)] object-cover"> <p class="text-xs mt-1 text-gray-800">Session de basket</p> </div>`)} </div> </section> <!-- Mur --> <section class="px-4 mt-8"> <div class="flex justify-between items-center mb-2"> <h2 class="text-[var(--color-violet)] font-bold text-lg">Mur</h2> <button class="text-[var(--color-violet)] text-xl font-bold">+</button> </div> <div class="grid grid-cols-2 gap-3"> <div class="bg-[var(--color-rose)] p-3 rounded-xl text-white text-sm">
Quelqu’un vient au cours de basket demain ?
</div> <img${addAttribute(revision.src, "src")} alt="notes" class="rounded-xl object-cover"> </div> </section> </main> ` })}`;
}, "/Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/src/pages/compte/index.astro", void 0);

const $$file = "/Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/src/pages/compte/index.astro";
const $$url = "/compte";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
