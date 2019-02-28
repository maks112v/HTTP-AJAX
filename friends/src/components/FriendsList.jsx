import React from "react";
import { Table } from "reactstrap";
import Friend from "./Friend";
import PreloadTable from './PreloadTable';

export default props => {
	if (props.friends.length === 0) {
		return (
			<PreloadTable />
		);
	}
	return (
		<Table bordered hover>
			<thead>
				<tr>
					<th>#</th>
					<th>Name</th>
					<th>Email</th>
					<th>Age</th>
				</tr>
			</thead>
			<tbody>
				{props.friends.map(friend => (
					<Friend
						key={friend.id}
						friend={friend}
						updateHandler={props.updateHandler}
					/>
				))}
			</tbody>
		</Table>
	);
};
