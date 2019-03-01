import React, { Component } from "react";
import {
	Row,
	Col,
	Collapse,
	Button,
	CardBody,
	Card,
	InputGroup,
	Input
} from "reactstrap";

class AddFriend extends Component {
	constructor(props) {
		super(props);
		this.state = {
			collapse: false,
			update: false,
			updateId: null,
			inputs: {
				name: "",
				age: "",
				email: ""
			}
		};
	}

	componentWillReceiveProps(props) {
		const { showUpdate, update } = props;
		if (showUpdate) {
			this.setState({
				collapse: showUpdate,
				update: update.id,
				inputs: {
					name: update.name,
					age: update.age,
					email: update.email
				}
			});
		}
	}

	toggle = () => {
		this.props.resetHandler();
		this.setState({
			collapse: !this.state.collapse,
			update: false,
			inputs: {
				name: "",
				age: "",
				email: ""
			}
		});
	};

	changeHandler = e => {
		e.persist();
		let value = "";
		if (e.target.type === "number") {
			value = Number(e.target.value);
			console.log(value);
		} else {
			value = e.target.value;
		}
		this.setState(prevState => ({
			inputs: {
				...prevState.inputs,
				[e.target.name]: value
			}
		}));
	};

	submitHandler = e => {
		e.preventDefault();
		this.props.addFriend(this.state.inputs);
		this.setState({	
			collapse: false,
			inputs: {
				name: "",
				age: "",
				email: ""
			}
		});
	};

	deleteHandler = () => {
		this.props.deleteHandler(this.state.update);
		this.toggle();
	};

	updateHandler = e => {
		e.preventDefault();
		this.props.updateDatabase(this.state.update, this.state.inputs);
		this.toggle();
	};

	removeUpdate = () => {
		this.props.resetHandler();
		this.setState({
			update: false,
			inputs: {
				name: "",
				age: "",
				email: ""
			}
		});
	};

	render() {
		return (
			<div>
				<Row>
					<Col className='text-right'>
						{this.state.collapse ? (
							<Button
								color='primary'
								onClick={this.toggle}
								outline
								style={{ marginBottom: "1rem" }}
								className=''
							>
								Close
							</Button>
						) : (
							<Button
								color='primary'
								onClick={this.toggle}
								style={{ marginBottom: "1rem" }}
								className=''
							>
								Add A Friend
							</Button>
						)}
					</Col>
				</Row>
				<Collapse isOpen={this.state.collapse}>
					<Card>
						<CardBody>
							<h5>
								{this.state.update
									? `Updating ${this.state.inputs.name}`
									: "Add A Friend"}
							</h5>
							<form
								onSubmit={
									this.state.update ? this.updateHandler : this.submitHandler
								}
							>
								<Row>
									<Col xs='8'>
										<InputGroup>
											<Input
												placeholder='Name'
												type='text'
												name='name'
												value={this.state.inputs.name}
												onChange={this.changeHandler}
												required
											/>
										</InputGroup>
									</Col>
									<Col>
										<Input
											placeholder='Age'
											type='number'
											name='age'
											value={this.state.inputs.age}
											onChange={this.changeHandler}
											required
										/>
									</Col>
								</Row>
								<br />
								<InputGroup>
									<Input
										placeholder='Email'
										name='email'
										type='email'
										value={this.state.inputs.email}
										onChange={this.changeHandler}
										required
									/>
								</InputGroup>
								<br />
								<Button type='Submit' color='success' outline>
									{this.state.update ? "Update" : "Create"}
								</Button>
								{this.state.update ? (
									<Button
										type='Submit'
										className='ml-3'
										color='danger'
										onClick={this.deleteHandler}
										outline
									>
										Delete
									</Button>
								) : null}
								{this.state.update ? (
									<Button
										type='Submit'
										className='ml-3'
										color='warning'
										onClick={this.removeUpdate}
										outline
									>
										Clear
									</Button>
								) : null}
							</form>
						</CardBody>
					</Card>
				</Collapse>
			</div>
		);
	}
}

export default AddFriend;
