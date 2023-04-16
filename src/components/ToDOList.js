import React from 'react'
import Todo from './Todo'

function ToDOList({ setTodos, todos, filteredTodos }) {

    return (
        <div>
            <div className="todo-container">
                <ul className="todo-list">

                    {filteredTodos.map(todo => <Todo

                        key={todo.id}
                        text={todo.text}
                        todos={todos}
                        setTodos={setTodos}
                        todo={todo}

                    />)}
                </ul>
            </div>

        </div>
    )
}

export default ToDOList