import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children }) => {
	const { user, loading } = useAuth();

	if (loading) {
		return (
			<div className=" h-screen flex justify-center items-center">
				<progress className="progress w-56"></progress>
			</div>
		);
	}

	if (user) {
		return children;
	}
	return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
