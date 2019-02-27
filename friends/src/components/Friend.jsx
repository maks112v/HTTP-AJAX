import React from 'react'
import PropTypes from 'prop-types';

const Friend = ({friend}) => {
  return(
    <tr>
      <th scope="row">{ friend.id }</th>
      <td>{ friend.name }</td>
      <td>{ friend.email }</td>
      <td>{ friend.age }</td>
    </tr>
  );
}

Friend.propTypes = {
  friend: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    email: PropTypes.string,
    id: PropTypes.number,
  })
}

export default Friend;