import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_Dc7gvlnh.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Djg7MDee.mjs';
import { p as personnes, d as discu, c as content, m as maelie, a as alice, b as mathis } from '../chunks/discu_kmS2IGrn.mjs';
import { t as tape } from '../chunks/tape_CgeWMIOi.mjs';
export { renderers } from '../renderers.mjs';

const Croix = new Proxy({"src":"/_astro/croix.C9FGVNMS.webp","width":152,"height":168,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/src/assets/croix.webp";
							}
							
							return target[name];
						}
					});

const $$Apropos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\xC0 Propos" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-[var(--color-violet)] text-white py-8"> <div class="container mx-auto px-4 text-center"> <h1 class="text-2xl font-bold mb-2" style="font-family: var(--font-Menu);">À Propos</h1> </div> </section> <section class="bg-white py-8"> <div class="container mx-auto px-4 grid gap-6"> <div class="bg-white rounded-md shadow-md p-4"> <h2 class="text-xl font-semibold text-[var(--color-violet)] mb-2" style="font-family: var(--font-Menu);">Votre campus en un clic !</h2> <p class="text-gray-700 text-sm mb-2" style="font-family: var(--font-Menu);">Fac'Link est une plateforme dédiée aux <span class="text-[var(--color-orange)] font-semibold">étudiants</span>, conçue pour simplifier leur quotidien universitaire.</p> <p class="text-gray-700 text-sm" style="font-family: var(--font-Menu);">Plus qu'un simple réseau, c'est un espace interactif où chacun peut <span class="text-[var(--color-rose)] font-semibold">partager</span>, <span class="text-[var(--color-rose)] font-semibold">s'informer</span> et se <span class="text-[var(--color-rose)] font-semibold">connecter</span> avec sa communauté.</p> </div> <div class="bg-white rounded-md shadow-md p-4"> <h2 class="text-xl font-semibold text-[var(--color-violet)] mb-2" style="font-family: var(--font-Menu);">Pourquoi Fac'Link ?</h2> <img${addAttribute(Croix.src, "src")} alt="" class="mb-2"> <p class="text-gray-700 text-sm mb-2" style="font-family: var(--font-Menu);">La vie étudiante est riche en expériences, mais elle peut aussi être remplie de défis :</p> <ul class="list-disc list-inside text-gray-700 text-sm" style="font-family: var(--font-Menu);"> <li>Où trouver les <span class="text-[var(--color-orange)] font-semibold">événements</span> qui me correspondent ?</li> <li>Comment rencontrer des étudiants partageant mes <span class="text-[var(--color-orange)] font-semibold">centres d'intérêt</span> ?</li> <li>Comment accéder aux <span class="text-[var(--color-orange)] font-semibold">bons plans</span> et opportunités réservés aux étudiants ?</li> </ul> <p class="text-gray-700 text-sm" style="font-family: var(--font-Menu);">Fac'Link répond à ces besoins en centralisant toutes ces informations en un seul endroit.</p> </div> <div class="bg-white rounded-md shadow-md p-4"> <h2 class="text-xl font-semibold text-[var(--color-violet)] mb-2" style="font-family: var(--font-Menu);">Nos engagements</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-4"> ${[
    {
      title: "Une plateforme 100% \xE9tudiante",
      description: "Pens\xE9e par des \xE9tudiants, pour des \xE9tudiants. Vos besoins sont au c\u0153ur de notre d\xE9veloppement.",
      image: personnes.src
    },
    {
      title: "Un espace d'\xE9change et de partage",
      description: "Connectez-vous avec vos camarades, partagez vos exp\xE9riences et entraidez-vous au sein de la communaut\xE9.",
      image: discu.src
    },
    {
      title: "Des services pens\xE9s pour vous",
      description: "Des fonctionnalit\xE9s con\xE7ues pour simplifier votre vie \xE9tudiante au quotidien.",
      image: content.src
    }
  ].map((engagement) => renderTemplate`<div${addAttribute(engagement.title, "key")} class="text-center"> <img${addAttribute(engagement.image, "src")}${addAttribute(engagement.title, "alt")} class="w-16 h-16 object-contain mx-auto mb-1"> <h3 class="font-semibold text-[var(--color-rose)] text-sm mb-1" style="font-family: var(--font-Menu);">${engagement.title}</h3> <p class="text-gray-700 text-xs" style="font-family: var(--font-Menu);">${engagement.description}</p> </div>`)} </div> </div> <div class="bg-white rounded-md shadow-md p-4"> <h2 class="text-xl font-semibold text-[var(--color-violet)] mb-2" style="font-family: var(--font-Menu);">Qui sommes nous ?</h2> <p class="text-gray-700 text-sm mb-2" style="font-family: var(--font-Menu);">Fac'Link est une initiative née d'un constat simple : la vie étudiante est une aventure excitante mais parfois semée d'embûches. Trouver les bons événements, rencontrer de nouvelles personnes et accéder aux meilleures opportunités peut vite devenir un défi.</p> <p class="text-gray-700 text-sm" style="font-family: var(--font-Menu);">C'est pourquoi nous avons créé Fac'Link : une plateforme conçue par des étudiants, pour des étudiants.</p> </div> <div class="bg-white rounded-md shadow-md p-4"> <h2 class="text-xl font-semibold text-[var(--color-violet)] mb-2" style="font-family: var(--font-Menu);">Notre mission</h2> <img${addAttribute(Croix.src, "src")} alt="" class="mb-2"> <p class="text-gray-700 text-sm" style="font-family: var(--font-Menu);">Nous voulons rendre la vie étudiante plus fluide, plus interactive et plus enrichissante en offrant un espace unique où chaque étudiant peut :</p> <ul class="list-none text-gray-700 text-sm mt-2" style="font-family: var(--font-Menu);"> <li> <div class="flex items-center mb-1"> <div class="w-6 h-6 mr-2"> <img${addAttribute(personnes.src, "src")} alt="Se connecter" class="object-contain"> </div> <div class="flex-1"> <h3 class="font-semibold text-[var(--color-rose)] text-sm mb-0" style="font-family: var(--font-Menu);">Se connecter</h3> <p class="text-xs" style="font-family: var(--font-Menu);">Avec d'autres étudiants partageant les mêmes centres d'intérêt.</p> </div> </div> </li> <li> <div class="flex items-center mb-1"> <div class="w-6 h-6 mr-2"> <img${addAttribute(content.src, "src")} alt="Découvrir" class="object-contain"> </div> <div class="flex-1"> <h3 class="font-semibold text-[var(--color-rose)] text-sm mb-0" style="font-family: var(--font-Menu);">Découvrir</h3> <p class="text-xs" style="font-family: var(--font-Menu);">Des événements et bons plans sur son campus.</p> </div> </div> </li> <li> <div class="flex items-center mb-1"> <div class="w-6 h-6 mr-2"> <img${addAttribute(discu.src, "src")} alt="Échanger" class="object-contain"> </div> <div class="flex-1"> <h3 class="font-semibold text-[var(--color-rose)] text-sm mb-0" style="font-family: var(--font-Menu);">Échanger</h3> <p class="text-xs" style="font-family: var(--font-Menu);">Des conseils, des ressources et des expériences.</p> </div> </div> </li> <li> <div class="flex items-center"> <div class="w-6 h-6 mr-2"> <img${addAttribute(tape.src, "src")} alt="S'engager" class="object-contain"> </div> <div class="flex-1"> <h3 class="font-semibold text-[var(--color-rose)] text-sm mb-0" style="font-family: var(--font-Menu);">S'engager</h3> <p class="text-xs" style="font-family: var(--font-Menu);">Dans la vie associative et universitaire de manière simple et efficace.</p> </div> </div> </li> </ul> </div> <div class="bg-white rounded-md shadow-md p-4"> <h2 class="text-xl font-semibold text-[var(--color-violet)] mb-2" style="font-family: var(--font-Menu);">Notre équipe</h2> <p class="text-gray-700 text-sm italic mb-2" style="font-family: var(--font-Menu);">Fac'Link est le fruit du travail d'une équipe d'étudiants passionnés du BUT MMI de Montbéliard :</p> <div class="grid grid-cols-1 gap-4"> ${[
    {
      name: "Addario Ma\xEBlie",
      role: "BUT MMI 1 - Design & Communication",
      image: maelie.src
    },
    {
      name: "Frelin Alice",
      role: "BUT MMI 1 - Communication & Design",
      image: alice.src
    },
    {
      name: "Juillard Mathis",
      role: "BUT MMI 1 - Communication & D\xE9veloppement",
      image: mathis.src
    }
  ].map((member) => renderTemplate`<div${addAttribute(member.name, "key")} class="bg-gradient-to-r from-[var(--color-orange)] to-[var(--color-rose)] rounded-md p-2 flex items-center text-white"> <img${addAttribute(member.image, "src")}${addAttribute(member.name, "alt")} class="w-16 h-16 rounded-full object-cover mr-2"> <div> <h3 class="font-semibold text-sm" style="font-family: var(--font-Menu);">${member.name}</h3> <p class="text-xs" style="font-family: var(--font-Menu);">${member.role}</p> </div> </div>`)} </div> </div> <div class="text-center mt-8"> <h2 class="text-xl font-bold text-[var(--color-violet)] mb-2" style="font-family: var(--font-Menu);">Suivez nous !</h2> </div> </div> </section> ` })}`;
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
