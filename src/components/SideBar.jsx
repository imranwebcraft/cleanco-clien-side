import { NavLink } from 'react-router-dom';

const SideBar = () => {
	return (
		<ul className="flex flex-col gap-2">
			{/* Navbar menu content here */}

			<NavLink
				to="/about"
				className={({ isActive }) =>
					isActive
						? 'px-2 py-2 bg-green-500 rounded-lg text-center text-white'
						: ' px-2 py-2 bg-red-500 rounded-md hover:bg-gray-200 text-center text-white'
				}
			>
				About
			</NavLink>

			<NavLink
				to="/contact"
				className={({ isActive }) =>
					isActive
						? 'px-2 py-2 bg-green-500 rounded-lg text-center text-white'
						: 'px-2 py-2 bg-red-500 rounded-md hover:bg-gray-200 text-center text-white'
				}
			>
				Contact
			</NavLink>

			<NavLink
				to="/login"
				className={({ isActive }) =>
					isActive
						? 'px-2 py-2 bg-green-500 rounded-lg text-center text-white'
						: 'px-2 py-2 bg-red-500 rounded-md hover:bg-gray-200 text-center text-white'
				}
			>
				Login
			</NavLink>
		</ul>
	);
};

export default SideBar;
