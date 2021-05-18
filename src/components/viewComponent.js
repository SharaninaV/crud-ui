import React from 'react';

const View = props => (
    <table className="table">
     	<thead>
      		<tr>
       			<th scope="col">Name</th>
       			<th scope="col">Surname</th>
      		</tr>
     	</thead>
     	<tbody>
      		{props.users.length > 0 ? (
       			props.users.map(user => (
        			<tr key={user.id}>
         				<td>{user.name}</td>
         				<td>{user.surname}</td>
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

export { View }