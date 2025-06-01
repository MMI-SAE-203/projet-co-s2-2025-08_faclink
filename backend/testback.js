import { addAccount } from './backend.mjs';

(async () => {
    try {
        const newUser = {
            "name": "new",
            "firstname": "User",
            "email": "testabc@example.com",
            "password": "securepassword",
        };
        const result = await addAccount(newUser);
        console.log("Résultat:", result);
    } catch (e) {
        console.error(e);
    }
})();