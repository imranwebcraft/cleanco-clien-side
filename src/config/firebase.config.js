import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyCrZPcsWuUtz5B-wVG3lvPeiERyC9dQ0HA',
	authDomain: 'clean-co-f0820.firebaseapp.com',
	projectId: 'clean-co-f0820',
	storageBucket: 'clean-co-f0820.appspot.com',
	messagingSenderId: '538341096654',
	appId: '1:538341096654:web:7664e25782373eead7249f',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
