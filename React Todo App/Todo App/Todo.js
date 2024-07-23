import { useState } from 'react';
import {TodoList} from './TodoList'; // Adjust the import path

const App = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddTodo = () => {
        if (inputValue.trim() !== '') {
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    };

    const handleDeleteTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h1>To-Do App</h1>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter a new todo..."
            />
            <button onClick={handleAddTodo}>Add</button>
            <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
        </div>
    );
};

export default App;
