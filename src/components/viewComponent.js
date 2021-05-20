import React from 'react';
import { User } from './userComponent';


const View = props => {


  return(
    <table className="table table-hover align-middle">
     	<thead>
      		<tr>
       			<th scope="col">Имя</th>
       			<th scope="col">Возраст</th>
            <th scope="col">Опции</th>
      		</tr>
     	</thead>
     	<tbody>
      		{props.users.length > 0 ? (
       			props.users.map(user => (
        			<tr key={user._id}>
                <User id={user._id} data={user.data} deleteUser={props.deleteUser}/>
        			</tr>
        		))
       		) : (
        		<tr>
         			<td colSpan={3}>Нет пользователей</td>
        		</tr>
       		)}
     	</tbody>
    </table>
  )
}

export { View }