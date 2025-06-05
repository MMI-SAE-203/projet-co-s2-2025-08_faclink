import { f as createComponent, r as renderTemplate, k as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_a8KlzRQY.mjs';
import 'kleur/colors';
import { $ as $$Footer, a as $$Header } from '../../chunks/Footer_DshUlUnz.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$CreationEvenement = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", " ", `<h1>Cr\xE9er un \xE9v\xE9nement</h1> <form id="event-form" enctype="multipart/form-data"> <label>Nom :
<input type="text" name="nom" required> </label><br> <label>Description :
<textarea name="description" required></textarea> </label><br> <label>Horaire :
<input type="datetime-local" name="horaire" required> </label><br> <label>Lieu :
<input type="text" name="lieu" required> </label><br> <label>Organisateur :
<input type="text" name="organisateur" required> </label><br> <label>Participants max :
<input type="number" name="Participants_max" required> </label><br> <label>Prix :
<input type="text" name="prix" required> </label><br> <label>Snippet :
<input type="text" name="snippet" required> </label><br> <label>Cat\xE9gorie :
<input type="text" name="categorie" required> </label><br> <label>Inscription :
<select name="inscription"> <option>Avec inscription</option> <option>Sans inscription</option> </select> </label><br> <label>Image :
<input type="file" name="image" accept="image/*" required> </label><br> <button type="submit">Cr\xE9er l'\xE9v\xE9nement</button> </form> <p id="message"></p> `, ` <script type="module">
    const form = document.querySelector('#event-form');
    const message = document.querySelector('#message');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        message.textContent = '';

        const formData = new FormData(form);

        try {
            const response = await fetch('/api/ajout-evenement', {
                method: 'POST',
                body: formData
            });

            const result = await response.json();
            console.log('[R\xE9sultat API]', JSON.stringify(result, null, 2));

            if (result.success) {
                message.textContent = '\xC9v\xE9nement cr\xE9\xE9 avec succ\xE8s.';
                form.reset();
                setTimeout(() => {
                    window.location.href = '/connecte';
                }, 1000);
            } else {
                message.textContent = 'Erreur : ' + result.message;
            }
        } catch (error) {
            console.error('Erreur de requ\xEAte :', error);
            message.textContent = 'Erreur de connexion au serveur.';
        }
    });
<\/script>`])), renderComponent($$result, "Header", $$Header, {}), maybeRenderHead(), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/src/pages/evenements/creation_evenement.astro", void 0);

const $$file = "/Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/src/pages/evenements/creation_evenement.astro";
const $$url = "/evenements/creation_evenement";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$CreationEvenement,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
