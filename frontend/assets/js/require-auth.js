// Ee script user login status check chesi, login avvani users ni automatic ga login page ki redirect chesthundi

import { onAuthStateChanged } from './auth.js';

// User current session active ga undho ledho verify chesthunnam
onAuthStateChanged((user) => {
    if (!user) {
        // Active session lekapothe, user location ni patti correct login URL path ki pampesthundhi
        const isPagesPath = window.location.pathname.includes('/pages/');
        window.location.href = isPagesPath ? '../../auth/login.html' : 'auth/login.html';
    }
});
