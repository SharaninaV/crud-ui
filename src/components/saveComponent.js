import React from 'react';

const Save = props => {

	const handleSave = event => {
		saveUser(props.id,props.user);
	}

	const saveUser = async(id,user) => {
			const updatedUser = {_id: id, data: user};
			let response = await fetch('http://178.128.196.163:3000/api/records/' + id, {
      		method: 'POST',
      		headers: {
          	'Content-Type': 'application/json;charset=utf-8'
      		},
      		body: JSON.stringify(updatedUser)
     	});
     	if (response.ok) {
     		props.toggleIsEditing();
     	} else {
     		console.log(response.status);
     	}
	}


	return (
		<button className="btn btn-success" onClick={handleSave}>Save</button>
		)
};

export { Save };
