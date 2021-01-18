// form for input
// component to display list items
//  object to hold todos (id: <todos.id, name: <todos.name>, status: complete/incomplete)
    // remove or delete items - strike through items

import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// declare an initial value for the todo
const initialTodo = {
    id: '',
    description: '',
    complete: false,
}
const initialTodoList = [
    {
        id: uuidv4(),
        description: 'Make this todo list work',
        complete: false,
    },
]
const Todos = () => {
    // todos will be an array of todo objects
    const [todos, setTodos] = useState(initialTodoList)
    const [todo, setTodo] = useState(initialTodo)
    // change handler for the text area setting what we input to be the
    // description of the todo
    const handleChange = (e) => {
        setTodo({
            // spreading in any values already existing
            ...todo,
            description: e.target.value
        })
    }
    const submitHandler = (e) => {
        e.preventDefault();
        // add the new todo to the todo list
        setTodos([
            // spread in any existing todos so we dont overwrite them
            ...todos,
            {
                // spread in existing values of todo object
                ...todo,
                // create a random id
                id: uuidv4(),
            }
        ])
        // reset the todo back to the initial values
        setTodo(initialTodo)
    }
    const handleCompleted = (id) => {
        // set todos
        setTodos(
            // map current todo items in todos array
            todos.map(todo => {
                //  when we find the item that matches the passed in id
                if (todo.id === id) {
                    // we can return the item with updated completed property
                    // toggled to the opposite of what it currently is
                    return {
                        ...todo,
                        complete: !todo.complete
                    }
                }
                // finally return the item to be updated in setTodos
                return todo;
            }))
    }
    return (
        <div>
            <form
                className={'todo-form'}
                onSubmit={submitHandler}
            >
                <textarea
                    rows={3}
                    className={'todo-input'}
                    name={'Todo'}
                    onChange={handleChange}
                    value={todo.description}
                />
                <button
                    type={'submit'}
                    className={'todo-submit-btn'}
                >
                    Add Todo
        </button>
            </form>
            <div
                className={'todo-list'}>
                {todos.map(todo => {
                    return (
                        // add conditional style to strike text if complete is true
                        <p style={{ textDecoration: todo.complete && 'line-through' }}
                            key={todo.id}
                            onClick={() => handleCompleted(todo.id)}>
                            {todo.description}
                        </p>
                    )
                })}
            </div>
        </div>
    );
};
export default Todos;