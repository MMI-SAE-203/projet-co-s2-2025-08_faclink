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