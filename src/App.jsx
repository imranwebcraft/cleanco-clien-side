import { Outlet } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';

const App = () => {
	return (
		<MainLayout>
			{/* As children */}
			<Outlet></Outlet>
		</MainLayout>
	);
};

export default App;
