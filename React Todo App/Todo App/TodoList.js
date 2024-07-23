export const TodoList = ({ todos, onDeleteTodo }) => {
    return (
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>
                    {todo}
                    <button onClick={() => onDeleteTodo(index)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};
