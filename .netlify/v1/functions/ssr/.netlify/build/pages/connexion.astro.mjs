import { f as createComponent, r as renderTemplate, k as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_a8KlzRQY.mjs';
import 'kleur/colors';
import { $ as $$Footer, a as $$Header } from '../chunks/Footer_DshUlUnz.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Connexion = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", " ", '<h1 class="text-lg text-center mt-4">Connexion</h1> <form id="login-form" class="max-w-md mx-auto mt-4 p-4 bg-gray-100 rounded"> <input type="email" name="email" placeholder="Adresse mail" required class="w-full mt-2 p-2 border border-gray-300 rounded-md"> <input type="password" name="password" placeholder="Mot de passe" required class="w-full mt-2 p-2 border border-gray-300 rounded-md"> <button type="submit" class="w-full mt-4 p-2 bg-green-500 text-white rounded-md hover:bg-green-600">Se connecter</button> </form> <p id="message" class="text-center text-sm text-red-500 mt-2"></p> ', ` <script type="module">
    const form = document.querySelector('#login-form');
    const messageEl = document.querySelector('#message');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);

        const response = await fetch('/api/connexion', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();
        messageEl.textContent = result.message;

        if (result.success) {
            // Facultatif : stocker le token en localStorage
            localStorage.setItem('pb_token', result.token);
            localStorage.setItem('user', JSON.stringify(result.user));

            // Redirection
            window.location.href = '/muretudiant';
        }
    });
<\/script>`])), renderComponent($$result, "Header", $$Header, {}), maybeRenderHead(), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/src/pages/connexion.astro", void 0);

const $$file = "/Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/src/pages/connexion.astro";
const $$url = "/connexion";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Connexion,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
