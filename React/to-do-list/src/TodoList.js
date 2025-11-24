import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({todos, removeTask}){
    return(
        <ul style={styles.list}>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} removeTask={removeTask}/>
            ))}
        </ul>
    )
}

// Styles in-code
const styles={
    list:{
    listStyle: "none",
    padding: 0
    }
};