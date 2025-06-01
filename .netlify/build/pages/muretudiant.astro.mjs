import { f as createComponent, r as renderTemplate } from '../chunks/astro/server_Dc7gvlnh.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
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
