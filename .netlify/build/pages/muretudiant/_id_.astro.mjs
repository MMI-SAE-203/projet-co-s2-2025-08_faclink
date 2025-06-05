import { f as createComponent, r as renderTemplate } from '../../chunks/astro/server_a8KlzRQY.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const $$id = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/src/pages/muretudiant/[id].astro", void 0);

const $$file = "/Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/src/pages/muretudiant/[id].astro";
const $$url = "/muretudiant/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$id,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
