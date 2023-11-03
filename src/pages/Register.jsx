import { useState } from 'react';
import useAuth from '../hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
	const { createUser } = useAuth();
	// Work with login form ---- Controlled form component
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	// Register form handler
	const handleRegister = async e => {
		e.preventDefault();

		try {
			await createUser(email, password);
			navigate('/');
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content flex-col lg:flex-col">
				<div className="text-center">
					<h1 className="text-5xl font-bold">Register now!</h1>
					<p className="py-6 max-w-2xl">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
						excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
						a id nisi.
					</p>
				</div>
				<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
					<form onSubmit={handleRegister} className="card-body">
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								type="email"
								placeholder="email"
								className="input input-bordered"
								required
								onBlur={e => setEmail(e.target.value)}
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Password</span>
							</label>
							<input
								type="password"
								placeholder="password"
								className="input input-bordered"
								required
								onBlur={e => setPassword(e.target.value)}
							/>
							<label className="label">
								<a href="#" className="label-text-alt link link-hover">
									Forgot password?
								</a>
							</label>
						</div>
						<div className="form-control mt-6">
							<button type="submit" className="btn btn-primary">
								Login
							</button>
						</div>
					</form>
				</div>
				<div>
					<Link to={'/login'} className=" btn btn-ghost">
						Login
					</Link>
				</div>
				<div>
					<Link to={'/'} className=" btn btn-ghost">
						Home
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Register;
