// src/pages/api/inscription.js
export const prerender = false;

export async function POST({ request }) {
    console.log('🔥🔥🔥 API inscription appelée - DEBUT');
    
    try {
        console.log('📋 Request details:', {
            method: request.method,
            url: request.url,
            headers: Object.fromEntries(request.headers.entries())
        });
        
        // Lire le body comme texte brut
        const body = await request.text();
        console.log('📄 Body reçu (longueur:', body.length, '):', body);
        
        if (!body) {
            console.log('❌ Body vide !');
            return new Response('Body vide', { status: 400 });
        }
        
        // Parser les données URL-encoded
        const params = new URLSearchParams(body);
        console.log('🔍 Params entries:', [...params.entries()]);
        
        const userData = {
            name: params.get('name'),
            firstname: params.get('firstname'),
            email: params.get('email'),
            password: params.get('password')
        };
        
        console.log('👤 Données parsées:', userData);
        console.log('🔍 Vérifications:');
        console.log('  - name:', userData.name, '(type:', typeof userData.name, ')');
        console.log('  - firstname:', userData.firstname, '(type:', typeof userData.firstname, ')');
        console.log('  - email:', userData.email, '(type:', typeof userData.email, ')');
        console.log('  - password:', userData.password, '(type:', typeof userData.password, ')');
        
        // Vérifier si on a toutes les données
        if (!userData.name) {
            console.log('❌ Nom manquant, arrêt');
            return new Response('Nom manquant', { status: 400 });
        }
        if (!userData.email) {
            console.log('❌ Email manquant, arrêt');
            return new Response('Email manquant', { status: 400 });
        }
        if (!userData.password) {
            console.log('❌ Password manquant, arrêt');
            return new Response('Password manquant', { status: 400 });
        }
        
        console.log('✅ Toutes les données sont présentes, suite...');
        
        // Import PocketBase directement ici
        console.log('📦 Import PocketBase...');
        const { default: PocketBase } = await import('pocketbase');
        const pb = new PocketBase("https://pb-faclink.alice-frelin.fr:443");
        
        console.log('📡 PocketBase initialisé avec URL:', pb.baseUrl);
        
        // Créer le compte directement
        const accountData = {
            name: userData.name,
            firstname: userData.firstname,
            email: userData.email,
            password: userData.password,
            passwordConfirm: userData.password
        };
        
        console.log('📤 Envoi vers PocketBase collection comptes_etudiant avec:', accountData);
        
        const record = await pb.collection('comptes_etudiant').create(accountData);
        
        console.log('✅✅✅ Compte créé avec succès:', record);
        
        return new Response(`
            <html>
                <head>
                    <title>Inscription réussie</title>
                </head>
                <body>
                    <h1>Compte créé avec succès !</h1>
                    <p>Redirection vers la page de connexion...</p>
                    <script>
                        setTimeout(() => {
                            window.location.href = '/connecte';
                        }, 2000);
                    </script>
                </body>
            </html>
        `, { 
            status: 200,
            headers: { 'Content-Type': 'text/html' }
        });
        
    } catch (error) {
        console.error('❌❌❌ ERREUR GLOBALE:', error);
        console.error('📋 Message:', error.message);
        console.error('📋 Stack:', error.stack);
        if (error.response) {
            console.error('📋 Response PocketBase:', error.response);
        }
        
        return new Response('ERROR: ' + error.message, { status: 500 });
    }
}