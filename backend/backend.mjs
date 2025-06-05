import PocketBase from 'pocketbase';

const pb = new PocketBase("https://pb-faclink.alice-frelin.fr:443");

export async function addAccount(account) {
    try {
        // Ajouter automatiquement passwordConfirm avec la même valeur que password
        const accountData = {
            ...account,
            passwordConfirm: account.password
        };
        
        const record = await pb.collection('comptes_etudiant').create(accountData);
        return {
            success: true,
            message: 'Compte créé avec succès',
            data: record
        };
    } catch (error) {
        console.log('Une erreur est survenue lors de l\'inscription');
        console.log('Détails de l\'erreur:', error.response || error);
        
        return {
            success: false,
            message: error.response?.message || 'Une erreur est survenue lors de l\'inscription',
            details: error.response?.data || null
        };
    }
}

export async function getEvenements() {
    try {
        let data = await pb.collection('evenement').getFullList({
            sort: '-created',
        });
        data = data.map((evenement) => {
            evenement.img = pb.files.getURL(evenement, evenement.Image);
            return evenement;
        });
        return data;
    } catch (error) {
        console.log('Une erreur est survenue en lisant la liste des maisons', error);
        return null;
    }
}

export async function getPublications() {
    try {
        const publications = await pb.collection('publication').getFullList({
            sort: '-created',
            expand: 'posteurEtudiant'
        });

        return publications.map(pub => {
            const imageUrl = pub.image
                ? pb.files.getUrl(pub, pub.image)
                : null;

            return {
                id: pub.id,
                message: pub.message,
                legende: pub.legende,
                created: pub.created,
                imageUrl,
                auteur: pub.expand?.posteurEtudiant?.name || 'Anonyme',
                avatar: pub.expand?.posteurEtudiant?.avatar
                    ? pb.files.getUrl(pub.expand.posteurEtudiant, pub.expand.posteurEtudiant.avatar)
                    : '/default-avatar.png'
            };
        });
    } catch (error) {
        console.error('Erreur lors de la récupération des publications :', error);
        return [];
    }
}
