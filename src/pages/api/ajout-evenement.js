export const prerender = false;

export async function POST({ request }) {
    try {
        const formData = await request.formData();
        
        // Récupération des données du formulaire
        const eventData = {
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
            Image: formData.get('image') // Le fichier image
        };

        // Vérification des données obligatoires
        const requiredFields = ['nom', 'description', 'horaire', 'lieu', 'organisateur', 'Participants_max', 'prix', 'snippet', 'categorie', 'inscription'];
        for (const field of requiredFields) {
            if (!eventData[field] && eventData[field] !== 0) {
                console.error(`Champ manquant: ${field}`);
                return new Response(JSON.stringify({
                    success: false,
                    message: `Le champ ${field} est obligatoire`
                }), {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' }
                });
            }
        }

        console.log('[API] Données avant envoi à PocketBase :', eventData);

        const { default: PocketBase } = await import('pocketbase');
        const pb = new PocketBase("https://pb-faclink.alice-frelin.fr:443");

        // Création de l'événement
        const record = await pb.collection('evenement').create(eventData);

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
        
        // Gestion d'erreur plus détaillée
        let errorMessage = 'Erreur lors de la création';
        let errorDetails = null;

        if (error.response) {
            errorDetails = error.response;
            if (error.response.data) {
                errorMessage = error.response.message || errorMessage;
            }
        }

        return new Response(JSON.stringify({
            success: false,
            message: errorMessage,
            details: errorDetails || error.message
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}