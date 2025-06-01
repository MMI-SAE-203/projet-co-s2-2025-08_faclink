import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_BxRPwzA7.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/apropos.astro.mjs');
const _page2 = () => import('./pages/aspectlegaux.astro.mjs');
const _page3 = () => import('./pages/assistance.astro.mjs');
const _page4 = () => import('./pages/contact.astro.mjs');
const _page5 = () => import('./pages/fonctionnalite.astro.mjs');
const _page6 = () => import('./pages/inscription.astro.mjs');
const _page7 = () => import('./pages/muretudiant/_id_.astro.mjs');
const _page8 = () => import('./pages/muretudiant.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/apropos.astro", _page1],
    ["src/pages/aspectlegaux.astro", _page2],
    ["src/pages/assistance.astro", _page3],
    ["src/pages/contact.astro", _page4],
    ["src/pages/fonctionnalite.astro", _page5],
    ["src/pages/inscription.astro", _page6],
    ["src/pages/muretudiant/[id].astro", _page7],
    ["src/pages/muretudiant/index.astro", _page8],
    ["src/pages/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "1e02e0ae-2359-4f2a-b59e-9c3aa9ebc7a3"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
