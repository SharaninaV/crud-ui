import React from 'react';

const View = props => (
    <table className="table">
     	<thead>
      		<tr>
       			<th scope="col">Name</th>
       			<th scope="col">Age</th>
      		</tr>
     	</thead>
     	<tbody>
      		{props.users.length > 0 ? (
       			props.users.map(user => (
        			<tr key={user._id}>
         				<td>{user.data.name}</td>
         				<td>{user.data.age}</td>
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