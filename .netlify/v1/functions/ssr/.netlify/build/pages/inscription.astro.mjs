import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BegMskTl.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CRt2x6mg.mjs';
/* empty css                                   */
/* empty css                                       */
export { renderers } from '../renderers.mjs';

const $$Inscription = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Inscription - FacLink", "data-astro-cid-h6znpxjw": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="inscription-container" data-astro-cid-h6znpxjw> <div class="form-wrapper" data-astro-cid-h6znpxjw> <h1 data-astro-cid-h6znpxjw>Inscription</h1> <form class="inscription-form" method="POST" data-astro-cid-h6znpxjw> <div class="form-group" data-astro-cid-h6znpxjw> <label for="name" data-astro-cid-h6znpxjw>Nom complet</label> <input type="text" id="name" name="name" required data-astro-cid-h6znpxjw> </div> <div class="form-group" data-astro-cid-h6znpxjw> <label for="email" data-astro-cid-h6znpxjw>Email</label> <input type="email" id="email" name="email" required data-astro-cid-h6znpxjw> </div> <div class="form-group" data-astro-cid-h6znpxjw> <label for="password" data-astro-cid-h6znpxjw>Mot de passe</label> <input type="password" id="password" name="password" required data-astro-cid-h6znpxjw> </div> <div class="form-group" data-astro-cid-h6znpxjw> <label for="confirmPassword" data-astro-cid-h6znpxjw>Confirmer le mot de passe</label> <input type="password" id="confirmPassword" name="confirmPassword" required data-astro-cid-h6znpxjw> </div> <button type="submit" class="btn-primary" data-astro-cid-h6znpxjw>S'inscrire</button> </form> <div class="login-link" data-astro-cid-h6znpxjw> <p data-astro-cid-h6znpxjw>Vous avez déjà un compte? <a href="/connexion" data-astro-cid-h6znpxjw>Connectez-vous</a></p> </div> </div> </section> ` })} `;
}, "/Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/src/pages/inscription.astro", void 0);

const $$file = "/Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/src/pages/inscription.astro";
const $$url = "/inscription";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Inscription,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
