import React, { Component } from "react";
import { InputGroup, Input } from "reactstrap";

export default class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state ={
      search: ''
    }
  }

  changeHandler = e => {

  }

	render() {
		return (
			<div className='py-2'>
				<InputGroup>
					<Input
						placeholder='Name'
						type='text'
						name='name'
						value={this.state.search}
						onChange={this.changeHandler}
						required
					/>
				</InputGroup>
			</div>
		);
	}
}
