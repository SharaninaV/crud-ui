import React, { useState } from 'react';

const Add = props => {
	const initialFormState = { id: null, name: '', age: ''};
	const [user, setUser] = useState(initialFormState);

	const handleInputChange = event => {
		const { name, value } = event.currentTarget;
		setUser({ ...user, [name]: value });
	};

	const handleSubmit = event => {
		event.preventDefault();
		if (!user.name || !user.age) return;
		props.addUser(user);
		setUser(initialFormState);
	}

	return (
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<form onSubmit={handleSubmit}>
						<div className="mb-3">
							<label htmlFor="getName" className="form-label">Name</label>
							<input 
							type="text" 
							className="form-control" 
							id="getName" 
							name="name" 
							value={user.name}
							onChange={handleInputChange}
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="getAge" className="form-label">Age</label>
							<input 
							type="text" 
							className="form-control" 
							id="getAge" 
							name="age"
							value={user.age}
							onChange={handleInputChange}
							/>
						</div>
						<button type="submit" className="btn btn-primary">Add user</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export { Add };