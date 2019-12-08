// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from 'prop-types';
import TodoItem from "./TodoItem.js";

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
    }
};

function TodoList(props) {
    return (
        <ul style = {styles.ul}>
            {props.todos.map((item, index) => {
                return <TodoItem key={item.id} todo={item} index={index} onChange={props.onToggle}/>
            })}
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
};

export default TodoList


