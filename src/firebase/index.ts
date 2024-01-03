import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { firebaseConfig } from './config';

// init firebase app
const app = initializeApp(firebaseConfig);
// init services
export const db = getFirestore(app);
export const firebaseAuth = getAuth();
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
