import PocketBase from 'pocketbase';
export { renderers } from '../../renderers.mjs';

async function GET({ cookies, redirect }) {
  const pb = new PocketBase("https://pb-faclink.alice-frelin.fr:443");

  // Supprimer la session côté PocketBase
  pb.authStore.clear();

  // Supprimer le cookie côté navigateur
  cookies.delete('pb_auth', {
    path: '/',
    httpOnly: true,
    secure: true,
    sameSite: 'Lax'
  });

  // Redirection propre
  return redirect('/?logout=true');
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
