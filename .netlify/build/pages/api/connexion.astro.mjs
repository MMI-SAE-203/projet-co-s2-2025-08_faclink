import PocketBase from 'pocketbase';
export { renderers } from '../../renderers.mjs';

async function POST({ request }) {
    try {
        const formData = await request.formData();
        const email = formData.get('email');
        const password = formData.get('password');

        const pb = new PocketBase('https://pb-faclink.alice-frelin.fr:443');

        const authData = await pb.collection('comptes_etudiant').authWithPassword(email, password);

        return new Response(JSON.stringify({
            success: true,
            message: 'Connexion réussie',
            token: authData.token,
            user: authData.record
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error('[API Connexion ERREUR]:', error);

        return new Response(JSON.stringify({
            success: false,
            message: 'Email ou mot de passe incorrect',
            details: error?.response || error.message
        }), {
            status: 401,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
