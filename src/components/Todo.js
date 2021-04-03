import React from 'react'

const Todo = ({text,todo, todos, setTodos}) => {
    //Events
    const deleteHandler = () => {
        // get all the todos and filter it out, check if the element which is clicked match 
        // todo.id from state, if match then get rid of it.
        setTodos(todos.filter ((el) => el.id !== todo.id))
    };

    const conpleteHandler = () => {
        // check if the clicked items's id matches the todo id from the state
        // 
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                // if matches then get all the items(...item) and modify only the complted
                // value and chnage to true.
                return {
                    ...item, completed: !item.completed
                }
            }
            // if it did not match the if statement then return them as they were
            return item;
        }))
    };

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : "" }`}>{text}</li>
            <button onClick={conpleteHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;