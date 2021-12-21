import React, { useContext } from "react";
import PropTypes from "prop-types";
import Context from "../context";

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        borderBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    }
}

function TodoItem({todo, index, onChange}) {
    let {removeTodo} = useContext(Context)
    const classes = []

    if (todo.complete) {
        classes.push('done')
    }

    return (
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input style={styles.input} checked={todo.complete} type="checkbox" onChange={() => onChange(todo.id)} />
                <storng>{index + 1}</storng>
                &nbsp;
                {todo.title}
            </span>
            <button className="rm" onClick={removeTodo.bind(null, todo.id)}>&times;</button> {/* () => removeTodo(todo.id) */}
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired,
}

export default TodoItem