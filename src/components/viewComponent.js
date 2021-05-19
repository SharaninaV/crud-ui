import React from 'react';
import { Delete } from './deleteComponent';

const View = props => {

return(
    <table className="table">
     	<thead>
      		<tr>
       			<th scope="col">Name</th>
       			<th scope="col">Age</th>
            <th scope="col">Actions</th>
      		</tr>
     	</thead>
     	<tbody>
      		{props.users.length > 0 ? (
       			props.users.map(user => (
        			<tr key={user._id}>
         				<td>{user.data ? user.data.name : 'no data'}</td>
         				<td>{user.data ? user.data.age : 'no data'}</td>
                <td>
                <Delete id={user._id} deleteUser={props.deleteUser}/>
                </td>
        			</tr>
        		))
       		) : (
        		<tr>
         			<td colSpan={3}>No users</td>
        		</tr>
       		)}
     	</tbody>
    </table>
    )
}

export { View }