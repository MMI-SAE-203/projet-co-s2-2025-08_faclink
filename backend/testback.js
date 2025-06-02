import { addAccount, getEvenements } from './backend.mjs';

// (async () => {
//     try {
//         const newUser = {
//             "name": "new",
//             "firstname": "User",
//             "email": "testabc@example.com",
//             "password": "securepassword",
//         };
//         const result = await addAccount(newUser);
//         console.log("Résultat:", result);
//     } catch (e) {
//         console.error(e);
//     }
// })();

//try {
    //const records = await getEvenements() ;
    //console.table(records) ;
    //} catch (e) {
    //console.error(e) ;
    //}

try {
    const data = await getEvenements();
    console.log('Résultat :', data);
  } catch (err) {
    console.error('Erreur pendant le test :', err);
  }