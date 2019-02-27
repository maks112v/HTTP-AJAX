import React from 'react';
import { Table } from 'reactstrap';
import Friend from './Friend';

export default (props) => {
  console.log("Friends Length", props.friends.length);
  if(props.friends.length === 0){
    return(
      <h1 className="text-center">Loading...</h1>
    );
  }
  return(
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
            <Friend key={friend.id} friend={friend} />
          ))}
        </tbody>
      </Table>
  );
}