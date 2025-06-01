import { f as createComponent, k as renderComponent, r as renderTemplate } from '../chunks/astro/server_Dc7gvlnh.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Djg7MDee.mjs';
export { renderers } from '../renderers.mjs';

const $$Fonctionnalite = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {})}`;
}, "/Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/src/pages/fonctionnalite.astro", void 0);

const $$file = "/Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/src/pages/fonctionnalite.astro";
const $$url = "/fonctionnalite";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Fonctionnalite,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
