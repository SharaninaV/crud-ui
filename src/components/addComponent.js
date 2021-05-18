import React, { useState } from 'react';

const Add = props => {
	const initialFormState = { id: null, name: '', surname: ''};
	const [user, setUser] = useState(initialFormState);

	const handleInputChange = event => {
		const { name, value } = event.currentTarget;
		setUser({ ...user, [name]: value });
	};

	const handleSubmit = event => {
		event.preventDefault();
		if (!user.name || !user.surname) return;
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
							<label htmlFor="getSurname" className="form-label">Surname</label>
							<input 
							type="text" 
							className="form-control" 
							id="getSurname" 
							name="surname"
							value={user.surname}
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