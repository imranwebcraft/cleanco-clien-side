import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import About from '../components/About';
import Contact from '../components/Contact';
import Login from '../components/Login';
import Register from '../components/Register';
import AdminLayout from '../components/layout/AdminLayout';
import AddService from '../components/AddService';
import CheckStatus from '../components/CheckStatus';

const router = createBrowserRouter([
	// Mian layout route object --- ekai 100
	{
		path: '/', //Main path //Absolute path
		element: <App />,
		children: [
			{
				path: 'about', //Main path er under a ei path gulo //Relative path
				element: <About />,
			},
			{
				path: 'contact',
				element: <Contact />,
			},
		],
	},
	// Login and register layout route object --- Ekai 100
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/register',
		element: <Register />,
	},
	// Admin Lauout route object
	{
		path: '/admin',
		element: <AdminLayout />,
		children: [
			{
				path: 'addService',
				element: <AddService />,
			},
			{
				path: 'checkStatus',
				element: <CheckStatus />,
			},
		],
	},
]);

export default router;
