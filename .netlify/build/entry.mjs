import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_BV8NmBsZ.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/ajout-evenement.astro.mjs');
const _page2 = () => import('./pages/api/connexion.astro.mjs');
const _page3 = () => import('./pages/api/deconexion.astro.mjs');
const _page4 = () => import('./pages/api/inscription.astro.mjs');
const _page5 = () => import('./pages/api/message.astro.mjs');
const _page6 = () => import('./pages/apropos.astro.mjs');
const _page7 = () => import('./pages/aspectlegaux.astro.mjs');
const _page8 = () => import('./pages/assistance.astro.mjs');
const _page9 = () => import('./pages/compte.astro.mjs');
const _page10 = () => import('./pages/conditiondutilisation.astro.mjs');
const _page11 = () => import('./pages/connexion.astro.mjs');
const _page12 = () => import('./pages/contact.astro.mjs');
const _page13 = () => import('./pages/evenements/creation_evenement.astro.mjs');
const _page14 = () => import('./pages/evenements/_id_.astro.mjs');
const _page15 = () => import('./pages/evenements.astro.mjs');
const _page16 = () => import('./pages/fonctionnalite.astro.mjs');
const _page17 = () => import('./pages/inscription.astro.mjs');
const _page18 = () => import('./pages/message/_iddestinataire_.astro.mjs');
const _page19 = () => import('./pages/message.astro.mjs');
const _page20 = () => import('./pages/muretudiant/_id_.astro.mjs');
const _page21 = () => import('./pages/muretudiant.astro.mjs');
const _page22 = () => import('./pages/parametres.astro.mjs');
const _page23 = () => import('./pages/preference.astro.mjs');
const _page24 = () => import('./pages/profil.astro.mjs');
const _page25 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/ajout-evenement.js", _page1],
    ["src/pages/api/connexion.js", _page2],
    ["src/pages/api/deconexion.js", _page3],
    ["src/pages/api/inscription.js", _page4],
    ["src/pages/api/message.js", _page5],
    ["src/pages/apropos.astro", _page6],
    ["src/pages/aspectlegaux.astro", _page7],
    ["src/pages/assistance.astro", _page8],
    ["src/pages/compte/index.astro", _page9],
    ["src/pages/conditiondutilisation.astro", _page10],
    ["src/pages/connexion.astro", _page11],
    ["src/pages/contact.astro", _page12],
    ["src/pages/evenements/creation_evenement.astro", _page13],
    ["src/pages/evenements/[id].astro", _page14],
    ["src/pages/evenements/index.astro", _page15],
    ["src/pages/fonctionnalite.astro", _page16],
    ["src/pages/inscription.astro", _page17],
    ["src/pages/message/[idDestinataire]/index.astro", _page18],
    ["src/pages/message/index.astro", _page19],
    ["src/pages/muretudiant/[id].astro", _page20],
    ["src/pages/muretudiant/index.astro", _page21],
    ["src/pages/parametres.astro", _page22],
    ["src/pages/preference.astro", _page23],
    ["src/pages/profil.astro", _page24],
    ["src/pages/index.astro", _page25]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "a6c1bd1a-e9b2-4c3e-85de-9477208d6404"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
