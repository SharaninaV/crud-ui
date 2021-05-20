import React, { useState } from 'react';

const Add = props => {
	const initialFormState = {name: '', age: ''};
	const [user, setUser] = useState(initialFormState);

	const handleInputChange = event => {
		const { name, value } = event.currentTarget;
		setUser({ ...user, [name]: value });
	};

	const handleSubmit = event => {
		event.preventDefault();
		if (!user.name.trim().match(/^([A-Za-zА-Яа-яё])+$/)) {
			alert('Имя должно состоять из букв русского и английского алфавита.');
			return; 
		}
		if (user.age < 0) {
			alert('Возраст должен быть больше 0.');
			return; 
		}
		if (!user.age.trim().match(/^(\d)+$/)) {
			alert('Возраст должен состоять из цифр.');
			return; 
		}
		if (user.age >= 150) {
			alert('Возраст должен быть меньше 150.');
			return; 
		}
		addUser(user);
		setUser(initialFormState);
	};

	const addUser = async(user) => {
   		const newUser = {data: user};
    	let response = await fetch('http://178.128.196.163:3000/api/records', {
      		method: 'PUT',
      		headers: {
          	'Content-Type': 'application/json;charset=utf-8'
      		},
      		body: JSON.stringify(newUser)
     	});
     	if (response.ok) {
     		props.needRefreshToggle();
     	} else {
     		console.log(response.status);
     	}
  	}

	return (
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<form onSubmit={handleSubmit}>
						<div className="mb-3">
							<label htmlFor="getName" className="form-label">Имя</label>
							<input 
							type="text" 
							className="form-control" 
							name="name" 
							value={user.name}
							onChange={handleInputChange}
							required
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="getAge" className="form-label">Возраст</label>
							<input 
							type="text" 
							className="form-control" 
							name="age"
							value={user.age}
							onChange={handleInputChange}
							required
							/>
						</div>
						<button type="submit" className="btn btn-primary">Добавить</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export { Add };
