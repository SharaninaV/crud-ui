import React, { useState } from 'react';
import { Edit } from './editComponent';
import { Delete } from './deleteComponent';
import { Save } from './saveComponent';

const User = props => {

	const [user, setUser] = useState(props.data);
	const [isEditing, setIsEditing] = useState(false);

	const toggleIsEditing = () => {
		setIsEditing(!isEditing);
	}

	const handleInputChange = event => {
		const { name, value } = event.currentTarget;
		setUser({ ...user, [name]: value });
	}

return (
        <>
				  <td>
            <input 
            type="text" 
            name="name"
            disabled={!isEditing}
            value={props.data ? user.name : 'Нет данных'} 
            onChange={handleInputChange}/>
          </td>
         	<td>
            <input 
            type="text"
            name="age"
            disabled={!isEditing}
            value={props.data ? user.age : 'Нет данных'} 
            onChange={handleInputChange}/>
          </td>
          <td>
            {isEditing ? (
              <Save id={props.id} user={user} toggleIsEditing={toggleIsEditing}/>
            ) : (
              <>
                <Delete id={props.id} deleteUser={props.deleteUser}/>
                <Edit toggleIsEditing={toggleIsEditing}/>
              </>
                	)}
          </td>
        </>
	)
};

export { User }
