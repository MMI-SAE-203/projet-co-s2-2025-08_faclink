import PocketBase from 'pocketbase';

export async function post({ request }) {
  const pb = new PocketBase('https://pb-faclink.alice-frelin.fr:443');
  const cookies = request.headers.get("cookie") || "";
  pb.authStore.loadFromCookie(cookies);

  if (!pb.authStore.isValid) return new Response('Unauthorized', { status: 401 });

  const { contenu, receveur } = await request.json();

  console.log('🔻 Message reçu :', { contenu, receveur, envoyeur: pb.authStore.model.id });

  const message = await pb.collection('message').create({
    contenu,
    receveur,
    envoyeur: pb.authStore.model.id
  });

  return new Response(JSON.stringify({ success: true, message }), {
    headers: { 'Content-Type': 'application/json' }
  });
}
