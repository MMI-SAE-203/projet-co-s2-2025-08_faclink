import PocketBase from 'pocketbase';

export async function POST({ request }) {
    try {
        const formData = await request.formData();

        const data = {
            nom: formData.get('nom'),
            description: formData.get('description'),
            horaire: formData.get('horaire'),
            lieu: formData.get('lieu'),
            organisateur: formData.get('organisateur'),
            Participants_max: parseInt(formData.get('Participants_max')),
            prix: formData.get('prix'),
            snippet: formData.get('snippet'),
            categorie: formData.get('categorie'),
            inscription: formData.get('inscription'),
            Image: formData.get('image'), // le fichier image envoyé
        };

        console.log('[API] Données envoyées à PocketBase :', data);

        const pb = new PocketBase('https://pb-faclink.alice-frelin.fr:443');
        const record = await pb.collection('evenement').create(data);

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
