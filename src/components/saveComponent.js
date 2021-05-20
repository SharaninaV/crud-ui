import React from 'react';

const Save = props => {

	const handleSave = event => {
    if (!props.user.name.trim().match(/^([A-Za-zА-Яа-яё])+$/)) {
      alert('Имя должно состоять из букв русского и английского алфавита.');
      return; 
    }
    if (props.user.age < 0) {
      alert('Возраст должен быть больше 0.');
      return; 
    }
    if (!props.user.age.trim().match(/^(\d)+$/)) {
      alert('Возраст должен состоять из цифр.');
      return; 
    }
    if (props.user.age >= 150) {
      alert('Возраст должен быть меньше 150.');
      return; 
    }
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
		<button className="btn btn-success" onClick={handleSave}>Сохранить</button>
		)
};

export { Save };
