import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
	return (
		<div className="flex h-screen">
			<div className=" bg-red-400 flex-[1]">
				<p>Admin Layout</p>
			</div>
			<div className=" bg-green-300 flex-[3]">
				<Outlet></Outlet>
			</div>
		</div>
	);
};

export default AdminLayout;
