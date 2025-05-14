import PocketBase from 'pocketbase' ;
const pb = new PocketBase("https://pb-faclink.alice-frelin.fr:443") ;

export async function registerEtudiant(data) {
    try {
        const newUser = await pb.collection('comptes_etudiant').create({
            email: data.get('email'),
            password: data.get('mot_de_passe'),
            passwordConfirm: data.get('mot_de_passe'),
            name: data.get('name'),
            campus: data.get('campus'),
            centre_interet: data.get('centre_interet'),
        });
        return {
            success: true,
            message: 'Compte créé avec succès. Vous pouvez maintenant vous connecter.',
            user: newUser
        };
    } catch (error) {
        console.log('Erreur lors de l’inscription :', error);
        return {
            success: false,
            message: 'Erreur lors de l’inscription. Veuillez vérifier les champs et réessayer.'
        };
    }
}