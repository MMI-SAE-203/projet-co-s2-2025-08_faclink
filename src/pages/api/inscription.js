export const prerender = false;

export async function POST({ request }) {
    try {
        const formData = await request.formData();
        
        // Créer un nouvel objet FormData pour PocketBase
        const pbFormData = new FormData();
        
        // Ajouter tous les champs un par un
        pbFormData.append('nom', formData.get('nom'));
        pbFormData.append('description', formData.get('description'));
        pbFormData.append('horaire', formData.get('horaire'));
        pbFormData.append('lieu', formData.get('lieu'));
        pbFormData.append('organisateur', formData.get('organisateur'));
        pbFormData.append('Participants_max', formData.get('Participants_max'));
        pbFormData.append('prix', formData.get('prix'));
        pbFormData.append('snippet', formData.get('snippet'));
        pbFormData.append('categorie', formData.get('categorie'));
        pbFormData.append('inscription', formData.get('inscription'));
        
        // Ajouter le fichier image
        const imageFile = formData.get('image');
        if (imageFile && imageFile.size > 0) {
            pbFormData.append('Image', imageFile); // Attention à la casse !
        }

        console.log('[API] Données préparées pour PocketBase');

        const { default: PocketBase } = await import('pocketbase');
        const pb = new PocketBase("https://pb-faclink.alice-frelin.fr:443");

        const record = await pb.collection('evenement').create(pbFormData);

        console.log('[API] Événement créé:', record.id);

        return new Response(JSON.stringify({
            success: true,
            message: 'Événement créé avec succès',
            id: record.id
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error('[ERREUR PocketBase]', error);
        return new Response(JSON.stringify({
            success: false,
            message: 'Erreur lors de la création',
            details: error?.response || error.message
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}