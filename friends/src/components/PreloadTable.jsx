import React from "react";
import { Table } from "reactstrap";
import Skeleton from "react-loading-skeleton";

export default () => {
	return (
		<Table bordered>
			<thead>
				<tr>
					<th>#</th>
					<th>Name</th>
					<th>Email</th>
					<th>Age</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>
						<Skeleton />
					</th>
					<td>
						<Skeleton />
					</td>
					<td>
						<Skeleton />
					</td>
					<td>
						<Skeleton />
					</td>
				</tr>
				<tr>
					<th>
						<Skeleton />
					</th>
					<td>
						<Skeleton />
					</td>
					<td>
						<Skeleton />
					</td>
					<td>
						<Skeleton />
					</td>
				</tr>
				<tr>
					<th>
						<Skeleton />
					</th>
					<td>
						<Skeleton />
					</td>
					<td>
						<Skeleton />
					</td>
					<td>
						<Skeleton />
					</td>
				</tr>
				<tr>
					<th>
						<Skeleton />
					</th>
					<td>
						<Skeleton />
					</td>
					<td>
						<Skeleton />
					</td>
					<td>
						<Skeleton />
					</td>
				</tr>
				<tr>
					<th>
						<Skeleton />
					</th>
					<td>
						<Skeleton />
					</td>
					<td>
						<Skeleton />
					</td>
					<td>
						<Skeleton />
					</td>
				</tr>
			</tbody>
		</Table>
	);
};
