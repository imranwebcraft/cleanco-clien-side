import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../config/firebase.config';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	// State
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	// Firebase

	// Create new user
	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	// Log in user
	const login = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	// Log out user

	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};

	// Obeserver

	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, currentUser => {
			setUser(currentUser);
			setLoading(false);
			console.log('Observer', currentUser);
		});

		return () => {
			unSubscribe();
		};
	}, []);

	const authInfo = { user, loading, createUser, login, logOut };
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
