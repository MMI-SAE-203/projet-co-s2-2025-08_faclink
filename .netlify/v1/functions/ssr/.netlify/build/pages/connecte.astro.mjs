import { f as createComponent, m as maybeRenderHead, r as renderTemplate } from '../chunks/astro/server_Dc7gvlnh.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<p>bienvenue</p>`;
}, "/Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/src/pages/connecte/index.astro", void 0);

const $$file = "/Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/src/pages/connecte/index.astro";
const $$url = "/connecte";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
