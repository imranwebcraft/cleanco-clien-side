import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const useAuth = () => {
	const auth = useContext(AuthContext); //Eta ekta object return kre jeta auth er moddhe amra peye jabo
	return auth;
};

export default useAuth;
