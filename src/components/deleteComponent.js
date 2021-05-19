import React from 'react';

const Delete = props => {
	const handleDelete = event => {
		deleteUser(props.id);
	}

	const deleteUser = async(id) => {
		let response = await fetch('http://178.128.196.163:3000/api/records/' + id, {
      		method: 'DELETE'
     	});
     	if (response.ok) {
     		props.deleteUser(id);
     	} else {
     		console.log(response.status);
     	}
	}

return(
	<button className="btn btn-danger" onClick={handleDelete}>Delete</button>
)};

export { Delete };