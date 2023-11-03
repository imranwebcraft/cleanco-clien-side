import { NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Navbar = () => {
	const { user, logOut } = useAuth();

	// HandleLogout
	const handleLogout = async () => {
		try {
			await logOut();
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<ul className=" flex gap-10">
			{/* Navbar menu content here */}
			<NavLink
				to="/about"
				className={({ isActive }) =>
					isActive
						? 'px-2 py-2 bg-green-500 rounded-lg text-white'
						: ' px-2 py-2 bg-red-500 hover:bg-gray-200 text-white'
				}
			>
				About
			</NavLink>
			<NavLink
				to="/contact"
				className={({ isActive }) =>
					isActive
						? 'px-2 py-2 bg-green-500 rounded-lg text-white'
						: 'px-2 py-2 bg-red-500 hover:bg-gray-200 text-white'
				}
			>
				Contact
			</NavLink>

			{user ? (
				<button onClick={handleLogout} className=" btn btn-sm btn-warning">
					Logout
				</button>
			) : (
				<NavLink
					to="/login"
					className={({ isActive }) =>
						isActive
							? 'px-2 py-2 bg-green-500 rounded-lg text-white'
							: 'px-2 py-2 bg-red-500 hover:bg-gray-200 text-white'
					}
				>
					Login
				</NavLink>
			)}
		</ul>
	);
};

export default Navbar;
