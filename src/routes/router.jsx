import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AdminLayout from '../components/layout/AdminLayout';
import AddService from '../pages/AddService';
import CheckStatus from '../pages/CheckStatus';
import Home from '../pages/Home';

const router = createBrowserRouter([
	// Mian layout route object --- ekai 100
	{
		path: '/', //Main path //Absolute path
		element: <App />,
		children: [
			{
				index: true,
				element: <Home />,
			},
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
				index: true,
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
