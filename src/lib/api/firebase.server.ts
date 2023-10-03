// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { FIREBASE_KEY } from '$env/static/private';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: FIREBASE_KEY,
	authDomain: 'casita-supplies.firebaseapp.com',
	projectId: 'casita-supplies',
	storageBucket: 'casita-supplies.appspot.com',
	messagingSenderId: '619507058721',
	appId: '1:619507058721:web:d219fa88ef83b37bc03b60'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
