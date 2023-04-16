import React, { useState } from 'react'

function Todo({ todo, todos, setTodos, text }) {


    const deleteHandler = () => {

        setTodos(todos.filter((el) => el.id !== todo.id))
    };

    const completeHandler = () => {

        setTodos(todos.map(item => {

            if (item.id === todo.id) {
                return { ...item, completed: !item.completed }
            }
            return item;
        }))
    }


    return (
        <div className='todo'>
            <li className={`todo-item ${todo.completed ? "completed" : ""}`} >{text}</li>
            <button onClick={completeHandler} className='complete-btn'>✔</button>
            <button onClick={deleteHandler} className='complete-btn'>X</button>

        </div>
    )
}

export default Todo