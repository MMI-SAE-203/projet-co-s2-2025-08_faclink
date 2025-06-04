import PocketBase from 'pocketbase';

export async function GET({ cookies, redirect }) {
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
