import React from 'react';

const Edit = props => {

	const handleEdit = event => {
		
		props.toggleIsEditing();
	}

	return (

	 <button className="btn btn-info" onClick={handleEdit}>Изменить</button>
	)};

export { Edit };
