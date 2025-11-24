import React from 'react';
export default function TodoItem({todo, removeTask}){
    return(
        <li>
            {todo.date} -- {todo.hora} -- : {todo.text}
            <button style={styles.button} onClick={() => removeTask(todo.id)}>X</button> {/* Botão de "eliminação" */}
        </li>
    );
};

const styles ={
    item:{
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "15px",
        display: "flex",
        justifycontent: "space-between",
        alignItems: "center" 
    },
    button:{
        background: "red",
        color: "white",
        border: "none",
        padding: "5px",
        cursor: "pointer",
        borderRadius: "4px"
    }
}