import React, { useEffect, useState } from 'react'
import Form from './components/Form'
import ToDOList from './components/ToDOList'

function App() {


	const [inputText, setInputText] = useState("");
	const [todos, setTodos] = useState([]);
	const [status, setStatus] = useState();
	const [filteredTodos, setFilteredTodos] = useState([]);

	useEffect(() => {
		filterHandler();
	}, [todos, status])


	const filterHandler = () => {

		switch (status) {
			case "completed":
				setFilteredTodos(todos.filter(el => el.completed === true))
				break;
			case "uncompleted":
				setFilteredTodos(todos.filter(el => el.completed === false))
				break;
			default:
				setFilteredTodos(todos);
				break;


		}


	};

	return (
		<div className='App'>
			<header><h1>Ugur's Todo List</h1></header>
			<Form
				setInputText={setInputText}
				inputText={inputText}
				setTodos={setTodos}
				todos={todos}
				status={status}
				setStatus={setStatus}

			/>

			<ToDOList
				setInputText={setInputText}
				todos={todos}
				setTodos={setTodos}
				filteredTodos={filteredTodos}
				setFilteredTodos={setFilteredTodos}
			/>

		</div>
	)
}

export default App