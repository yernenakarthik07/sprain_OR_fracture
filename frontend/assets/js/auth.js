// Ee code User sign up, Login, Sign out mariyu Firestore database user profiles ni handle chesthundi

import { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged as firebaseOnAuthStateChanged, doc, setDoc, getDoc } from './firebase-config.js';

let firebaseReady = new Promise((resolve) => {
    if (auth && db) {
        resolve();
    }
});

// Firebase App ready ayyindho ledho verify chesthunnam
export async function waitForFirebaseInit() {
    try {
        await firebaseReady;
        return true;
    } catch (error) {
        console.error('[Auth] Firebase ready kaledhu:', error);
        return false;
    }
}

// Kothha user profile ni sign up chesi, email mariyu username mapping ni Firestore lo store chesthunnam
export async function signUpUser(username, email, password) {
    try {
        // Firebase Auth account create chesthunnam
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        const userData = {
            username: username,
            email: email,
            createdAt: new Date().toISOString(),
            lastLogin: new Date().toISOString()
        };
        
        // User profile details document ni 'users' collection lo save chesthunnam
        await setDoc(doc(db, 'users', user.uid), userData);

        // Username tho log in avvadaaniki 'usernames' collection lo map chesthunnam
        await setDoc(doc(db, 'usernames', username.toLowerCase()), {
            uid: user.uid,
            email: email
        });

        return { success: true, user: user };
    } catch (error) {
        console.error('[Auth] Sign up error:', error);
        return { success: false, error: error.message };
    }
}

// User credentials (Username leka Email) mariyu password tho Login handle chesthunnam
export async function signInUser(usernameOrEmail, password) {
    try {
        let email = usernameOrEmail;

        // User input Username aithe (no @), Firestore lo corresponding email vetukutham
        if (!usernameOrEmail.includes('@')) {
            const usernameDoc = await getDoc(doc(db, 'usernames', usernameOrEmail.toLowerCase()));
            if (!usernameDoc.exists()) {
                throw new Error('Username kanipinchaledhu. Meeru sign up avandi.');
            }
            email = usernameDoc.data().email;
        }

        // Email mariyu Password tho Firebase Authentication sign in
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Last login time timestamp update chesthunnam
        await setDoc(doc(db, 'users', user.uid), {
            lastLogin: new Date().toISOString()
        }, { merge: true });

        return { success: true, user: user };
    } catch (error) {
        console.error('[Auth] Login error:', error);
        let errorMessage = 'Invalid username/email or password';
        
        if (error.code === 'auth/user-not-found') {
            errorMessage = 'Ee email tho ekkada account kanipinchaledhu';
        } else if (error.code === 'auth/wrong-password') {
            errorMessage = 'Incorrect password';
        } else if (error.code === 'auth/invalid-email') {
            errorMessage = 'Invalid email format';
        } else if (error.code === 'auth/too-many-requests') {
            errorMessage = 'Chaala failed attempts. Kontha sepu aagi malli try cheyandi';
        } else if (error.message && error.message.includes('Username kanipinchaledhu')) {
            errorMessage = error.message;
        }
        
        return { success: false, error: errorMessage };
    }
}

// User Sign out session end chesthunnam
export async function signOutUser() {
    try {
        await signOut(auth);
        return { success: true };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

// Current logged in user object ni retrieve chesthunnam
export function getCurrentUser() {
    return auth.currentUser;
}

// User profile data ni Firestore database nundi fetch chesthunnam
export async function getUserData(uid) {
    try {
        const userDoc = await getDoc(doc(db, 'users', uid));
        if (userDoc.exists()) {
            return { success: true, data: userDoc.data() };
        } else {
            return { success: false, error: 'User data kanipinchaledhu' };
        }
    } catch (error) {
        return { success: false, error: error.message };
    }
}

// Firebase Auth state listener
export function onAuthStateChanged(callback) {
    return firebaseOnAuthStateChanged(auth, callback);
}
