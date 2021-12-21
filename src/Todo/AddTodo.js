import React, {useState} from "react"
import PropTypes from 'prop-types'

function AddTodo ({onCreated}) {
    let [value, setValue] = useState('')
    function submitHandler (event) {
        event.preventDefault()

        if(value.trim()) {
            onCreated(value)
            setValue('')
        }
    }

    return (
        <form style={{marginBottom: '1rem'}} onSubmit={submitHandler}>
            <input onChange={event => setValue(event.target.value)}/>
            <button type="submit">Add Todo</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreated: PropTypes.func.isRequired,
}

export default AddTodo