import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<ul className=" flex gap-10">
			{/* Navbar menu content here */}
			<NavLink
				to="/about"
				className={({ isActive }) =>
					isActive
						? 'px-2 py-2 bg-green-500 rounded-lg'
						: ' px-2 py-2 bg-red-500 hover:bg-gray-200'
				}
			>
				About
			</NavLink>
			<NavLink
				to="/contact"
				className={({ isActive }) =>
					isActive
						? 'px-2 py-2 bg-green-500 rounded-lg'
						: 'px-2 py-2 bg-red-500 hover:bg-gray-200'
				}
			>
				Contact
			</NavLink>
			<NavLink
				to="/login"
				className={({ isActive }) =>
					isActive
						? 'px-2 py-2 bg-green-500 rounded-lg'
						: 'px-2 py-2 bg-red-500 hover:bg-gray-200'
				}
			>
				Login
			</NavLink>
		</ul>
	);
};

export default Navbar;
